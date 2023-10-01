'use client'
import { ProjectList } from "./ProjectList";

export const WorkSection = () => {
  return (
    <section className="w-full relative min-h-[700px] h-fit my-[100px] flex flex-col gap-3 items-center justify-center">
      <div className="absolute top-0 left-0 w-[20vw] h-[20vw] md:w-[35vw] md:h-[35vw] -translate-x-[50%] translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[260px] md:blur-[60px]">
        1
      </div>
      <div className="absolute bottom-0 right-0 w-[20vw] h-[20vw]  md:w-[35vw] md:h-[35vw] translate-x-[100%] translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[260px] sm:blur-[100px] ">
        1
      </div>
      <h1 className="text-sectionTitle leading-[3rem]  font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">
        Work
      </h1>
      <p className="text-sectionSubtitle sm:text-[18px] text-primaryGrey/80 text-center">
        All the Projects I have worked on so far.
      </p>
      <div className=" relative z-10 w-full  max-w-[1500px]  px-24 2xl:px-10 xl:px-4 sm:px-0  flex flex-col items-center justify-center ">
        <ProjectList items={[1, 2, 3, 4, 5, 6]} />
      </div>
    </section>
  );
};
