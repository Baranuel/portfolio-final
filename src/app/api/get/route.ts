
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
 
type ResponseData = {
  message: string
}
export async function POST(request: Request) {
  
  const {id} =  await request.json()

    const newObjective = await prisma.objective.create({
        data: {
            title: 'Animated Text',
            description: 'Create nice animations for text as it appears on the screen',
            projectId: id
        }
    })




  return  NextResponse.json(newObjective)
}

export async function PUT(request: Request)  {

  const {id} =  await request.json()

  const project = await prisma.project.findUnique({
    where: { id: id}})
  
  if (!project) {return NextResponse.json({ error: 'Project not found' })}

  const res = await prisma.project.update({
    where: {id:id},
    data: {image: 'https://iili.io/JFFak5g.webp'}
  })


  return  NextResponse.json(res)
}