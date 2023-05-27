import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function GetHairStyles() {
    const hairStyles = await prisma.hairStyles.findMany();
    return hairStyles;
}