import prisma from "./prisma"


export default async function getAllStacks () {
    const result = await prisma.stack.findMany({
        include :{
            stackImage : true
        }
    });
    return result
}