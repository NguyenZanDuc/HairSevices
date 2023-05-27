"use server"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function UpdateHairStyle(hairStyle: {
    name: string;
    description: string;
    price: number;
    image: string;
    time: number;}, id: string) {
    const result = await prisma.hairStyles.update({
        where: {
            id: id
        },
        data: {
            name: hairStyle.name,
            description: hairStyle.description,
            price: hairStyle.price,
            image: hairStyle.image,
            time: hairStyle.time
        }
    })
} 