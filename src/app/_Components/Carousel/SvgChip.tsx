"use client";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

export const SvgChip = ({isVisible}: {isVisible: boolean}) => {

    return <svg
        width="100%"
        height="90%"
        viewBox="0 0 109 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.rect 
            animate={{
                y: isVisible ? -10 : 0,
                fill: isVisible ? 'rgb(251, 113, 133)' : 'gray'
            }}
            transition={{
                y: {
                    duration: 0.2,
                },
                fill: {
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            }}
            stroke={'black'}
            x="40.5" 
            y="38.5" 
            width="26" 
            height="9" 
        />
    </svg>;
};
