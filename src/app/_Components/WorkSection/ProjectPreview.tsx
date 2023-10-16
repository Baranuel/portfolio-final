"use client";
import { useCallback, useEffect, useState } from "react";
import { ProjectWithObjectives } from "../../../../prisma/types";
import {
  motion,
  useAnimate,
  useAnimationControls,
  usePresence,
} from "framer-motion";


import {GiExpand} from "react-icons/gi";
  import {IoCloseCircle} from "react-icons/io5";

type ProjectPreviewProps = {
  project: ProjectWithObjectives | undefined;
  setPreviewProject: () => void;
};

export const ProjectPreview = ({
  project,
  setPreviewProject,
}: ProjectPreviewProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const [isFullScreen, setIsFullScreen] = useState(false);


  const isPresentAnimation = useCallback(async () => {
    await animate(scope.current, {
      display: "block",
      width: "100%",
    });
    await animate(scope.current, {
      height: "100%",
    });
  }, [animate, scope]);



  const isNotPresentAnimation = useCallback(async () => {
    await animate(scope.current, {
      height: 1,
    });
    await animate(scope.current, {
      width: 0,
    });
    await animate(scope.current, {
      opacity: 0,
    });
    !isPresent && safeToRemove();
  }, [animate, isPresent, safeToRemove, scope]);


  useEffect(() => {
    if (isPresent && window) {
      isPresentAnimation();
    } else {
      isNotPresentAnimation();

    }
  }, [isPresent, isPresentAnimation, isNotPresentAnimation, safeToRemove]);



  return (
    <div className="w-full h-full fixed backdrop-blur-[10px] z-50">
        <motion.div
      
      className={`fixed flex items-center justify-center transition-all ${isFullScreen ? "w-full h-full" : "w-[90vw] h-[90vh]"}  z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <motion.div
        ref={scope}
        initial={{ width: "0%", height: 2 }}
        transition={{
          transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
        }}
        className={`bg-black ${isFullScreen ? "rounded-none" : "rounded-xl"}  overflow-hidden relative`}
      >
        <div className="w-full h-10 bg-black absolute top-0 flex gap-3 items-center justify-end p-2 px-4 shadow-xl">
        <GiExpand onClick={() => setIsFullScreen(!isFullScreen)} className='text-2xl text-white hover:cursor-pointer hover:scale-110' />
        <IoCloseCircle className='text-2xl text-white hover:cursor-pointer'   
           onClick={() => setPreviewProject()}/>
        </div>
        <iframe loading="eager"  src="https://paluba.vercel.app" className="w-full h-full" />
      </motion.div>
    </motion.div>
    </div>
  );
};
