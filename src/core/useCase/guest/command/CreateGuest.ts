"use server"
import { Guest } from "@/core/Validator/Validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function CreateGuest(guest:Guest){
    const result = await prisma.guest.create({
        data:{
            name: guest.name,
            phone: guest.phone,
            avatar: guest.avatar,
            email: guest.email
        }
    })
}