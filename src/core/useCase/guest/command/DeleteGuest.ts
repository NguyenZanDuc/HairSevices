"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function DeleteGuest( email: string){
    const result = await prisma.guest.delete({
        where:{
            email: email
        }
    })
}