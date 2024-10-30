import Link from "next/link";
import { Canvas } from "./Canvas";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="w-full h-[80vh] flex flex-col gap-8 md:gap-4 items-center justify-center relative p-2"
    >
      <Canvas />
      <div className="animate-appear_1 opacity-0">
        <Image src={"/samuel.svg"} alt="hero-image" width={550} height={50} />
      </div>
      <p className="max-w-[25em] font-pixelify  text-center text-3xl sm:text-2xl text-slate-800 leading-[1.1] text-balance animate-appear_2 opacity-0 ">
        <strong className="mr-1">React developer</strong>
        <span>
          dedicated to implementing best practices with the most current
          technologies.
        </span>
      </p>
      <Link href="#Work">
      <button className=" font-pixelify bg-gradient-to-b from-orange-400 to-red-600 border-4 border-slate-800  button-primary mt-4 text-xl font-semibold text-white  px-8  py-2 rounded-md  animate-appear_3 opacity-0 button-primary">
          See Projects
        </button>
      </Link>
    </section>
  );
};
