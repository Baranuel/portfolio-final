





export const Hero = () => {
  return (
    <section className="w-full h-[90vh]  flex flex-col gap-6 items-center justify-center">
        <div className="absolute top-0 left-0 w-[25vw] h-[25vw] md:w-[35vw] md:h-[35vw] -translate-x-[60%] -translate-y-[50%] bg-primaryGrey z-0 rounded-full blur-[229px] md:blur-[100px]">1</div>
        <div className="absolute top-0 right-0 w-[25vw] h-[25vw]  md:w-[35vw] md:h-[35vw] translate-x-[40%] -translate-y-[50%] bg-primaryGrey z-0 rounded-full blur-[229px] sm:blur-[100px] ">1</div>
      <h1 className=" z-10 py-2 text-heroText 2xl:text-6xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">Web Creator & Design Enthusiast</h1>
      <p className=" z-10 text-sectionSubtitle text-center sm:text- text-primaryGrey/70"> A passionate developer trying to bridge the gap between meaningful and interesting</p>
      <button className=" z-10 px-8 py-2 mt-6 rounded-md bg-primaryBlack text-white">See Projects</button>
    </section>
  );
};
