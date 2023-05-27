import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function GetGuests() {
    const result = await prisma.guest.findMany();
    return result;
}