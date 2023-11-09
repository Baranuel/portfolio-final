'use client'
import Link from "next/link"
import { useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"


export const Navigation = () => {
    const [open, setOpen] = useState(false)

    const links = ['Tools', 'Work', 'Experience', 'Contact']

    return <nav className="fixed  flex px-12 sm:px-4 items-center justify-between  z-40 top-0 w-full h-14 backdrop-blur-[10px] bg-background/30 border-b border-primaryGrey/20">
           <Link href={'#Hero'} className="  text-xl sm:text-lg z-20 font-bold text-center "> SB | Portfolio</Link>

            <div onClick={() => setOpen(!open)} className="hidden sm:block">
               <AiOutlineMenu className='text-2xl' />
            </div>
           <div className="flex gap-3 items-center justify-center sm:hidden ">

        {links.map((item, index) => {
            if (item === 'Work') return <Link key={index} href={`#${item}`} className=" min-w-24 animate-text text-lg  z-20 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-orange-600/70 from-30% 2xl:from-40%  via-[#9F1239] via-70% to-orange-600/70 to-90% ">{item}</Link>
            return <Link  href={`#${item}`} scroll={true}  key={index} className="min-w-24 flex text-lg font-semibold self-center items-center justify-center ">{item}</Link>
        })}
        </div>

        <div className={`${open ? "block" : "hidden"} flex flex-col gap-4 pt-8 p-2 justify-start items-start bg-gradient-to-b from-[#282828] to-[#000000] absolute h-[calc(100vh-3.5rem)] w-screen top-0 translate-y-[3.5rem] left-0 `}>
        {links.map((item, index) => {
        if (item === 'Work') return <Link key={index} onClick={() => setOpen(false)} href={`#${item}`} className=" min-w-24 animate-text text-xl  z-20 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-orange-600/70 from-30% 2xl:from-40%  via-[#9F1239] via-70% to-orange-600/70 to-90% ">{item}</Link>
        return <Link onClick={() => setOpen(false)} href={`#${item}`} scroll={true}  key={index} className="min-w-24  text-xl text-stone-400 font-medium ">{item}</Link>
        })}
        
        </div>
    </nav>
}