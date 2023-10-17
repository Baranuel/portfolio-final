import { motion } from "framer-motion";
export const Hero = () => {
  const heroText = "";


  return (
    <section className="w-full h-[90vh] flex flex-col gap-2 items-center justify-center ">
     <div className="animate-appear_1 opacity-0">
     <div className="z-20 py-2 relative   text-8xl 2xl:text-7xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%  ">

      <span className=" animate-text text-8xl z-20 relative 2xl:text-7xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-orange-600/70 from-30% 2xl:from-40%  via-[#9F1239] via-70% to-orange-600/70 to-90% 
      after:absolute after:w-full after:h-full after:bg-red-50 after:top-0 after:left-0 after:z-0 after:mix-blend-multiply after:filter after:blur-3xl after: ">Web Creator</span> and Design Enthusiast
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
