import dynamic from "next/dynamic";
const DynamicTimeline = dynamic(() => 
  import('./Timeline').then((mod) => mod.Timeline),
{
  ssr: false
});


export const Experience = () => {
  return (
    <section className="w-full mt-[200px] relative min-h-[700px] h-fit my-[50px] flex flex-col gap-6 items-center justify-center">
      <h1 className="text-sectionTitle font-bold text-transparent  sm:mb-2 text-center bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">
        Experience
      </h1>
      <DynamicTimeline />
    </section>
  );
};
