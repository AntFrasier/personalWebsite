import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { NextRequest } from 'next/server';



async function handler(req:NextRequest) {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const reqData = await req.json()
    const { id } = reqData
    const result = await prisma.stack.delete({
        where : {
            id : Number(id)
            }
        });
    return Response.json({body : result})
    }

export { handler as POST}