import CreateHairStyle from '@/core/useCase/hairStyles/Command/CreateHairStyle';
import GetHairStyles from '@/core/useCase/hairStyles/query/GetHairStyles';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const result = await GetHairStyles();
    return NextResponse.json(result);
}
export async function POST(request: Request) {
    await CreateHairStyle({
        name:"test",
        description:"test",
        price:100,
        image:"test",
        time:100
    })
    return NextResponse.json({ message: 'success' });
}

