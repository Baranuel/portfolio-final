
import { ProjectItem } from "./ProjectItem"

import { Prisma, Project } from "@prisma/client"
import { ProjectWithObjectives } from "../../../../prisma/types"



type ProjectListProps = {
    projects: ProjectWithObjectives[] | undefined
}

export const ProjectList = ({projects}: ProjectListProps) => {

return (
    <>
        {projects?.map((project,index:number) => {
            return <ProjectItem project={project} key={index}/>
        } )}
    </>
)
}