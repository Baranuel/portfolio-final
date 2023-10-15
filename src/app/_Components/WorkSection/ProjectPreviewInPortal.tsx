import { createPortal } from "react-dom"


export const ProjectPreviewInPortal = ({children}: {children:React.ReactNode}) => {
    const outPortal = document.getElementById('project-preview-out-portal') as HTMLElement

    return createPortal(children,outPortal)
}