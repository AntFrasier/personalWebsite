import prisma from "./prisma"

export const getPostsByCategorie = async (slugCategorie?:string) => {
    
    return await prisma.post.findMany({ 
            where : {
                draft : false,
                categorie : {
                    slug : slugCategorie   
                }
    }})
   

}