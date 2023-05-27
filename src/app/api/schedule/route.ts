
import GetHairStyles from '@/core/useCase/hairStyles/query/GetHairStyles';
import CreateSchedule from '@/core/useCase/schedule/command/CreateSchedule';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const result = await GetHairStyles();
    return NextResponse.json(result);
}
export async function POST(request: Request) {
    await CreateSchedule({
        startTime: new Date(),
        // delay 1 hour
        endTime:  new Date(new Date().getTime() + 60 * 60 * 1000),
        hairStyleId: "647070ff1b9dc443cdfdaed1",
        guestId: "647086801b9dc443cdfdaee7",
    })
    return NextResponse.json({ message: 'success' });
}

