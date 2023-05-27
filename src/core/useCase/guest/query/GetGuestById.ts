import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function GetGuestsByEmail(email: string) {
    const result = await prisma.guest.findFirst({
        where: {
            email: email
        }
    });
    return result;
}