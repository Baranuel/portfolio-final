'use client';
import { useEffect, useRef } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { Beam } from './Beam';
import { Particle } from './Particle';



export const Canvas = ({isVisible, beamHeight}: {isVisible: boolean, beamHeight: number}) => {

  const lastTimeRef = useRef(0);
  const particleCount = useMotionValue(0);
  const distanceRef = useMotionValue(20);

  const beamOpacity = useMotionValue(1);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const beamRef = useRef<Beam>(new Beam(1, beamHeight, distanceRef.get()));

  useEffect(() => {
    // Animate particle count based on visibility
    animate(particleCount, isVisible ? 50 : 0, { // Increased particle count
      duration: 0.3,
      ease: "easeInOut"
    });

  }, [beamOpacity, distanceRef, isVisible, particleCount]);

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
        const x = centerX + (offset - 0.5) * 2;

        particles.push(new Particle(x, beamStartY + (Math.random() * beam.height) , 'rgb(251, 113, 133)'));
      }
      particles.forEach((particle, i) => {
        particle.update(deltaTime);
        particle.draw(ctx);
        if(particle.y < beamStartY || particle.y > beamStartY + beam.height - 1 || particle.life <= 0) {
          particles.splice(i, 1);
        }
      }); 
      
      
            // // Draw beam
            // beam.update(distanceRef.get(), beamHeight);
            // beam.draw(ctx, centerX, beamStartY, beamOpacity.get());
            
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
  }, [beamHeight, distanceRef, particleCount]);

  return (
    <canvas 
      width={window.innerWidth}
      height={"500px"}
      ref={canvasRef}
      className="w-full h-full min-h-[300px] absolute top-0 left-0 z-20"
      style={{ imageRendering: 'crisp-edges' }}
      />
    
  );
};
