"use server"
import { HairStyle } from "@/core/Validator/Validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function CreateHairStyle(hairStyle: HairStyle) {
    const result = await prisma.hairStyles.create({
        data: {
            name: hairStyle.name,
            description: hairStyle.description,
            price: hairStyle.price,
            image: hairStyle.image,
            time: hairStyle.time
        }
    })
} 