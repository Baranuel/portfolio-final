
import { Hero } from "./_Components/HeroSection/Hero";
import { IntroSign } from "./_Components/Intro-Sign/IntroSign";
import { ToolsSection } from "./_Components/ToolsSection/ToolsSection";
import { WorkSection } from "./_Components/WorkSection/WorkSection";
import { Experience } from "./_Components/ExperienceSection/Experience";
import ContactSection  from "./_Components/Contact/ContactSection";

export const revalidate = 60

export default function Home() {


  return (
    <>
      <Hero />
      <IntroSign />
    <main className="w-full relative  px-52 2xl:px-24 lg:px-12 md:px-8 sm:px-4 xs:p-2 max-w-[100vw] ">
      <ToolsSection />
      <WorkSection />
      <Experience />
    </main>
    <div className="w-full relative overflow-hidden ">
      <ContactSection />
    </div>
    </>
  );
}
