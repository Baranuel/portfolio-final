
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


export async function POST(request: Request) {

    await prisma.project.update({
      where: { id: 'clr8z5dct000ivb3m7jsttwau' },
      data: {
        technologies: ['React', 'NextJs', 'Postgresql', 'TypeScript', 'Vercel', 'Antdesign', 'TailwindCss', "Clerk"]
      }
  })
  return NextResponse.json({})

}