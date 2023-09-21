"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import pepa from "../../../../Screenshot 2023-09-20 at 20.18.05.png";

export const ProjectItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(item);
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
        {/* <AnimatePresence>
          {isOpen && ( */}
        <motion.div
          //   initial={{ opacity: 0, height: 0 }}
          //   animate={{ opacity: 1, height: 500 }}
          //   exit={{ opacity: 0, height: 0 }}
          //   transition={{ duration: 1, ease: [0.06, 0.975, 0.195, 0.985] }}
          className={` bg-gradient-to-b from-transparent overflow-hidden to-zinc-100/30 h-auto ${
            !isOpen ? "max-h-0" : "max-h-[400px]"
          } transition-all duration-300 bezier `}
        >
          <div className="p-8 sm:p-2  flex h-[350px] gap-4 w-full overflow-hidden">
            <AnimatePresence>

            {isOpen && (
                <>
                <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{delay:0.1}} className="bg-red-200 relative rounded-xl w-2/5 h-full">
                  {" "}
                  {/* image container */}
                  <Image
                    src={pepa}
                    alt="pepa"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    />
                </motion.div>
                <motion.span initial={{height:0}} animate={{height:'90%'}} transition={{delay:0.3}} className="h-5/6 self-center bg-[#333] w-[1px]" />{" "}
                {/* HR */}
                <div className=" flex-1 h-full flex flex-col gap-0">
                  <div className="h-fit w-full flex  gap-4 p-2">
                    {" "}
                    {/* text container */}
                    <motion.div        initial={{scale:0,opacity:0 }} animate={{scale:1, opacity:1}} transition={{delay:0.25, duration:0.2, ease:'easeIn'}}>
                      <h1 className="text-[16px] font-semibold">CMS</h1>
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis deserunt error beatae explicabo animi, corrupti
                        et quae? Facere, perspiciatis ullam!
                      </p>
                    </motion.div>
                    <motion.div        initial={{scale:0,opacity:0 }} animate={{scale:1, opacity:1}} transition={{delay:0.2575, duration:0.2, ease:'easeIn'}}>
                      <h1 className="text-[16px] font-semibold">UX</h1>
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis deserunt error beatae explicabo animi, corrupti
                        et quae? Facere, perspiciatis ullam!
                      </p>
                    </motion.div>
                  </div>
                  <div className="p-2">
                    <span className="font-semibold">Technologies:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                          return (
                              <motion.div
                              initial={{x:200, y:200}} animate={{x:0, y:0}} transition={{delay:0.05 * index + 0.4}}
                              key={index}
                              className="rounded-md w-10 h-10 bg-primaryGrey"
                              ></motion.div>
                              );
                            })}
                    </div>
                  </div>
                </div>
              </>
            )}
            </AnimatePresence>
          </div>
        </motion.div>
        {/* )}
        </AnimatePresence> */}
      </div>
    </>
  );
};
