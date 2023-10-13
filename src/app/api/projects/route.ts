
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
 
type ResponseData = {
  message: string
}

export async function GET (request: Request) {
  const projectsWithObjectives = await prisma.project.findMany({
    include: {
      objectives: true,
    },
  });


  return  NextResponse.json(projectsWithObjectives)
}

 
export async function POST(request: Request) {

  const newProject = await prisma.project.create({
    data: {
      title: 'Pizza Paluba',
      category: 'Redesign',
      year: 2022,
      technologies: ['React', 'NextJs', 'TailwindCss', 'Framer', 'TypeScript', 'Vercel'],
      objectives: {
        create: [
          {
            title: 'UX',
            description: 'Objective was to create a seamless experience for the user browsing through the phone as the website did not support any responsive design.',
          },
          {
            title: 'CMS',
            description: 'Goal was to create a CMS for the client to be able to update the menu and the content of the website by themselves.',
          },
        ],
      },
    },
  });
  return  NextResponse.json(newProject)
}