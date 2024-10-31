"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas } from "./Canvas";
import { useEffect, useState, useMemo, useRef } from "react";

interface CarouselStripeProps {
  color: "red" | "yellow";
  clipPathClass: string;
  gap: number;
}

const CAROUSEL_CONFIG = {
  settings: {
    gap: 100,
    gapMobile: 100,
    duration: 35,
  },
  itemCounts: {
    stripes: 2,
    items: 4,
  },
  dimensions: {
    desktop: {
      width: 500,
      height: 275,
    },
    mobile: {
      height: 200,
    },
  },
} as const;

export const Carousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { settings } = CAROUSEL_CONFIG;
  const animationFrameRef = useRef<number>();

  const checkVisibility = () => {
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
  };

  // // Start checking visibility when component mounts
  // useEffect(() => {
  //   checkVisibility();
  //   return () => {
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //     }
  //   };
  // }, []);

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

  const mobileVariants = useMemo(() => ({
    animate: {
      y: [`calc(-100% - ${settings.gapMobile}px)`, "0"],
      transition: {
        duration: settings.duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  }), [settings.gapMobile, settings.duration]);

  const CarouselStripe = useMemo(() => {
    const StripeComponent = ({ color, clipPathClass, gap }: CarouselStripeProps) => (
      <div
        style={{ gap: `${gap}px` }}
        className={`absolute top-0 left-0 whitespace-nowrap w-full h-full flex md:hidden ${clipPathClass}`}
      >
        {Array.from({ length: CAROUSEL_CONFIG.itemCounts.stripes }).map((_, i) => (
          <motion.div
            key={i}
            variants={desktopVariants}
            initial="initial"
            animate="animate"
            style={{ gap: `${gap}px` }}
            className="w-max h-full flex items-center"
          >
            {Array.from({ length: CAROUSEL_CONFIG.itemCounts.items }).map((_, index) => (
              <div
                key={index}
                id="moving-element"
                className={`relative ${color === 'red' ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ 
                  '--scroll-speed': '1',
                  width: `${CAROUSEL_CONFIG.dimensions.desktop.width}px`,
                  height: `${CAROUSEL_CONFIG.dimensions.desktop.height}px`
                } as React.CSSProperties}
              >
                {index}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
    StripeComponent.displayName = 'CarouselStripe';
    return StripeComponent;
  }, [desktopVariants]);

  const MobileCarouselStripe = useMemo(() => {
    const MobileStripeComponent = ({ color, clipPathClass, gap }: CarouselStripeProps) => (
      <div
        style={{ gap: `${gap}px` }}
        className={`absolute w-full h-full md:flex hidden md:flex-col p-2 ${clipPathClass}`}
      >
        {Array.from({ length: CAROUSEL_CONFIG.itemCounts.stripes }).map((_, i) => (
          <motion.div
            key={i}
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            style={{ gap: `${gap}px` }}
            className="w-full flex flex-col items-center"
          >
            {Array.from({ length: CAROUSEL_CONFIG.itemCounts.items }).map((_, index) => (
              <div
                key={index}
                id="moving-element"
                className={`w-full relative ${color === 'red' ? 'bg-red-500' : 'bg-yellow-500'}`}
                style={{ 
                  '--scroll-speed': '1',
                  height: `${CAROUSEL_CONFIG.dimensions.mobile.height}px`,
                  marginBottom: `${gap}px`
                } as React.CSSProperties}
              >
                {index}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
    MobileStripeComponent.displayName = 'MobileCarouselStripe';
    return MobileStripeComponent;
  }, [mobileVariants]);

  return (
    <section className="w-full h-[450px] py-2 gap-2 bg-white flex flex-col">
      <h1 
        onClick={() => setIsVisible(!isVisible)} 
        className="text-4xl text-center font-pixelify"
      >
        Process
      </h1>
      <div className="relative h-full flex-1 overflow-hidden">
        <div className="relative w-full h-[50px]">
          <Image src='chip.svg' alt="laser" fill />
        </div>
        <Canvas isVisible={isVisible} />
        
        {/* Desktop Carousel */}
        <CarouselStripe
          color="yellow"
          clipPathClass="clip-path-first"
          gap={settings.gap}
        />
        <CarouselStripe
          color="red"
          clipPathClass="clip-path-second"
          gap={settings.gap}
        />

        {/* Mobile Carousel */}
        <MobileCarouselStripe
          color="yellow"
          clipPathClass="clip-path-first-mobile"
          gap={settings.gapMobile}
        />
        <MobileCarouselStripe
          color="red"
          clipPathClass="clip-path-second-mobile"
          gap={settings.gapMobile}
        />
      </div>
    </section>
  );
};
