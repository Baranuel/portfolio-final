
import Image from 'next/image'
import NextJSIcon from '../../../../public/nextdotjs.svg'
import TailwindIcon from '../../../../public/tailwindcss.svg'
import JavaScriptIcon from '../../../../public/javascript.svg'
import TypeScriptIcon from '../../../../public/typescript.svg'
import VercelIcon from '../../../../public/vercel.svg'
import FramerIcon from '../../../../public/framer.svg'
import ReactQueryIcon from '../../../../public/reactquery.svg'
import ReactHookFormIcon from '../../../../public/reacthookform.svg'


// create an array with all the icons but they must be an object with the source and the name 

const icons = [
    {src: NextJSIcon, name: 'NextJS'},
    {src: TailwindIcon, name: 'Tailwind'},
    {src: ReactQueryIcon, name: 'React Query'},
    {src: ReactHookFormIcon, name: 'Hook Form'},
    {src: JavaScriptIcon, name: 'Java-Script'},
    {src: TypeScriptIcon, name: 'Type-Script'},
    {src: VercelIcon, name: 'Vercel'},
    {src: FramerIcon, name: 'Framer'},
]

export const ToolsSection = ( ) => {

    return <section className="w-full min-h-[500px]  my-[75px] flex flex-col gap-3 items-center justify-start">
           <span className="tracking-[.25rem] w-full whitespace-nowrap sm:text-decorText text-xs  font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-violet-700 to-red-800">
        MASTERING INSTRUMENTS
      </span>
        <h1 className="text-sectionTitle leading-[3rem]   font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">Toolshed</h1>
        <p className="text-sectionSubtitle sm:text-[16px] text-primaryGrey/80 sm:text-center">Collection of tool I use every day to make web applications useable and intuitive</p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-5 sm:gap-3">

        {icons.map((item,index) => {
            return <div key={index} className="  flex flex-col items-center justify-center gap-2">
                <div className='rounded-lg relative flex flex-col gap-0 items-center justify-center   w-20 h-20 sm:w-16 sm:h-16 '>
                    <div className='relative w-3/5 h-3/5 sm:w-2/3 sm:h-2/3'>
                <Image src={item.src} alt="nextjs" fill />
                    </div>
                </div>
                <p className="text-black/60 text-center text-sm sm:text-xs text-medium ">{item.name}</p>
            </div>
        })}
        </div>
    </section>
}