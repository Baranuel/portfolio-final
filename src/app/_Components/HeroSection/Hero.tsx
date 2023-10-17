import { motion } from "framer-motion";
export const Hero = () => {
  const heroText = "";


  return (
    <section className="w-full h-[95vh] flex flex-col gap-2 items-center justify-center ">
     <div className="animate-appear_1 opacity-0">
     <div className="z-10 py-2  text-8xl 2xl:text-7xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%  ">
      <span className="text-8xl 2xl:text-7xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-orange-400/70 from-30% 2xl:from-40% via-orange-700 via-70% to-red-600/80 to-90%">Web Creator</span> + Design Enthusiast
      </div>
     </div>
      <p className=" z-10 text-[24px] sm:text-[18px] text-center  text-primaryGrey animate-appear_2 opacity-0 ">
        {" "}
        A passionate developer trying to bridge the gap between meaningful and
        interesting
      </p>
      <button className=" z-10 px-8 py-2 mt-6 rounded-md bg-primaryBlack text-white animate-appear_3 opacity-0">
        See Projects
      </button>
    </section>
  );
};
