'use client'

import { ContactForm } from './ContactForm'
import { Endorsement } from './Endorsement'
import { useGetEndorsements } from '@/app/hooks/use-get-endorsements'


export default function ContactSection (){
  const {data} = useGetEndorsements()

    return(
        <section className="bg-stone-950 w-full relative min-h-[800px] h-fit mt-[75px] py-12 px-52 2xl:px-24 lg:px-12 md:px-8 sm:px-4 xs:p-2 max-w-[100vw] flex flex-col gap-3 items-center justify-center">
              <h1 className="text-sectionTitle leading-[3rem]  font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/70 from-20% 2xl:from-40% via-white via-70% to-white/80 to-90%">
        Reach Out
      </h1>
      <p className="text-sectionSubtitle sm:text-[16px] text-stone-400 sm:text-center">{`Feel free to say hi as you're passing by.`}</p>

          <div className="flex sm:flex-col  w-full h-full items-center justify-center gap-14 sm:gap-4">
            <ContactForm />
            <Endorsement items={data} />
          </div>
      </section>
    )
}