import { DbImage, Stack } from "@prisma/client";
import prisma from "./prisma"


export default async function getAllStacks () {
    const result = await prisma.stack.findMany({
        include :{
            stackImage : true
        }
    });
    return result
}

export interface ReturnedStack extends Stack {
    stackImage : DbImage,
}