'use client';
import { useEffect, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';

class Beam {
  width: number;
  height: number;
  distance: number;
  opacity: number;
  constructor(width: number = 4, height: number = 275, distance: number = 40, opacity: number = 1) {
    this.width = width;
    this.height = height;
    this.distance = distance;
    this.opacity = 1;
  }

  createGradient(ctx: CanvasRenderingContext2D, centerX: number) {
    const gradient = ctx.createLinearGradient(
      centerX - this.width/2,
      0,
      centerX + this.distance,
      0
    );
    gradient.addColorStop(0, 'rgba(255, 140, 0, 1)');
    gradient.addColorStop(0.1, 'rgba(255, 140, 0, 0.5)');
    gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.3)');
    gradient.addColorStop(0.8, 'rgba(255, 140, 0, 0.1)');
    gradient.addColorStop(0.9, 'rgba(255, 140, 0, 0.0)');
    gradient.addColorStop(1, 'rgba(255, 140, 0, 0)');
    return gradient;
  }

  update(distance: number) {
    this.distance = distance;
  }

  draw(ctx: CanvasRenderingContext2D, centerX: number, startY: number) {
    const gradient = this.createGradient(ctx, centerX)
    ctx.fillStyle = gradient;
    ctx.globalAlpha = this.opacity;
    ctx.fillRect(centerX - this.width/2, startY, this.width + this.distance, this.height);
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() + 0.5) * 0.2 * (Math.random()  * 3);
    this.vy = (Math.random() - 0.5) * 0.5;
    this.life = 300;
    this.color = color;
    this.size = Math.floor(Math.random() * 3) + 1; // Fixed pixel sizes: 1 or 2
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = Math.max(0, 1 - (this.x / (ctx.canvas.width * 0.8)));
    
    ctx.globalCompositeOperation = 'lighter';

    // Draw a perfect square for crisp pixels
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.fillRect(
      Math.floor(this.x), 
      Math.floor(this.y), 
      this.size, 
      this.size
    );

    // Add a single pixel white core for extra brightness
    if (this.size > 1) {
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.5})`;
      ctx.fillRect(
        Math.floor(this.x) + Math.floor(this.size/2), 
        Math.floor(this.y) + Math.floor(this.size/2), 
        1, 
        1
      );
    }
  }

  update(deltaTime: number) {
    this.vx += deltaTime * 0.003;
    this.vy += (Math.random() - 0.5) * deltaTime * 0.003;
    this.x += this.vx;
    this.y += this.vy;
    this.life -= deltaTime;
  }
}



export const Canvas = ({isVisible}: {isVisible: boolean}) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef(0);
  const particleCount = useMotionValue(0);
  const distanceRef = useMotionValue(40);
  const beamRef = useRef<Beam>(new Beam(4, 275, distanceRef.get()));



  useEffect(() => {
    // Animate particle count based on visibility
    animate(particleCount, isVisible ? 80 : 0, {
      duration: 0.5,
      ease: "easeInOut"
    });

    animate(distanceRef, isVisible ? 40 : 0, {
      duration: 0.4,
      ease: "linear",
    });
  }, [isVisible]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Disable image smoothing for crisp pixels
    ctx.imageSmoothingEnabled = false;

    const particles: Particle[] = particlesRef.current;
    const beam = beamRef.current;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    const animate = (currentTime: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const beamStartY = (canvas.height - beam.height) / 2;
      for(let i = 0; i < Math.round(particleCount.get()); i++){
        particles.push(new Particle(centerX, beamStartY + Math.random() * beam.height, 'white'));
      }

      // Draw beam
      beam.draw(ctx, centerX, beamStartY);
      beam.update(distanceRef.get());
      
      // Update and draw particles in single pass
      particles.forEach((particle, i) => {
        particle.update(deltaTime);
        particle.draw(ctx);
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }); 
      
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    const resizeHandler = () => {
      requestAnimationFrame(resizeCanvas);
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 z-40"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};