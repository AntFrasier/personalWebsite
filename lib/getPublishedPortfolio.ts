import prisma from "./prisma"

export default async function getPublishedPortfolios() {
    return await prisma.portfolio.findMany({
        where:{
            draft : false,
        },
        include : {
            mainImage : true,
            portfolioThumbImage : true,
            categorie : true,
            stacks : {
                include : {
                    stackImage : true,
                },
            }
        }
    })
}