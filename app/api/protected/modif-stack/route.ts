import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { Stack } from '@prisma/client';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const data : Stack = await req.json()
    const { 
      id,
      name,   
      imageId,   
     } = data;
    const result = await prisma.stack.update({
        where : {id : Number(id)},
        data: {
            name:  name,   
            // imageId:  Number(imageId),    
            stackImage : {
                connect : {
                    id: Number(imageId)
                }
            },       
            
        }
    });
return Response.json({body : result});
}

export {handler as POST}