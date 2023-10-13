
import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { NextApiRequest } from 'next'


export async function GET(request: Request) {
    const res = await prisma.endorsement.findMany({
        orderBy: {
            id: 'asc'
        }
    })
  return  NextResponse.json(res)
}


export async function PUT(request: Request) {
    if(!request) return NextResponse.json('no ID provided')
    const {id} = await request.json()
    
    const endorsement = await prisma.endorsement.findUnique({
        where: { id: id}})

    if (!endorsement) {return NextResponse.json({ error: 'Endorsement not found' })}

    const res = await prisma.endorsement.update({
        where: {id:id},
        data: {amount: endorsement.amount + 1}
    })
  return  NextResponse.json(res)
}   