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
    gradient.addColorStop(0, 'rgba(253, 230, 138, 1)');
    gradient.addColorStop(0.5, 'rgba(253, 230, 138, 0.3)');
    gradient.addColorStop(0.8, 'rgba(253, 230, 138, 0.1)');
    gradient.addColorStop(0.9, 'rgba(253, 230, 138, 0.0)');
    gradient.addColorStop(1, 'rgba(253, 230, 138, 0)');
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
  initialX: number;

  constructor(x: number, y: number, color: string) {
    this.initialX = x;
    this.x = x;
    this.y = y;
    // Randomize initial velocity based on distance from center
    const distanceMultiplier = Math.random() * 0.3 + 0.1; // Slower near center
    this.vx = (Math.random() + 0.2) * distanceMultiplier * 3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.life = 250;
    this.color = color;
    this.size = Math.floor(Math.random() * 2.3) + 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Calculate distance from initial position
    const distanceFromCenter = Math.abs(this.x - this.initialX);
    const maxDistance = ctx.canvas.width * 0.5;
    
    // Exponential falloff for opacity based on distance
    const opacityFalloff = Math.exp(-distanceFromCenter / (maxDistance * 0.9));
    const opacity = Math.min(1, opacityFalloff);
    
    ctx.globalCompositeOperation = 'lighter'

    // Draw main particle with distance-based opacity
    ctx.fillStyle = `rgba(253, 230, 138, 1)`;
    ctx.fillRect(
      Math.floor(this.x), 
      Math.floor(this.y), 
      this.size, 
      this.size
    );

    // Brighter core for particles near the center
    if (this.size > 1 && distanceFromCenter < 50) {
      ctx.fillStyle = `rgba(253, 250, 238, ${opacity})`;
      ctx.fillRect(
        Math.floor(this.x) + Math.floor(this.size/2), 
        Math.floor(this.y) + Math.floor(this.size/2), 
        1, 
        1
      );
    }
  }

  update(deltaTime: number) {
    // Slower acceleration for particles closer to center
    const distanceFromCenter = Math.abs(this.x - this.initialX);
    const accelerationFactor = Math.min(1, distanceFromCenter / 100);
    
    this.vx += deltaTime * 0.003 * accelerationFactor;
    this.vy += (Math.random() - 0.5) * deltaTime * 0.002;
    this.x += this.vx - 0.1;
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
  const beamRef = useRef<Beam>(new Beam(4, 275 - 8, distanceRef.get()));

  useEffect(() => {
    // Animate particle count based on visibility
    animate(particleCount, isVisible ? 60 : 0, { // Increased particle count
      duration: 0.5,
      ease: "easeInOut"
    });

    animate(distanceRef, isVisible ? 40 : 0, {
      duration: 0.4,
      ease: "linear",
    });
  }, [distanceRef, isVisible, particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

      // Create more particles near the center
      const particlesToCreate = Math.round(particleCount.get());
      for(let i = 0; i < particlesToCreate; i++) {
        // Gaussian-like distribution around beam
        const offset = (Math.random() + Math.random() + Math.random()) / 3;
        const x = centerX + (offset - 0.5) * 20; // Concentrated around beam
        particles.push(new Particle(x, beamStartY + Math.random() * beam.height, 'white'));
      }

      beam.draw(ctx, centerX, beamStartY);
      beam.update(distanceRef.get());
      
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
  }, [distanceRef, particleCount]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 z-40"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};