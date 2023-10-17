import Link from "next/link"

export const Navigation = () => {

    const links = ['Tools', 'Projects', 'About', 'Contact']

    return <nav className="fixed flex px-12 items-center justify-between  z-40 top-0 w-full h-14 backdrop-blur-[10px] bg-background/30 border-b border-primaryGrey/20">
           <Link href={'#Hero'} className=" animate-text text-xl z-20 font-bold text-center "> SB | Portfolio</Link>
           <div className="flex ">
        {links.map((item, index) => {
            if (item === 'Projects') return <Link href={`#${item}`} className=" animate-text text-lg  z-20 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-orange-600/70 from-30% 2xl:from-40%  via-[#9F1239] via-70% to-orange-600/70 to-90% ">{item}</Link>
            return <Link href={`#${item}`} scroll={true}  key={index} className="w-24 flex text-lg font-semibold items-center justify-center ">{item}</Link>
        })}
        </div>
    </nav>
}