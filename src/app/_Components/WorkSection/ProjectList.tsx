
import { ProjectItem } from "./ProjectItem"


export const ProjectList = ({items}:{items:number[]}) => {

return (
    <>
        {items.map((item:any,index:number) => {
            return <ProjectItem key={index}/>
        } )}
    </>
)
}