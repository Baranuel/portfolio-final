'use client'
import dynamic from "next/dynamic";
const DynamicTimeline = dynamic(() => 
  import('./Timeline').then((mod) => mod.Timeline),
{
  ssr: false
});


export const Experience = () => {
  return (
    <section className="w-full my-[75px] relative min-h-[500px]   flex flex-col gap-2 items-center justify-center">
        <span className="tracking-[.25rem] w-full whitespace-nowrap sm:text-decorText text-xs  font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-violet-700 to-red-800">
        CONTINUING LEARNING
      </span>
      <h1 className="text-sectionTitle font-bold text-transparent  sm:mb-2 text-center bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">
        Experience
      </h1>
      <DynamicTimeline />
    </section>
  );
};
