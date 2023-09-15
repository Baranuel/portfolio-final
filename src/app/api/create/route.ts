
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
 
type ResponseData = {
  message: string
}

 
export async function POST(request: Request) {

    const res = await prisma.project.create({
        data: {
            title: 'Prisma is awesome',
            category: 'prisma',
            year: 2021,
        }
    })
  return  NextResponse.json(res)
}