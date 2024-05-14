import prisma from '../../../../lib/prisma';
import apiAdminAuth from '@/lib/apiAdminAuth';

async function handler(req:Request) {
  try {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    if (req.method == "POST") {
      const data = await req.json()
      const { 
        name_fr,   
        name_en,    
        slug,
      } = data;
      const result = await prisma.categorie.create({
        data: {
          name_fr:  name_fr,   
          name_en : name_en,    
          slug:slug,
        },
      });
      return Response.json({body : result});
  }} catch (err) {
    console.log(err)
    return Response.error()
  }
  }

export {handler as POST}