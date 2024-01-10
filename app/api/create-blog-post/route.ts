import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request, res:NextApiResponse) {
  if (req.method == "POST") {
    
    const data = await req.json()
    console.log(data)
    const { 
      name,   
      draft,    
      categorie,       
      title_fr,        
      title_en,        
      description_fr,  
      description_en,  
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
        name:  name,   
        draft : draft,    
        categorieId : categorie,       
        title_fr : title_fr,        
        title_en : title_en,        
        description_fr : description_fr,  
        description_en : description_en,  
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