
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
 
type ResponseData = {
  message: string
}
export async function GET(request: Request) {

    const data = await prisma.project.findMany()
  return  NextResponse.json(data)
}