
import HeartIcon from '../../../../public/heart.svg'
import LikeIcon from '../../../../public/like.svg'
import WrongIcon from '../../../../public/wrong.svg'
import LightbulbIcon from '../../../../public/lightbulb.svg'

import Image from 'next/image'

export const ContactSection = () => {

    const icons = [
        {src: HeartIcon, name: 'Heart'},
        {src: LikeIcon, name: 'Like'},
        {src: WrongIcon, name: 'Wrong'},
        {src: LightbulbIcon, name: 'Lightbulb'},
    ]
    return(
        <section className="bg-stone-950 w-full relative min-h-[800px] h-fit mt-[75px] py-12 px-52 2xl:px-24 lg:px-12 md:px-8 sm:px-4 xs:p-1 max-w-[100vw] flex flex-col gap-3 items-center justify-center">
              <h1 className="text-sectionTitle leading-[3rem]  font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/70 from-20% 2xl:from-40% via-white via-70% to-white/80 to-90%">
        Reach Out
      </h1>
      <p className="text-sectionSubtitle sm:text-[18px] text-stone-400 sm:text-center">{`Feel free to say hi as you're passing by.`}</p>

          <div className="flex sm:flex-col  w-full h-full items-center justify-center gap-8">
          <form className="w-2/4 lg:w-4/5 sm:w-full h-full my-6 bg-stone-950 border border-stone-600 rounded-md min-h-[450px]  p-8 flex flex-col gap-8  ">
         <div className="flex flex-col  w-2/3 sm:w-full ">
         <label htmlFor="name" className="text-stone-400 text-[12px] ">Name</label>
          <input name="name" className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300  " type="text" />
         </div>

         <div className="flex flex-col w-2/3 sm:w-full">
         <label htmlFor="email" className="text-stone-400 text-[12px] ">Email</label>
         <input name="email" className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300 transition-transform " type="text" />
         </div>

         <div className="flex flex-col w-full h-1/3 gap-4">
         <label htmlFor="message" className="text-stone-400 text-[12px] ">Message</label>
          <textarea name="message" className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300 transition-transform  resize-none" />
         </div>
         <button type="submit" className=" text-stone-900 border border-stone-900 w-2/5 py-2 rounded-md bg-stone-100">Send</button>
            </form>
        <div className="w-[100px] relative bg-stone-950 h-[450px] sm:h-[90px] xs:h-[60px] sm:w-full  gap-1">
            <span className="text-stone-400 absolute -translate-y-8">Endorsement</span>
          <div className='w-full h-full flex flex-col sm:flex-row gap-1 '>
          {icons.map((item, index) => {
                return <div className="bg-stone-950 h-1/4 sm:h-full sm:w-1/4 border  border-stone-600 p-2 rounded-md flex sm:flex-row items-center justify-center text-stone-200 " key={index}>
                    <div className='relative flex items-center justify-center w-1/2 h-1/2'>
                    <Image src={item.src} alt={item.name} fill className='hover:animate-icon_ping' />
                    </div>
                </div>
            })}
          </div>
        </div>
          </div>
      </section>
    )
}