
import {prisma} from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(request: Request) {

    const data = await prisma.project.findMany()
  return  NextResponse.json(data)
}