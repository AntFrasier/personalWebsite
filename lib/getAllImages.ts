import prisma from "./prisma"

export const getAllImages = async () => {
        return await prisma.dbImage.findMany()
}