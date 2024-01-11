
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

type ResponseData = {
  message: string
}

export async function GET(request: Request) {

  const projectsWithObjectives = await prisma.project.findMany({
    orderBy: {
      year: 'desc'
    },
    include: {
      objectives: true,
    },
  });






  return NextResponse.json(projectsWithObjectives)
}
