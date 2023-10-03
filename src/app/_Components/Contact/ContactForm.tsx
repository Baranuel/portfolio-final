export const ContactForm = () => {
    return (
        <form className="w-4/6 lg:w-4/5 sm:w-full h-full my-6 bg-stone-950 border border-stone-600 rounded-md min-h-[450px] max-w-[530px]  p-8 sm:p-4 flex flex-col gap-8  ">
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
        <button type="submit" className=" text-stone-900 border border-stone-900 w-2/5 sm:w-full py-2 rounded-md bg-stone-100">Send</button>
           </form>
    )
}