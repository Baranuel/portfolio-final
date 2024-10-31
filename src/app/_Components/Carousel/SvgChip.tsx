"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getPointsOnPath = (
  pathElement: SVGPathElement | null,
  randomLengthSegment: number
) => {
  if (!pathElement)
    return { pointsX1: [], pointsY1: [], pointsX2: [], pointsY2: [] };

  const length = pathElement.getTotalLength() 

  const pointsX1 = [];
  const pointsY1 = [];
  const pointsX2 = [];
  const pointsY2 = [];

  for (let i = 0; i <= length; i++) {
    const point = pathElement.getPointAtLength(i);
    if (i === length) {
      pointsX1.push(point.x);
      pointsY1.push(point.y);
      pointsX2.push(point.x);
      pointsY2.push(point.y);
      break;
    }
    pointsX1.push(point.x);
    pointsX2.push(point.x + randomLengthSegment);
    pointsY1.push(point.y);
    pointsY2.push(point.y);
  }

  return { pointsX1, pointsY1, pointsX2, pointsY2 };
};


const generateGradients = (points: Points[]) => {
    return points.map((point, index) => {
        return (
            <motion.linearGradient
                key={`gradient-key-${index}`}
                id={`gradient-${index + 1}`}
                gradientUnits="userSpaceOnUse"
                animate={{
                    x1: point.pointsX1,
                    x2: point.pointsX2,
                }}
                transition={{
                    duration: Math.random() * 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                }}
            >   
                    <stop offset="1" stopColor="#2EB9DF" stopOpacity="0"></stop>
                <stop offset="0.05" stopColor="#2EB9DF"></stop>
                <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            </motion.linearGradient>
        )
    })
}


type Points = {
  pointsX1: number[];
  pointsY1: number[];
  pointsX2: number[];
  pointsY2: number[];
};

export const SvgChip = () => {

const [points, setPoints] = useState<Points[]>([]);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const allPaths = document.querySelectorAll(`#path`);
    const points = Array.from(allPaths).map((path) => {
      return getPointsOnPath(path as SVGPathElement | null, 80);
    });
    setPoints(points);
  }, []);

  return (
    <svg
      viewBox="0 0 1440 49"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {generateGradients(points)}
      </defs>

      <path
        id="path"
        d="M1446 10C927.694 10 789.373 10 785 10"
        stroke="url(#gradient-1)"
        strokeWidth="1.5"
      />
      <path
        id="path"
        d="M1446 18C927.694 18 789.373 18 785 18"
        stroke="url(#gradient-2)"
        strokeWidth="1.5"
      />
      <path
        id="path"
        d="M1446 25C927.694 25 789.373 25 785 25"
        stroke="url(#gradient-3)"
        strokeWidth="1.5"
      />
      <rect x="774" y="8.00003" width="21" height="5" fill="black" />
      <rect x="774" y="15" width="21" height="5" fill="black" />
      <rect x="774" y="22" width="21" height="5" fill="black" />
      <rect
        x="666.5"
        y="0.500061"
        width="108"
        height="34"
        rx="4.5"
        fill="#F9F9F9"
        stroke="black"
      />
      <path
        id="path"
        d="M-0.5 23.5L664.5 24.5"
        stroke="url(#gradient-4)"
        strokeWidth="1.5"
      />
      <path
        id="path"
        d="M0 17L665 18"
        stroke="url(#gradient-5)"
        strokeWidth="1.5"
      />
      <path
        id="path"
        d="M0 10L665 11"
        stroke="url(#gradient-6)"
        strokeWidth="1.5"
      />
      <rect x="645" y="8.00003" width="21" height="5" fill="black" />
      <rect x="645" y="15" width="21" height="5" fill="black" />
      <rect x="645" y="22" width="21" height="5" fill="black" />
      <circle cx="680" cy="12" r="4" fill="black" />
      <circle cx="759" cy="12" r="4" fill="black" />
      <rect
        x="711.5"
        y="39.5"
        width="16"
        height="9"
        fill="#D9D9D9"
        stroke="black"
      />
    </svg>
  );
};
