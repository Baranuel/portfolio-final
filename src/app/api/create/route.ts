
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}

const prisma = new PrismaClient()
 
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