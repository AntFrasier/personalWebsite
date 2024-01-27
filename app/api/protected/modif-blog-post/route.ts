import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { Post } from '@prisma/client';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const data : Post = await req.json()
    const { 
      id,
      name_fr,   
      name_en,   
      categorieId,       
      title_fr,        
      title_en,        
      description_fr,  
      description_en,  
      metaDescription_fr,  
      metaDescription_en,  
      h1_fr,           
      h1_en,   
      slug,        
      content_fr,       //html
      content_en,       //html
      thumbImageUrl, 
      thumbImageId,  
      mainImageUrl,
      mainImageId
     } = data;
    const result = await prisma.post.update({
        where : {id : Number(id)},
        data: {
            name_fr:  name_fr,   
            name_en:  name_en,    
            categorie : {
            connect : {
                id: Number(categorieId)
            }
            },       
            title_fr : title_fr,        
            title_en : title_en,        
            description_fr : description_fr,  
            description_en : description_en,  
            metaDescription_fr: metaDescription_fr,  
            metaDescription_en : metaDescription_en, 
            h1_fr :h1_fr,           
            h1_en : h1_en,     
            slug : slug,      
            content_fr : content_fr,       //html
            content_en : content_en,       //html
            thumbImage : {
            connect : {
                url : thumbImageUrl,
                id : thumbImageId
            }
            },
            mainImage : {
            connect : {
                url: mainImageUrl,   
                id : mainImageId,
            }
            },
        }
    });
return Response.json({body : result});
}

export {handler as POST}