"use client";
import { useCallback, useEffect } from "react";
import { ProjectWithObjectives } from "../../../../prisma/types";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

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
      onClick={() => setPreviewProject()}
      className="fixed flex items-center justify-center h-[90vh] z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw]"
    >
      <motion.div
        ref={scope}
        initial={{ width: "0%", height: 2 }}
        transition={{
          transition: { duration: 0.35, ease: [0.06, 0.975, 0.195, 0.985] },
        }}
        className="bg-black rounded-xl"
      ></motion.div>
    </motion.div>
    </div>
  );
};
