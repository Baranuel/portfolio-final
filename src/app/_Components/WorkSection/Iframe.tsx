'use client'

import react, { useState } from "react"
import { Spinner } from "../Spinner/Spinner"

export const Iframe = ({src}: {src:string}) => {

    const [loaded, setLoaded] = useState(false)

    return (
        <>
        {!loaded &&  <div className=" w-full h-full flex flex-col gap-2 items-center justify-center">
            <Spinner size='extraLarge'/>
            <span className="text-white mb-12">Loading Preview...</span>
        </div>}
        <iframe className={`w-full h-full ${loaded ? 'block' : 'hidden'}`} src={src} onLoad={() => setLoaded(true)}></iframe>
        </>
       
    )
}