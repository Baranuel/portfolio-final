"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TechRow } from "./TechRow";
import { TextSection } from "./TextSection";
import pepa from "../image.jpg";

export const ProjectItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div
        className={
          " w-full min-h-16  max-h-[500px]flex flex-col border-b border-primaryGrey/10 "
        }
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen && ""
          } rounded-md px-2 w-full h-16 min-h-16 overflow flex gap-8  xl:gap-12 md:gap-6 sm:gap-4 items-center hover:cursor-pointer hover:scale-110 sm:hover:scale-100 transition-transform transition-duration-200 `}
        >
          <span className="text-text sm:text-[14px]">2023</span>
          <span className=" flex flex-1 items-center justify-start min-w-[200px] sm:min-w-0 text-[20px] sm:text-[18px] font-bold ">
            Project Name
          </span>
          <span className=" bg-violet-400/30 text-violet-700 p-1 px-2 text-[12px] rounded-full">
            category
          </span>
        </div>

        {/* This is the start of expanded view */}

        <motion.div
          className={` bg-gradient-to-b from-transparent overflow-hidden to-zinc-100/30 h-auto ${
            !isOpen ? "max-h-0" : "max-h-[400px]"
          } transition-all duration-300 bezier `}
        >
          <AnimatePresence>
            {isOpen && (
              <div className="p-4 sm:p-2  grid grid-cols-16 grid-rows-8 h-[350px] xl:h-[300px] gap-2 w-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-red-200 relative rounded-xl w-full  col-span-7 row-span-6 row-start-1 col-start-1  h-full"
                >
                  {" "}
                  <Image
                    src={""}
                    alt="pepa"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </motion.div>
                {/* Image */}
                <motion.span
                  initial={{ height: 0 }}
                  animate={{ height: "90%" }}
                  transition={{ delay: 0.3 }}
                  className=" row-span-4 row-start-2  col-start-8  justify-self-center  self-center bg-[#333] w-[1px]"
                />
                <div className=" col-start-9 col-span-4 row-span-4 justify-self-center row-start-1">
                  <TextSection />
                </div>

                <div className=" col-start-13 col-span-4 row-span-4 row-start-1">
                  <TextSection />
                </div>

                <div className="col-start-9 row-start-4 self-center col-span-4">
                  <TechRow />
                </div>

                <div className="col-start-9 row-start-5 col-span-4">
                  <button className="bg-black">Click me</button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
