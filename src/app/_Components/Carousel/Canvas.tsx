'use client';
import { useEffect, useRef, useMemo } from 'react';

class Beam {
  width: number;
  height: number;
  distance: number;

  constructor(width: number = 4, height: number = 275, distance: number = 30) {
    this.width = width;
    this.height = height;
    this.distance = distance;
  }

  createGradient(ctx: CanvasRenderingContext2D, centerX: number) {
    const gradient = ctx.createLinearGradient(
      centerX - this.width/2,
      0,
      centerX + this.distance,
      0
    );
    gradient.addColorStop(0, 'rgba(0, 255, 255, 1)');
    gradient.addColorStop(0.1, 'rgba(0, 255, 255, 0.5)');
    gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.2)');
    gradient.addColorStop(0.8, 'rgba(0, 255, 255, 0.1)');
    gradient.addColorStop(0.9, 'rgba(0, 255, 255, 0.05)');
    gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
    return gradient;
  }

  draw(ctx: CanvasRenderingContext2D, centerX: number, startY: number) {
    const gradient = this.createGradient(ctx, centerX);
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#0fffff';
    ctx.fillStyle = gradient;
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

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() + 0.5  ;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.life = 100;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowBlur = 10;
    ctx.globalCompositeOperation = 'lighter';

    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.random() * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Glow effect
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fill();
  }

  update(deltaTime: number) {
    this.vx +=  deltaTime * 0.01
    this.vy += (Math.random() - 0.5) * deltaTime * 0.01
    this.x += this.vx;
    this.y += this.vy;
    this.life -= deltaTime 
  }
}

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef(0);
  const beamRef = useRef<Beam>(new Beam());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d'); // Optimize for non-transparent canvas
    if (!ctx) return;

    const particles: Particle[] = particlesRef.current;
    const beam = beamRef.current;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    const animate = (currentTime: number) => {
      if (!ctx) return;
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const beamStartY = (canvas.height - beam.height) / 2;
      for(let i = 0; i < 15; i++){
        particles.push(new Particle(centerX, beamStartY + Math.random() * beam.height, 'white'));
      }

      // Draw beam
      // beam.draw(ctx, centerX, beamStartY);
      
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