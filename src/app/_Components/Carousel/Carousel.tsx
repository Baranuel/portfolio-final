"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Canvas } from "./Canvas";

export const Carousel = () => {
  const CAROUSEL_SETTINGS = {
    gap: 100,
    gapMobile: 100,
    duration: 15,
  };

  const desktopVariants = {
    animate: {
      x: [`calc(-100% - ${CAROUSEL_SETTINGS.gap}px)`, "0"],
      transition: {
        duration: CAROUSEL_SETTINGS.duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const mobileVariants = {
    animate: {
      y: [`calc(-100% - ${CAROUSEL_SETTINGS.gapMobile}px)`, "0"],
      transition: {
        duration: CAROUSEL_SETTINGS.duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const CarouselStripe = ({
    color,
    clipPathClass,
    gap,
  }: {
    color: "red" | "yellow";
    clipPathClass: string;
    gap: number;
  }) => (
    <div
      style={{ gap: `${gap}px` }}
      className={`absolute top-0 left-0 whitespace-nowrap w-full h-full flex md:hidden ${clipPathClass}`}
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          variants={desktopVariants}
          initial="initial"
          animate="animate"
          style={{ gap: `${gap}px` }}
          className={`w-max h-full flex items-center`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-[500px] h-[275px] relative bg-${color}-500`}
            >
              {index}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );

  const MobileCarouselStripe = ({
    color,
    clipPathClass,
    gap,
  }: {
    color: "red" | "yellow";
    clipPathClass: string;
    gap: number;
  }) => (
    <div
      style={{ gap: `${gap}px` }}
      className={`absolute  w-full h-full md:flex hidden md:flex-col p-2 ${clipPathClass}`}
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          variants={mobileVariants}
          initial="initial"
          animate="animate"
          style={{ gap: `${gap}px` }}
          className={`w-full flex flex-col items-center`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-full h-[200px] relative bg-${color}-500 mb-${gap}px`}
            >
              {index}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="w-full h-[450px] py-2 gap-2 bg-white flex flex-col">
      <h1 className="text-4xl text-center font-pixelify">Process</h1>
      <div className="relative h-full flex-1 overflow-hidden ">
      <div className="relative w-full h-[50px]">
        <Image className="" src='chip.svg' alt="laser" fill />
      </div>
        <Canvas />
        {/* Desktop Carousel */}
        <CarouselStripe
          color="yellow"
          clipPathClass="clip-path-first"
          gap={CAROUSEL_SETTINGS.gap}
        />
        <CarouselStripe
          color="red"
          clipPathClass="clip-path-second"
          gap={CAROUSEL_SETTINGS.gap}
        />

        {/* Mobile Carousel */}
        <MobileCarouselStripe
          color="yellow"
          clipPathClass="clip-path-first-mobile"
          gap={CAROUSEL_SETTINGS.gapMobile}
        />
        <MobileCarouselStripe
          color="red"
          clipPathClass="clip-path-second-mobile"
          gap={CAROUSEL_SETTINGS.gapMobile}
        />
      </div>
    </section>
  );
};
