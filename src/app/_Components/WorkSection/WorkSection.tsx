export const WorkSection = () => {
    return <section className="w-full relative min-h-[700px] my-[100px] flex flex-col gap-6 items-center justify-center">
     <div className="absolute top-0 left-0 w-[20vw] h-[20vw] md:w-[35vw] md:h-[35vw] -translate-x-[50%] translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[60px] md:blur-[60px]">1</div>
    <div className="absolute bottom-0 right-0 w-[20vw] h-[20vw]  md:w-[35vw] md:h-[35vw] translate-x-[100%] translate-y-[50%] bg-primaryGrey/10 z-0 rounded-full blur-[60px] sm:blur-[100px] ">1</div>
    <h1 className="text-sectionTitle font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">Work</h1>
    <p className="text-sectionSubtitle text-primaryGrey/80">All the Projects I have worked on so far.</p>
    <div className=" relative z-10 w-full max-w-[1500px] px-24 2xl:px-10 xl:px-4  flex flex-col items-center justify-center ">
    <div className=" z-10 self-start flex w-full gap-2 items-center justify-between mb-6">
       <div className="flex gap-3">
        <p className="text-[12px] text-primaryGrey/80">Category:    </p>
       {[1,2,3].map((item,index) => {
            return <p  key={index} className="text-[12px] text-primaryGrey/70 flex gap-1 items-center"> <span className="bg-gradient-to-b from-green-200 to-green-400 w-3 h-3 rounded-full"></span> Redesign </p>
        })
        }
       </div>
    </div>
    {[1,2,3,4,5].map((item,index) => {
        return <div key={index} className="rounded-md w-full h-16 flex gap-16 xl:gap-12 md:gap-6 sm:gap-4 items-center  border-b border-primaryGrey/10 hover:cursor-pointer hover:scale-110 transition-transform transition-duration-200">
            <span className="text-text sm:text-[12px]">2023</span>
            <span className=" flex sm:flex-1 items-center justify-start min-w-[200px] sm:min-w-0 text-[18px] sm:text-text font-semibold ">Project Name</span>
            <div className="flex flex-1 sm:flex-0 gap-1 justify-end">
                {[1,2,3,4].map((item,index) => {
                    return <span key={index} className="rounded-md px-4 sm:px-2 py-1 text-[12px] sm:text-[10px] bg-primaryGrey/20 text-primaryGrey/80">Tag</span>
                })}
            </div>
            <span className=" bg-gradient-to-b from-green-200 to-green-400 w-3 h-3 rounded-full"></span>

        </div>
    })}
    </div>
</section>
}