import prisma from '../../../lib/prisma';
import type { BlogPost } from '@/blogTypes';
import { NextRequest, NextResponse } from 'next/server';



async function handler(req:NextRequest, res:NextResponse<BlogPost>) {

    if (req.method == 'POST') {
        console.log("POST METHOD FOR ACTGORIES");
    }
    else {
        if (req.body) console.log (req)
        const result = await prisma.post.findMany();
        // console.log(result)
        return Response.json({body : result})
    }
    }

export { handler as GET, handler as POST}