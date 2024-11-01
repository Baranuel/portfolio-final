import Link from "next/link";
import { Canvas } from "./Canvas";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full h-[85vh] flex flex-col gap-8 md:gap-5 items-center justify-center relative p-2"
    >
      <Canvas />
      <div className="animate-appear_1 opacity-0">
        <Image priority src={"/samuel.svg"} alt="hero-image" width={475} height={50} />
      </div>
      <p className="max-w-[22em] font-dmSans text-center text-3xl sm:text-2xl text-slate-800 leading-[1.2] text-balance animate-appear_2 opacity-0 ">
        <strong className="mr-1">React Developer</strong>
        <span>
          building elegant, user-focused web applications with modern tools.
        </span>
      </p>
      <Link href="#Work">
      <button className=" font-pixelify bg-gradient-to-b  hover:shadow-[7px_7px_5px_rgba(0,0,0,0.5)] shadow-[5px_5px_1px_rgba(0,0,0,0.8)] transition-all duration-200 from-amber-500 to-red-500 border-4 border-slate-800  mt-4 text-xl font-semibold text-white  px-8  py-2 rounded-md  animate-appear_3 opacity-0 ">
          See Projects
        </button>
      </Link>
    </section>
  );
};
