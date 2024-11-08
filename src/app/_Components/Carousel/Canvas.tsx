'use client';
import { useEffect, useRef, useCallback } from 'react';
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
  const animationFrameRef = useRef<number>();

  // Memoize animation values
  const animateValues = useCallback(() => {
    animate(particleCount, isVisible ? 30 : 0, {
      duration: 0.3,
      ease: "easeInOut"
    });


  }, [isVisible, particleCount]);

  useEffect(() => {
    animateValues();
  }, [animateValues]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  const renderFrame = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const particles = particlesRef.current;
    const beam = beamRef.current;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;
    
    const centerX = canvas.width / 2;
    const beamStartY = (canvas.height - beam.height) / 2;

    // Create new particles
    const particlesToCreate = Math.round(particleCount.get());
    for(let i = 0; i < particlesToCreate; i++) {
      const offset = (Math.random() + Math.random() + Math.random()) / 3;
      const x = centerX + (offset - 0.5) * 2;
      particles.push(new Particle(x, beamStartY + (Math.random() * beam.height), 'rgb(253, 186, 116)'));
    }

    // Update and draw particles in a single loop
    for(let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.update(deltaTime);
      particle.draw(ctx);
      
      if(particle.y < beamStartY || particle.y > beamStartY + beam.height - 1 || particle.life <= 0) {
        particles.splice(i, 1);
      }
    }

    animationFrameRef.current = requestAnimationFrame(renderFrame);
  }, [particleCount]);

  useEffect(() => {
    resizeCanvas();
    animationFrameRef.current = requestAnimationFrame(renderFrame);

    const handleResize = () => {
      requestAnimationFrame(resizeCanvas);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [resizeCanvas, renderFrame]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full min-h-[300px] absolute top-0 left-0 z-20"
      style={{ imageRendering: 'crisp-edges' }}
    />
  );
};
