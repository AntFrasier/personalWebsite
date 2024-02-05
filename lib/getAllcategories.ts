import prisma from "./prisma"


export default async function getAllcategories () {
    const result = await prisma.categorie.findMany();
    return result
}
