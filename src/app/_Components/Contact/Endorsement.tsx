'use-client'


import HeartIcon from '../../../../public/heart.svg'
import TrashIcon from '../../../../public/trash.svg'
import LightbulbIcon from '../../../../public/lightbulb.svg'
import Image from 'next/image'

import {AnimatePresence, motion, useInView} from 'framer-motion'
import { useRef } from 'react'

export const Endorsement = () => {
    const EndorsementRef = useRef(null)
    const isInView = useInView(EndorsementRef, {margin:'-20% 0px', once:true})

    const icons = [
        {src: HeartIcon, name: 'Heart'},
        {src: TrashIcon, name: 'Wrong'},
        {src: LightbulbIcon, name: 'Lightbulb'}]


    return(
        <div ref={EndorsementRef} className="w-[100px] relative  bg-stone-950 h-[450px] sm:h-full min-h-[100px] sm:w-full ">
            <AnimatePresence>
            {isInView && (
            <>
                     <motion.span initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-stone-400">Endorsement</motion.span>
                     <div  className='w-full h-full flex flex-col sm:flex-row gap-2 sm:py-2 items-center justify-start sm:justify-start '>
                     {icons.map((item, index) => {
                         return <motion.div  initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} exit={{x:100, opacity:0}} transition={{delay: 0.05 * index}} key={index} className='flex sm:flex-col   gap-1'>
                           <div className="bg-stone-950 h-[75px] w-[75px]  sm:h-[60px] sm:w-[60px]  rounded-md flex flex-col gap-1 items-center justify-center  text-stone-200 " >
                               <div className='relative  flex  items-center justify-center  w-1/2 h-1/2 sm:w-5/6 sm:h-5/6 hover:cursor-pointer'>
                               <Image src={item.src} alt={item.name} fill className='' />
                               </div>
                               <span className='text-[14px] sm:text-xs text-stone-400'>1</span>
                           </div>
                           </motion.div>
                       })}
                       </div>
            </>
            )}
            </AnimatePresence>
            </div>

    )

}