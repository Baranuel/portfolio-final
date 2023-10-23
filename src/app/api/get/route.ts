
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
 
type ResponseData = {
  message: string
}
export async function POST(request: Request) {
  
  const newProject  = await prisma.project.create({
    data: {
      title: 'Student Portfolio',
      year: 2022,
      image: 'https://iili.io/JKRFsOx.png',
      category: 'Website',
      technologies: ['React', 'NextJs','TypeScript','Vercel','Framer','TailwindCss'],
      demo: 'https://portfolio-lime-theta.vercel.app',
      objectives: {
        create: [
          {title:'Create Portfolio' ,description: 'Create my very first portfolio representing my web development skills and school projects.' },
          {title:'Playful Design', description: 'Objective was to create a design that is playful and fun but still informative and clear.' },
        ],
      },
    },
  })


  return  NextResponse.json(newProject)
}

export async function PUT(request: Request)  {

  const {id} =  await request.json()

  const project = await prisma.project.findUnique({
    where: { id: id}})
  
  if (!project) {return NextResponse.json({ error: 'Project not found' })}

  const res = await prisma.project.update({
    where: {id:id},
    data: { image:'https://iili.io/JKRB8mb.webp'}
  })


  return  NextResponse.json(res)
}