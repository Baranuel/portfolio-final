'use client';
import { useEffect, useRef } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const beamWidth = 80;
      const time = Date.now() * 0.001;
      
      // Draw beam segments
      for (let y = 0; y < canvas.height; y += 4) {
        const pulseWidth = Math.sin(time + y * 0.02) * 30;
        
        // Create particles
        if (Math.random() < 0.15) {
          const particleX = canvas.width / 2 + (Math.random() - 0.5) * beamWidth;
          particles.push({
            x: particleX,
            y: y,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.5) * 12,
            life: 1,
            maxLife: 0.5 + Math.random() * 0.5
          });
        }

        // Intense outer glow
        const gradientOuter = ctx.createLinearGradient(
          canvas.width / 2 - beamWidth - pulseWidth * 2, y,
          canvas.width / 2 + beamWidth + pulseWidth * 2, y
        );
        gradientOuter.addColorStop(0, 'transparent');
        gradientOuter.addColorStop(0.2, 'rgba(0, 255, 200, 0.4)');
        gradientOuter.addColorStop(0.5, 'rgba(100, 255, 255, 0.6)');
        gradientOuter.addColorStop(0.8, 'rgba(0, 255, 200, 0.4)');
        gradientOuter.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradientOuter;
        ctx.fillRect(
          canvas.width / 2 - beamWidth - pulseWidth * 2,
          y,
          (beamWidth + pulseWidth * 2) * 2,
          4
        );

        // Vibrant core
        const coreWidth = 25;
        const coreGradient = ctx.createLinearGradient(
          canvas.width / 2 - coreWidth, y,
          canvas.width / 2 + coreWidth, y
        );
        coreGradient.addColorStop(0, 'rgba(0, 255, 200, 1)');
        coreGradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
        coreGradient.addColorStop(1, 'rgba(0, 255, 200, 1)');
        
        ctx.fillStyle = coreGradient;
        ctx.fillRect(
          canvas.width / 2 - coreWidth/2,
          y,
          coreWidth,
          4
        );
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.016;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 200, 0.8)';
        ctx.fill();
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
      className="w-full h-[300px] absolute top-0 left-0 z-50 p-4"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};