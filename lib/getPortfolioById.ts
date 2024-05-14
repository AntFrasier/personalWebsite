import prisma from "./prisma"

export default async function getPortfolioById(id : number) {
    return await prisma.portfolio.findUnique({
        where : {
            id : Number(id),
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