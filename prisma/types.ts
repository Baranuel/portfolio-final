import {Prisma, Project} from '@prisma/client'

export type ProjectWithObjectives =  Prisma.ProjectGetPayload<{
    include: {objectives: true}

}>