import prisma from "./prisma"

export const getBlogPost = async (slug:string) => {
    console.log("how many tims this is called ?")
    return await prisma.post.findMany(
        {where : {
            slug :slug
        },
        include: {
            mainImage: true,
            thumbImage:true,
            categorie:true
          },})
}