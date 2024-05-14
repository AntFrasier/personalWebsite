import { Categorie, DbImage, Portfolio, Stack } from "@prisma/client"
import prisma from "./prisma"
import { ReturnedStack } from "./getAllStacks"

export default async function getPortfolios() {
    return await prisma.portfolio.findMany({
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


export interface ReturnedPortfolio extends Portfolio {
    mainImage : DbImage,
    portfolioThumbImage : DbImage,
    categorie : Categorie,
    stacks : ReturnedStack[],
}

export interface ToSavedPortfolio extends Portfolio {
    stacks : Stack[],
}