"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import pepa from "../../../../Screenshot 2023-09-20 at 20.18.05.png";

export const ProjectItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
    console.log(item)
  return (
    <>
      <motion.div
        layout
        layoutId="expand"
        className={" w-full min-h-16  max-h-[500px]flex flex-col border-b border-primaryGrey/10 " }
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && ""} rounded-md px-2 w-full h-16 min-h-16 overflow flex gap-8  xl:gap-12 md:gap-6 sm:gap-4 items-center hover:cursor-pointer hover:scale-110 sm:hover:scale-100 transition-transform transition-duration-200 `}
        >
          <span className="text-text sm:text-[12px]">2023</span>
          <span className=" flex flex-1 items-center justify-start min-w-[200px] sm:min-w-0 text-[18px] sm:text-[15px] font-bold ">
            Project Name
          </span>
          <span className=" bg-violet-400/30 text-violet-700 p-1 px-2 text-[12px] rounded-full">
            category
          </span>
        </div>

        {/* This is the start of expanded view */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 500 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 1, ease: [0.06, 0.975, 0.195, 0.985] }}
              className=" bg-gradient-to-b from-transparent to-zinc-100/30 max-h-[500px] h-[0px] sm:max-h-[300px] sm:h-[300px] "
            >
              <div className="p-4 sm:p-2 flex flex-col  gap-2 w-full h-full overflow-hidden">
                <div className="flex justify-between gap-6 sm:gap-2 min-h-46 h-[450px] sm:h-[120px] w-full ">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{delay:0.15}}
                    className="relative h-full w-1/2 sm:w-2/3 bg-black rounded-xl"
                  >
                    <Image
                      src={pepa}
                      alt=""
                      fill
                      className="rounded-md aspect-square "
                    />
                  </motion.div>
              
                    <div className=" w-1/2 h-fit self-center flex flex-wrap gap-2 justify-center sm:gap-1">
                      {[1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                          <motion.div
                            initial={{ x: 100, y: 100 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ delay: 0.05 * index }}
                            key={index}
                            className="w-20 h-20 sm:w-10 sm:h-10 bg-slate-800 rounded-md"
                          ></motion.div>
                        );
                      })}
                    
                  </div>
                </div>
                <div className="flex gap-0 flex-col  rounded-xl  ">
                  <hr className="w-4/5 h-1 self-center" />
                  <div className="h-fit w-full tracking-tight flex flex-col rounded-xl  p-2">
                    <span className="sm:text-[14px] text-[18px] font-semibold">Overview</span>
                    <div className="flex gap-1">
                      <span className="sm:text-[14px] text-[16px] text-justify">
                        {" "}
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus eos laborum qu obcaecati, nisi, repellendus dicta suscipit magni debitis, molestias amet!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">

                  {/* <div className="w-1/2  flex flex-col gap-0 p-2">
                    <span className="sm:text-[14px] text-[18px] font-bold text-zinc-600  ">Objectives</span>
                    <span className="sm:text-[12px] text-[14px] text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quis.</span>
                    <span className="sm:text-[12px] text-[14px] text-zinc-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste molestias facilis.</span>
                  </div> */}

                  <div className="w-full flex justify-end gap-4 p-2">
       
                    <button className="text-[14px]"> Find out more.</button>
                    <button className="text-[14px] bg-violet-500 py-2 px-4 rounded-md">Live Demo.</button>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
