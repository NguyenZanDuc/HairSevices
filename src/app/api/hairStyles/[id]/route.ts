import UpdateHairStyle from '@/core/useCase/hairStyles/Command/UpdateHairStyle';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function GET(request: Request,{params}: {params: {id: string}}) {
    const hairStyle = await prisma.hairStyles.findFirst({
        where: {
            id: (params.id)
            }
            });
    return NextResponse.json(hairStyle);
}
export async function PUT(request: Request,{params}: {params: {id: string}}) {
    await UpdateHairStyle({
        name:"testUpdate",
        description:"testUpdate",
        price:100,
        image:"testUpdate",
        time:100
    },(params.id))
    return NextResponse.json({ message: 'success' });
}