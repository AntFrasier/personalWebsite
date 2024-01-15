import prisma from '../../../lib/prisma';
import { Post } from '@prisma/client';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  if (req.method == "POST") {
    
    const data : Post = await req.json()
    console.log(data)
    const { 
      name_fr,   
      name_en,   
      draft,    
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
      mainImageUrl,
     } = data;
    const result = await prisma.post.create({
      data: {
        name_fr:  name_fr,   
        name_en:  name_en,   
        draft : draft,    
        categorieId : categorieId,       
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
        thumbImageUrl : thumbImageUrl,   
        mainImageUrl : mainImageUrl,   
      },
    });
    return Response.json({body : result});
  }



}

export {handler as GET , handler as POST}