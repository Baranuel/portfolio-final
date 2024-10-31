'use client';
import { useEffect, useRef } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: {x: number, y: number, vx: number, vy: number, life: number, size: number, hue: number}[] = [];
    const createParticle = () => {
      const centerX = canvas.width / 2;
      const y = 0; // Start from top
      const spread = Math.random() < 0.3 ? 30 : 10; // Reduced spread

      const particle = {
        x: centerX + (Math.random() - 0.3) * spread,
        y,
        vx: (Math.random() - 0.5) * 2, // Increased horizontal velocity
        vy: Math.random() * 10 + 5, // Increased downward velocity
        life: 1.0, // Increased life
        size: Math.random() * 1 + 1, // Larger particles
        hue: Math.random() * 60 + 0
      };
      particles.push(particle);
    };

    let startTime = Date.now();
    const growthDuration = 1000; // 1 second for the beam to grow

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const growthProgress = Math.min(elapsed / growthDuration, 1);
      
      const time = currentTime * 0.001;
      const glowPulse = Math.sin(time * 3) * 0.1 + 1;

      // Calculate beam width based on growth progress
      const maxBeamWidth = 30; // Reduced from 50
      const currentBeamWidth = maxBeamWidth * growthProgress;
      const maxCoreWidth = 2; // Reduced from 4
      const currentCoreWidth = maxCoreWidth * growthProgress;

      // Main beam
      const mainGradient = ctx.createLinearGradient(
        canvas.width / 2 - 20 * growthProgress, 0, // Reduced from 40
        canvas.width / 2 + 20 * growthProgress, 0  // Reduced from 40
      );
      mainGradient.addColorStop(0.2, `rgba(255, 150, 50, ${0.8 * glowPulse})`);
      mainGradient.addColorStop(0.5, `rgba(255, 255, 200, ${0.9 * glowPulse})`);
      mainGradient.addColorStop(0.8, `rgba(255, 150, 50, ${0.8 * glowPulse})`);

      ctx.fillStyle = mainGradient;
      ctx.fillRect(canvas.width / 2 - currentBeamWidth/2 , 0, currentBeamWidth, canvas.height);

      // Core beam with stronger at top
      const coreHeight = canvas.height;
      const gradient = ctx.createLinearGradient(0, 0, 0, coreHeight);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Full opacity at top
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)'); // Fade out at bottom

      ctx.fillStyle = gradient;
      ctx.fillRect(canvas.width / 2 - currentCoreWidth/2, 0, currentCoreWidth, coreHeight);

      // Top source glow
      ctx.beginPath();
      ctx.arc(canvas.width / 2, 0, 10 * growthProgress, 0, Math.PI * 2); // Reduced from 15
      ctx.fillStyle = `rgba(255, 255, 200, ${0.8 * glowPulse})`;
      ctx.fill();

      // Only create particles after beam has started growing
      if (growthProgress > 0.3) {
        // Create many more particles
        for (let i = 0; i < 5; i++) {
          if (Math.random() < 0.9) createParticle();
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.01; // Slower life reduction
          
          p.vx *= 0.99; // Slow down horizontal movement
          p.vy *= 0.99; // Slight slowdown of vertical movement

          if (p.y > canvas.height - 10) {
            particles.splice(i, 1);
            continue;
          }

          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          // Draw particles with glow effect
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life * 0.3})`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life})`;
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-[350px] absolute top-0 -left-[15%] translate-y-[5%] z-40"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};