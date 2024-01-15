
import prisma from '../../../lib/prisma';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  if (req.method == "POST") {
    const data = await req.json()
    const { 
      name_fr,   
      name_en,    
     } = data;
    const result = await prisma.categorie.create({
      data: {
        name_fr:  name_fr,   
        name_en : name_en,    
      },
    });
    return Response.json({body : result});
  }



}

export {handler as POST}