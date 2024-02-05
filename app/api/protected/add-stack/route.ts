import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { Stack } from '@prisma/client';

async function handler(req:Request) {
  const auth = await apiAdminAuth()
  if (!auth)  return Response.json("Unauthorized",{status : 401})
  if (req.method == "POST") {
    
    const data = await req.json()
    const { 
      name,   
      imageId,
     } = data;

    const result = await prisma.stack.create({
      data: {
        name:  name,   
        imageId : imageId,

      },
    });
    return Response.json({body : result});
  }



}

export {handler as GET , handler as POST}