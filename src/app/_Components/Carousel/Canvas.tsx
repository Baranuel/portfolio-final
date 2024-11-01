'use client';
import { useEffect, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { Beam } from './Beam';
import { Particle } from './Particle';



export const Canvas = ({isVisible, beamHeight}: {isVisible: boolean, beamHeight: number}) => {

  const lastTimeRef = useRef(0);
  const particleCount = useMotionValue(0);
  const distanceRef = useMotionValue(20);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const beamRef = useRef<Beam>(new Beam(4, beamHeight - 8, distanceRef.get()));

  useEffect(() => {
    // Animate particle count based on visibility
    animate(particleCount, isVisible ? 60 : 0, { // Increased particle count
      duration: 0.5,
      ease: "easeInOut"
    });

    animate(distanceRef, isVisible ? 20 : 0, {
      duration: 0.4,
      ease: "linear",
    });
  }, [distanceRef, isVisible, particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = particlesRef.current;
    const beam: Beam = beamRef.current;

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
      
      const centerX = canvas.width / 2;
      const beamStartY = (canvas.height - beam.height) / 2;

      const particlesToCreate = Math.round(particleCount.get());
      for(let i = 0; i < particlesToCreate; i++) {
        
        const offset = (Math.random() + Math.random() + Math.random()) / 3; // makes particles more concentrated around the center
        const x = centerX + (offset - 0.5) * 20;

        particles.push(new Particle(x, beamStartY + (Math.random() * beam.height), 'white'));
      }

      // Draw beam
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
      style={{ imageRendering: 'crisp-edges' }}
      />
    
  );
};
