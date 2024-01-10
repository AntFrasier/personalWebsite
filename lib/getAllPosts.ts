import prisma from "./prisma"

export const getAllposts = async (params?:string) => {
    if (params == "all") { 
        return await prisma.post.findMany()
    } else if (params == "draft") {
        return await prisma.post.findMany({where : {draft : true}})
    } else if (params == "published") {
        return await prisma.post.findMany({where : {draft : false}})
    } else return []

}