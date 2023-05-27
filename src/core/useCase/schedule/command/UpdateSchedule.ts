"use server"
import { Schedule } from "@/core/Validator/Validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function UpdateSchedule(schedule:Schedule, id:string) {
    await prisma.schedule.update({
        where:{
            id:id
        },
        data:{
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            hairStyleId: schedule.hairStyleId,
            guestId: schedule.guestId,
        }
    })
}