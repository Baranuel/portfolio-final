export const IntroSign = () => {

    
    const pinHead = `after:content-[''] after:bottom-0 after:right-0 after:translate-x-[50%] after:z-10 after:absolute after:h-4 after:w-4 after:rounded-full after:bg-gradient-to-t after:from-primaryBlack after:from-50% after:via-primaryBlack after:via-50% after:to-background/70 after:to-100%"`
  return (
    <section className="flex relative flex-col items-center justify-center  min-h-[400px]  my-[25px]  w-full ">
     
      <div className="h-32 w-[2px] my-2 mb-6 absolute  -top-12  overflow-hidden flex  z-10 border-none  bg-primaryGrey/20 animate-appear_3  ">
        <div className=" z-0 bg-gradient-to-b  from-violet-700 to-red-800 w-full h-full animate-signal"></div>
        <div className=" absolute  z-10 bg-gradient-to-b  from-background via-transparent to-background w-full h-full "></div>
      </div>
      
      <div className=" relative max-w-[500px] h-fit  bg-gradient-to-t  -translate-y-2 flex flex-col gap-2 justify-center items-center border-primaryBlack/30  rounded-xl p-1">
        <div className="absolute w-full h-1/2 bg-gradient-to-b from-violet-300 to-red-300 opacity-10 z-0 blur-[220px] -translate-y-2"></div>
        <span className="tracking-[.25rem] text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-b from-violet-700 to-red-800">
        DRIVE FOR WEB
      </span>
        <h1 className="text-sectionTitle leading-[3rem]  text-center z-10  m-0 font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90% ">
          Development
        </h1>{" "}
        <p className="text-[16px] text-center z-10">
          I really enjoy turning a blank editor into a working website. Solving coding puzzles actually feels rewarding to me. Plus, seeing people use something I built never gets old.
        </p>
      </div>
    </section>
  );
};
