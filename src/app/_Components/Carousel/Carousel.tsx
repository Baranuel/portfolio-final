"use client";

import { motion } from "framer-motion";
import { Canvas } from "./Canvas";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SvgChip } from "./SvgChip";

interface CarouselStripeProps {
  clipPathClass: string;
  version: "undiscovered" | "discovered";
  gap: number;
}

const CAROUSEL_CONFIG = {
  settings: {
    gap: 50,
    gapMobile: 100,
    duration: 35,
  },
  itemCounts: {
    stripes: 2,
    items: 4,
  },
  dimensions: {
    desktop: {
      width: 475,
      height: 275,
    },
    mobile: {
      height: 200,
      width: 300,
    },
  },
} as const;

export const Carousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { settings } = CAROUSEL_CONFIG;
  const animationFrameRef = useRef<number>();
  const beamHeight = typeof window !== 'undefined' && window.innerWidth > 768 ? CAROUSEL_CONFIG.dimensions.desktop.height : CAROUSEL_CONFIG.dimensions.mobile.height;

  

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
      x: [`calc(-100% - ${settings.gap}px)`, "0"],
      transition: {
        duration: settings.duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  }), [settings.gap, settings.duration]);



  const CarouselStripe = useMemo(() => {
    const StripeComponent = ({ clipPathClass, gap, version }: CarouselStripeProps) => (
      <div
        style={{ gap: `${gap}px` }}
        className={cn(
          "absolute top-0 left-0 whitespace-nowrap w-full h-full flex ",
          clipPathClass
        )}
      >
        {Array.from({ length: CAROUSEL_CONFIG.itemCounts.stripes }).map((_, i) => (
          <motion.div
            key={i}
            variants={desktopVariants}
            initial="initial" 
            animate="animate"
            style={{ gap: `${gap}px` }}
            className="w-max h-full flex items-center cursor-grab active:cursor-grabbing"
          >
            {Array.from({ length: CAROUSEL_CONFIG.itemCounts.items }).map((_, index) => (
              <div
                key={index}
                id="moving-element"
                className={cn("relative rounded-md border-4 border-black",
                  `w-[475px] h-[275px]`,
                  `md:w-[300px] md:h-[200px]`,
                  {
                  'bg-amber-200': version === 'undiscovered',
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
    return StripeComponent;
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
        <Canvas isVisible={isVisible} beamHeight={beamHeight} />
        
        {/* Desktop Carousel */}
        <CarouselStripe
          version='undiscovered'
          clipPathClass="clip-path-first"
          gap={settings.gap}
        />
        <CarouselStripe
          version='discovered'
          clipPathClass="clip-path-second"
          gap={settings.gap}
        />
      
      </div>
    </section>
  );
};
