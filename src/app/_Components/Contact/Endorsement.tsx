"use client";

import HeartIcon from "../../../../public/heart.svg";
import HeartFilledIcon from "../../../../public/heart-filled.svg";

import TrashIcon from "../../../../public/trash.svg";
import TrashFilledIcon from "../../../../public/trash-filled.svg";
import LightbulbIcon from "../../../../public/lightbulb.svg";
import LightbulbFilledIcon from "../../../../public/lightbulb-filled.svg";
import Image from "next/image";
import { Endorsement as EndorsementType } from "@prisma/client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUpdateEndorsementMutation } from "@/app/hooks/use-update-endorsement-mutation";
import { setCheckedIconsInLocalStorage } from "@/app/helpers/set-checked-icons-in-localstorage";

type EndorsementProps = {
  items: EndorsementType[] | undefined;
};

const iconsMap = {
  Hearth: HeartIcon,
  Trash: TrashIcon,
  Inspire: LightbulbIcon,
};

const checkedIconsMap = {
  Hearth: HeartFilledIcon,
  Trash: TrashFilledIcon,
  Inspire: LightbulbFilledIcon,
};




export const Endorsement = ({ items }: EndorsementProps) => {
  const EndorsementRef = useRef(null);
  const isInView = useInView(EndorsementRef, {
    margin: "-20% 0px",
    once: true,
  });

   const checkedIcons:string[] =  typeof window !== "undefined" ? localStorage.checkedIcons : []

  const {mutate: updateEndorsement} = useUpdateEndorsementMutation()
  
  const updateEndorsementHandler = async (item: EndorsementType) => {
    const alreadyChecked = setCheckedIconsInLocalStorage(item.icon);
    if (alreadyChecked) return;
    updateEndorsement(item)
  }



  return (
    <div
      ref={EndorsementRef}
      className="w-[100px] relative  bg-stone-950 h-[450px] sm:h-full min-h-[100px] sm:w-full "
    >
      <AnimatePresence>
        {isInView && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-stone-400"
            >
              Endorsement
            </motion.span>
            <div className="w-full h-full flex flex-col sm:flex-row gap-2 sm:py-2 items-center justify-start sm:justify-start ">
              {items?.map((item, index) => {
                const isChecked = checkedIcons && checkedIcons.includes(item.icon);
                return (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ delay: 0.05 * index }}
                    key={index}
                    className="flex sm:flex-col   gap-1"
                  >
                    <div
                      onClick={() => updateEndorsementHandler(item)}
                      className="bg-stone-950 h-[75px] w-[75px]  sm:h-[60px] sm:w-[60px]  rounded-md flex flex-col gap-1 items-center justify-center  text-stone-200 "
                    >
                      <div className="relative  flex  items-center justify-center  w-2/3 h-2/3 sm:w-full sm:h-full hover:cursor-pointer">
                      {isChecked ? 
                      <Image src={ checkedIconsMap[item.icon] } alt={item.icon} fill className="animate-icon_ping " /> :
                      <Image src={ iconsMap[item.icon] } alt={item.icon} fill /> 
 }
                      </div>
                      <span className="text-[14px] sm:text-xs text-stone-400">
                        {item.amount}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
