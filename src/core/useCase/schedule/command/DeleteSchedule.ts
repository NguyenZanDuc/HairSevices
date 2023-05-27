"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function DeleteSchedule(id: string){
    const result = await prisma.schedule.delete({
        where:{
            id: id
        }
    })
}