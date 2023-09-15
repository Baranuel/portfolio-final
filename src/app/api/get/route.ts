
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 const prisma = new PrismaClient()
export async function GET(request: Request) {

    const data = await prisma.project.findMany()
  return  NextResponse.json(data)
}