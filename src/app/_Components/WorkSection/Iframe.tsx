
export const Iframe = ({src}: {src:string}) => {

    return <iframe  loading="eager" id='iframe' src={src} className="w-full h-[calc(100%-40px)]"/>
}