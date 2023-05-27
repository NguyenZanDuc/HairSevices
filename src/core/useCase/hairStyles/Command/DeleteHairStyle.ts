"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function DeleteHairStyle(id: string){
    const result = await prisma.hairStyles.delete({
        where:{
            id: id
        }
    })
} 