



export const IntroSign = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full ">
            < div className="h-52 w-[1px] relative border-none bg-primaryGrey/20 after:content-[''] after:bottom-0 after:right-0 after:translate-x-[50%] after:z-10 after:absolute after:h-4 after:w-4 after:rounded-full after:bg-gradient-to-t after:from-primaryBlack after:from-50% after:via-primaryBlack after:via-50% after:to-background/70 after:to-100%"/>
            <div className="max-w-[550px] h-[250px] bg-white -translate-y-2 flex flex-col gap-2 justify-center border-t border-b border-primaryBlack/30  rounded-xl p-10">
                <h1 className="text-[20px]font-medium">Web development</h1>
                <p className="text-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ipsa earum perferendis aliquid ab quidem placeat beatae quod, fugiat magnam omnis. Fugiat, quae id. A ullam ab ad beatae facere.</p>
            </div>
        </section>
    )
}