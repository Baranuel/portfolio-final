
import {prisma} from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(request: Request) {

    const data = await prisma.project.create({
        data: {
            title: 'Prisma is awesome',
            category: 'prisma',
            year: 2021,
        }
    })
  return  NextResponse.json(data)
}