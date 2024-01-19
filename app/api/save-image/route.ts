import prisma from '../../../lib/prisma';
import { DbImage } from '@prisma/client';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  if (req.method == "POST") {
    
    const data : DbImage = await req.json()
    const { 
      name_fr,   
      name_en, 
      alt_fr,
      alt_en,
      url,  
     } = data;
    const result = await prisma.dbImage.create({
      data: {
        name_fr:  name_fr,   
        name_en:  name_en,   
        alt_fr : alt_fr,
        alt_en: alt_en,
        url: url,  
      },
    });
    return Response.json({body : result});
  }



}

export {handler as GET , handler as POST}