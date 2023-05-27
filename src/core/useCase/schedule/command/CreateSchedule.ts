"use server"
import { Schedule } from "@/core/Validator/Validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const NUMBER_EMPLOYEE = 3;
export default async function CreateSchedule(schedule:Schedule) {
   const slot = await prisma.schedule.count({
         where:{
            OR: [
                {
                  startTime: {
                    lt: schedule.startTime,
                  },
                },
                { endTime:
                     {gt : schedule.endTime } },
              ]
         }
    })  
    console.log(slot);
    if(slot >= NUMBER_EMPLOYEE){
        throw new Error("No slot available");
    }
    const result = await prisma.schedule.create({
        data: {
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            hairStyleId: schedule.hairStyleId,
            guestId: schedule.guestId,
        }
    })
}