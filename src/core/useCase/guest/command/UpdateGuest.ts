"use server"
import { Guest } from "@/core/Validator/Validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function UpdateGuest(guest:Omit<Guest, "email">, email: string){
    const result = await prisma.guest.update({
        where:{
            email: email
        },
        data:{
            name: guest.name,
            phone: guest.phone,
            avatar: guest.avatar
        }
    })

}