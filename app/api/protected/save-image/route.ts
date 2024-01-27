import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { DbImage } from '@prisma/client';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  const auth = await apiAdminAuth()
  if (!auth)  return Response.json("Unauthorized",{status : 401})
  if (req.method == "POST") {
    
    const data : DbImage = await req.json()
    const { 
      name_fr,   
      name_en, 
      alt_fr,
      alt_en,
      url,  
      ut_key,
     } = data;
    const result = await prisma.dbImage.create({
      data: {
        name_fr:  name_fr,   
        name_en:  name_en,   
        alt_fr : alt_fr,
        alt_en: alt_en,
        url: url, 
        ut_key : ut_key,

      },
    });
    return Response.json({body : result});
  }



}

export {handler as GET , handler as POST}