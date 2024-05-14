import prisma from "./prisma"


export default async function getBlogcategories () {
    const result = await prisma.categorie.findMany({
        where : {
            posts : {some : { draft : false}}
        },
    }
    );

    return result
}
