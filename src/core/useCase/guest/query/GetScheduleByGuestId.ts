import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function GetScheduleByGuestId(email:string) {
    const result = await prisma.guest.findFirst({
        where:{
            email:email
        }
    }).schedule();
    return result;
}