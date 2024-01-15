import prisma from "./prisma"

 export default async function getCategorieName (categorieId:number) {
    const categorie = await prisma.categorie.findUnique({
        where: {
            id : categorieId
        }
    })

    return categorie
}