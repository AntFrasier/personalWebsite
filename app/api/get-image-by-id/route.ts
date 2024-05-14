import prisma from '../../../lib/prisma';
import { NextRequest } from 'next/server';

async function handler(req:NextRequest) {
    const data = await req.json()
    const {imageId} = data
    const result = await prisma.dbImage.findUnique({
         where : { 
            id : Number(imageId)
        }
    });
    return Response.json({body : result})
    }
    

export { handler as POST }