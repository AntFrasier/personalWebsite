import prisma from "./prisma"

export const getPostsByCategorie = async (slugCategorie?:string) => {
    
    return await prisma.post.findMany({ 
            where :{
                categorie : {
                    slug : slugCategorie   
                }
    }})
   

}