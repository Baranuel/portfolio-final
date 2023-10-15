import { motion } from "framer-motion";
export const Hero = () => {
  const heroText = "Web Creator & Design Enthusiast";


  return (
    <section className="w-full h-[90vh] flex flex-col gap-1 items-center justify-center pt-24">
     <div className="animate-appear_1 opacity-0">
     <div className="z-10 py-2  text-7xl 2xl:text-6xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%  ">
        {heroText}
      </div>
     </div>
      <p className=" z-10 text-sectionSubtitle sm:text-[18px] text-center  text-primaryGrey animate-appear_2 opacity-0 ">
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
