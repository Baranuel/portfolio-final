"use client";

import { motion } from "framer-motion";
import { Canvas } from "./Canvas";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SvgChip } from "./SvgChip";

interface CarouselStripeProps {
  clipPathClass: string;
  version: "undiscovered" | "discovered";
}

const CAROUSEL_CONFIG = {
  itemCounts: {
    stripes: 2,
    items: 4,
  },
} as const;



export const Carousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const animationFrameRef = useRef<number>();


  // Carousel Settings
  const BEAM_HEIGHT = typeof window !== 'undefined' && window.innerWidth > 768 ? (275-8) :(200 - 8);
  const ANIMATION_DURATION = 25;
  const ITEM_GAP = 60;


  const checkVisibility = useCallback(() => {
    const elements = document.querySelectorAll('#moving-element');
    
    const isOverlapping = Array.from(elements).some(element => {
      const windowWidth = window.innerWidth;
      const screenMiddle = windowWidth / 2;
      const rect = element.getBoundingClientRect();
      const elementLeft = rect.left + 20;
      const elementRight = rect.right;
      const isOverlapping = elementLeft <= screenMiddle && elementRight >= screenMiddle;
      return isOverlapping
    });

    setIsVisible(isOverlapping)

    // Continue the animation loop
    animationFrameRef.current = requestAnimationFrame(checkVisibility);
  }, []);

  // // Start checking visibility when component mounts
  useEffect(() => {
    checkVisibility();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [checkVisibility]);

  const desktopVariants = useMemo(() => ({
    animate: {
      x: [`calc(-100% - ${ITEM_GAP}px)`, "0"],
      transition: {
        duration: ANIMATION_DURATION,
        ease: "linear",
        repeat: Infinity,
      },
    },
  }), [ITEM_GAP, ANIMATION_DURATION]);



  const CarouselStripe = useMemo(() => {
    const Stripe =  ({ clipPathClass, version }: CarouselStripeProps) => (
      <div
        className={cn(
          "absolute top-0 left-0 gap-[60px] whitespace-nowrap w-full h-full flex ",
          clipPathClass
        )}
      >
        {Array.from({ length: CAROUSEL_CONFIG.itemCounts.stripes }).map((_, i) => (
          <motion.div
            key={i}
            variants={desktopVariants}
            initial="initial" 
            animate="animate"
            className="w-max h-full flex items-center cursor-grab gap-[60px] active:cursor-grabbing"
          >
            {Array.from({ length: CAROUSEL_CONFIG.itemCounts.items }).map((_, index) => (
              <div
                key={index}
                id="moving-element"
                className={cn("relative rounded-md border-4 border-black",
                  `w-[475px] h-[275px]`,
                  `md:w-[300px] md:h-[200px]`,
                  {
                  'bg-amber-300': version === 'undiscovered',
                  'bg-red-500': version === 'discovered',
                })}
              >
                {index}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
    Stripe.displayName = 'CarouselStripe'
    return Stripe

  }, [desktopVariants]);


  return (
    <section className={cn("w-full h-[450px] md:h-[400px] py-2 gap-2 bg-white flex flex-col")}>
      <h1 
        onClick={() => setIsVisible(!isVisible)} 
        className={cn("text-4xl text-center font-pixelify  ")}
      >
        Process
      </h1>
      <div className="relative h-full flex-1 overflow-hidden">
      <div className="w-full h-[60px]  relative ">
        <SvgChip isVisible={isVisible} />
      </div>
        <Canvas isVisible={isVisible} beamHeight={BEAM_HEIGHT} />
        
        <CarouselStripe
          version='undiscovered'
          clipPathClass="clip-path-first"
        />
        <CarouselStripe
          version='discovered'
          clipPathClass="clip-path-second"
        />
      
      </div>
    </section>
  );
};
