import prisma from '../../../lib/prisma';
import { NextRequest } from 'next/server';



async function handler(req:NextRequest) {
    const reqData = await req.json()
    const { id } = reqData
    const result = await prisma.post.delete({
        where : {
            id : id
            }
        });
    return Response.json({body : result})
    }

export { handler as POST}