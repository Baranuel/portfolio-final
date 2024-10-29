"use client";
import { useEffect, useRef } from "react";
import { calculateSpawnPosition, updateCanvasSize } from "./helpers";


const SETTINGS = {
    COLORS: ['#FF461D', '#FF0000', '#122241', '#22C55E', '#92400E'],
    MIN_SIZE: 10,
    MAX_SIZE: 30,
    MIN_SPEED: 1.5,
    MAX_SPEED: 2.5,
    MIN_LIFE_SPAN: 2000,
    MAX_LIFE_SPAN: 6000,
    MIN_PARTICLES: 20,
    MAX_PARTICLES: 70,
    SPAWN_RATE: 10, // Time in milliseconds between spawns
} as const;

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  lifeSpan: number;
  opacity: number;

  constructor(
    x: number,
    y: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.lifeSpan = Math.random() * (SETTINGS.MAX_LIFE_SPAN - SETTINGS.MIN_LIFE_SPAN) + SETTINGS.MIN_LIFE_SPAN;
    this.size = Math.random() * (SETTINGS.MAX_SIZE - SETTINGS.MIN_SIZE) + SETTINGS.MIN_SIZE;
    this.color = color;
    this.speed = Math.random() * (SETTINGS.MAX_SPEED - SETTINGS.MIN_SPEED) + SETTINGS.MIN_SPEED * (SETTINGS.MAX_SIZE - this.size);
    this.opacity = 0;
  }

  update(deltaTime: number) {
    if(this.lifeSpan < 0) return;
    this.y -= this.speed * deltaTime * 0.01;
       // Update lifespan
       this.lifeSpan -= deltaTime;
      
       if (this.opacity < 1 && this.lifeSpan > 1000) {
         this.opacity += deltaTime / 1000;
         this.opacity = Math.min(this.opacity, 1);
       }
       
       // Fade out animation when lifespan is low
       if (this.lifeSpan <= 1000) {
         this.opacity = this.lifeSpan / 1000;
       }
  }

  draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
      ctx.globalAlpha = 1;
  }
}

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastTimeRef = useRef(0);
  const lastSpawnTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    // Initial size setup
    updateCanvasSize(canvas, ctx);

    // Add resize listener
    window.addEventListener("resize", () => updateCanvasSize(canvas, ctx));
    const particles = particlesRef.current;

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      const isMinParticleCap = particles.length <= SETTINGS.MIN_PARTICLES;        
      const isTimeToSpawn = currentTime - lastSpawnTimeRef.current >= SETTINGS.SPAWN_RATE;
      
      if (isTimeToSpawn && particles.length <= SETTINGS.MAX_PARTICLES) {
        const { x, y } = calculateSpawnPosition(canvas);
        particles.push(new Particle(x, y, SETTINGS.COLORS[Math.floor(Math.random() * SETTINGS.COLORS.length)]));
        lastSpawnTimeRef.current = currentTime;
      }

      // Iterate backwards to safely remove particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.draw(ctx);
        particle.update(deltaTime);
        
        if (particle.lifeSpan <= 0) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate)
      
    };

    const animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", () => updateCanvasSize(canvas, ctx));
    };
  }, []);

  return (
    <canvas
      className="absolute top-0 left-0 w-full h-full bg-white"
      id="canvas"
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
