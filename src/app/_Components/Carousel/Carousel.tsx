"use client";

import { motion } from "framer-motion";
import { Canvas } from "./Canvas";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SvgChip } from "./SvgChip";
import Image from "next/image";

interface CarouselStripeProps {
  clipPathClass: string;
  version: "undiscovered" | "discovered";
}

const CAROUSEL_CONFIG = {
  itemCounts: {
    stripes: 2,
    items: 4,
  },
  images: {
    pretty: ['pretty_1.png', 'pretty_2.png', 'pretty_3.png', 'pretty_4.png'],
    ugly: ['ugly_1.png', 'ugly_2.png', 'ugly_3.png', 'ugly_4.png']
  },
  animation: {
    duration: 25,
    itemGap: 30
  }
} as const;

export const Carousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const animationFrameRef = useRef<number>();
  
  const BEAM_HEIGHT = useMemo(() => (
    typeof window !== 'undefined' ? 
      window.innerWidth > 768 ? 267 : (175 - 8) // Pre-calculated height - 8
      : 267 // Default to desktop size during SSR
  ), []);

  const checkVisibility = useCallback(() => {
    const windowWidth = window.innerWidth;
    const screenMiddle = windowWidth / 2;

    const movingElements = document.querySelectorAll('#moving-element');
    let isAnyElementVisible = false;

    movingElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementLeft = rect.left + 30;
      const elementRight = rect.right;
      
      if (elementLeft <= screenMiddle && elementRight >= screenMiddle) {
        isAnyElementVisible = true;
      }
    });

    setIsVisible(isAnyElementVisible);
    animationFrameRef.current = requestAnimationFrame(checkVisibility);
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(checkVisibility);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [checkVisibility]);

  const desktopVariants = useMemo(() => ({
    animate: {
      x: [`calc(-100% - ${CAROUSEL_CONFIG.animation.itemGap}px)`, "0"],
      transition: {
        duration: CAROUSEL_CONFIG.animation.duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  }), []);

  const CarouselItem = useCallback(({ version, index }: { version: CarouselStripeProps['version'], index: number }) => (
    <div
      id="moving-element"
      className={cn("relative rounded-md border-4 border-black",
        "w-[475px] h-[275px]",
        "md:w-[275px] md:h-[175px]",
        {
          'bg-blue-300': version === 'undiscovered',
          'bg-red-500': version === 'discovered',
        }
      )}
    >
      <Image 
        src={`/${version === 'undiscovered' ? CAROUSEL_CONFIG.images.ugly[index] : CAROUSEL_CONFIG.images.pretty[index]}`}
        alt={`${version} image`}
        priority
        fill
      />  
      <div 
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-orange-600 opacity-60",
          version === 'undiscovered' ? 'visible' : 'hidden'
        )}
      >
        {index}
      </div>
    </div>
  ), []);

  const CarouselStripe = useMemo(() => {
    const Stripe = ({ clipPathClass, version }: CarouselStripeProps) => (
      <div className={cn("absolute top-0 left-0 gap-[30px] whitespace-nowrap w-full h-full flex", clipPathClass)}>
        {Array.from({ length: CAROUSEL_CONFIG.itemCounts.stripes }).map((_, stripeIndex) => (
          <motion.div
            key={stripeIndex}
            variants={desktopVariants}
            initial="initial" 
            animate="animate"
            className="w-max h-full flex items-center cursor-grab gap-[30px] active:cursor-grabbing"
          >
            {Array.from({ length: CAROUSEL_CONFIG.itemCounts.items }).map((_, itemIndex) => (
              <CarouselItem key={itemIndex} version={version} index={itemIndex} />
            ))}
          </motion.div>
        ))}
      </div>
    );
    Stripe.displayName = 'CarouselStripe';
    return Stripe;
  }, [CarouselItem, desktopVariants]);

  return (
    <section className="w-full h-[450px] md:h-[400px] py-2 gap-2 bg-white flex flex-col">
      <h1 
        onClick={() => setIsVisible(!isVisible)} 
        className="text-4xl text-center font-pixelify"
      >
        Process
      </h1>
      <div className="relative h-full flex-1 overflow-hidden">
        <div className="w-full h-[60px] relative">
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
