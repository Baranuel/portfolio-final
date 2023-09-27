
import { ProjectItem } from "./ProjectItem"


export const ProjectList = ({items}:{items:number[]}) => {

return (
    <>
        {items.map((item:any,index:number) => {
            return <ProjectItem src={'https://picsum.photos/200/300?random=4'} key={index}/>
        } )}
    </>
)
}