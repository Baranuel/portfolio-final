
import { ProjectItem } from "./ProjectItem"
import Next from '../../../../public/next.svg'

export const ProjectList = ({items}:{items:number[]}) => {

return (
    <>
        {items.map((item:any,index:number) => {
            return <ProjectItem src={Next} key={index}/>
        } )}
    </>
)
}