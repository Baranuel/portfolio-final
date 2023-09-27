"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TechRow } from "./TechRow";
import { TextSection } from "./TextSection";
import pepa from "../image.jpg";
import { TextSectionMobile } from "./TextSectionMobile";

export const ProjectItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div
        className={
          " w-full min-h-16 sm:min-h-14  max-h-[500px]flex flex-col border-b border-primaryGrey/10 "
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
              <div className="p-4 sm:p-1  grid grid-cols-12  sm:grid-rows-4 xs:grid-rows-3 gap-4 sm:gap-2 grid-rows-8 h-[350px] sm:h-[300px] xs:h-[260px]  w-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-red-200 relative rounded-xl w-full  col-span-5 row-span-6 lg:row-span-5 sm:row-span-2 sm:col-span-5 xs:row-span-1  lg:row-start-3 sm:row-start-1  lg:col-span-6 row-start-1 col-start-1  h-full"
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
                  className=" row-span-4 row-start-2 col-start-6 lg:hidden justify-self-center  self-center bg-[#333]/30 w-[1px] lg:w-full lg:h-[1px] "
                />

                <div className=" col-start-6 lg:row-start-1 col-span-7 row-start-1 xs:row-span-1 hidden sm:block">
                  <TextSectionMobile
                    heading="Objectives"
                    text={[
                      "Increase User Experience",
                      " Create CMS system for Pizzeria",
                    ]}
                  />
                </div>

                <div className=" col-start-7 lg:col-start-1 lg:row-start-1 col-span-3 lg:col-span-6 sm:hidden sm:col-span-4 row-span-4 lg:row-span-2 row-start-1">
                  <TextSection
                    heading="UX"
                    text="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deserunt error beatae explicabo animi, corrupti et quae? Facere,
            perspiciatis ullam!"
                  />
                </div>

                <div className=" col-start-10 lg:col-start-7  lg:row-start-1 col-span-4 lg:col-span-6 sm:col-span-5 sm:col-start-5 sm:row-span-3 sm:hidden row-span-4 row-start-1">
                  <TextSection
                    heading="CMS"
                    text="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deserunt error beatae explicabo animi, corrupti et quae? Facere,
            perspiciatis ullam!"
                  />
                </div>

                <div className="col-start-7 lg:col-start-7 row-start-4 lg:row-start-3 sm:row-start-3 xs:row-start-2 sm:col-start-1 row-span-2 sm:row-span-1  lg:self-start self-end sm:self-end  col-span-12">
                  <TechRow />
                </div>

                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="col-start-7 row-start-6 lg:row-start-7 sm:row-start-4 xs:row-start-3 sm:col-start-1 sm:col-span-6 row-span-1  self-end sm:self-center lg:col-start-7 col-span-3 lg:col-span-3 "
                >
                  <button className="bg-background rounded-md text-black border border-slate-300  py-2 lg:text-[14px]  w-full">
                    Find-out More
                  </button>
                </motion.div>

                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="col-start-10 row-start-6 lg:row-start-7 sm:row-start-4 xs:row-start-3 sm:col-start-7 row-span-1 sm:col-span-6   self-end sm:self-center lg:col-start-10 col-span-3 lg:col-span-3"
                >
                  <button className="bg-black rounded-md text-white  py-2  lg:text-[14px] w-full">
                    Click me
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
