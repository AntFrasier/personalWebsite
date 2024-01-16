import prisma from '../../../lib/prisma';
import { NextRequest } from 'next/server';



async function handler(req:NextRequest) {

    if (req.method == 'POST') {
        console.log("POST METHOD FOR ACTGORIES");
    }
    else {
        const result = await prisma.post.findMany();
        return Response.json({body : result})
    }
    }

export { handler as GET, handler as POST}