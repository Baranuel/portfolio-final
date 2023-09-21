export const ToolsSection = ( ) => {

    return <section className="w-full min-h-[700px] my-[100px] flex flex-col gap-6 items-center justify-center">
        <h1 className="text-sectionTitle font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">Tools</h1>
        <p className="text-sectionSubtitle text-primaryGrey/80 sm:text-center">Collection of tool I use every day to make web applications useable and intuitive</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-1">

        {[1,2,3,4,5,6,7,8,9,10].map((item,index) => {
            return <div key={index} className="rounded-md w-20 h-20 sm:w-14 sm:h-14 bg-primaryGrey"></div>
        })}
        </div>
    </section>
}