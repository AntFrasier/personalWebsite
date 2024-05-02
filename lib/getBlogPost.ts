import { Categorie, DbImage, Post, Prisma } from "@prisma/client";
import prisma from "./prisma"



export const getBlogPost = async (slug:string) => {
    console.log("how many tims this is called ?")
    const myBlogPost = await prisma.post.findMany(
        {where : {
            slug :slug
        },
        include: {
            mainImage: true,
            thumbImage:true,
            categorie:true
          },})
    return myBlogPost;
}

export interface MyBlogPost extends Post {
    mainImage: DbImage,
    thumbImage: DbImage,
    categorie: Categorie,
}
