import { Canvas } from "./Canvas";

export const Carousel = () => {

  const CarouselStripe = ({ color, clipPathClass, clipPathClassMobile, gap }: { color: 'red' | 'yellow', clipPathClass: string, clipPathClassMobile : string, gap: string }) => (
    <div className={`absolute top-0 left-0 whitespace-nowrap w-full h-full ${gap} flex md:flex-col ${clipPathClass} md:${clipPathClassMobile}`}> 
      {[0, 1].map((i) => (
        <div 
          key={i}
          className={`w-max h-full md:w-full flex md:flex-col ${gap} md:gap-2 items-center md:justify-center animate-scroll_first_part md:animate-scroll_first_part_mobile`}
        >
          {Array.from({length: 4}).map((_, index) => (
            <div key={index} className={`w-[500px] md:w-[1000px] h-[275px] md:h-[500px] relative bg-${color}-500`}>
              {index}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full h-[450px] py-2 gap-2 bg-white flex flex-col">
      <h1 className="text-4xl text-center font-pixelify">Process</h1>
      <div className="relative flex-1 overflow-hidden">
        {/* <Canvas /> */}
        <CarouselStripe color="yellow" clipPathClass="clip-path-first" clipPathClassMobile="clip-path-first-mobile" gap="gap-32" />
        <CarouselStripe color="red" clipPathClass="clip-path-second" gap="gap-32" />
      </div>
    </section>
  );
};
