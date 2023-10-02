"use client";
import Image from "next/image";
import { Hero } from "./_Components/HeroSection/Hero";
import { IntroSign } from "./_Components/Intro-Sign/IntroSign";
import { ToolsSection } from "./_Components/ToolsSection/ToolsSection";
import { WorkSection } from "./_Components/WorkSection/WorkSection";
import { Experience } from "./_Components/ExperienceSection/Experience";
import { ContactSection } from "./_Components/Contact/ContactSection";

export default function Home() {


  return (
    <>
    <main className="w-full relative overflow-hidden px-52 2xl:px-24 lg:px-12 md:px-8 sm:px-4 xs:p-2 max-w-[100vw] ">
      <div className="absolute top-0 left-0 w-[35vw] h-[25vw] md:w-[35vw] md:h-[35vw] -translate-x-[60%] -translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[429px] md:blur-[100px]">
        1
      </div>
      <div className="absolute top-0 right-0 w-[35vw] h-[25vw]  md:w-[35vw] md:h-[35vw] translate-x-[40%] -translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[429px] sm:blur-[100px] ">
        1
      </div>
      <Hero />
      <IntroSign />
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
