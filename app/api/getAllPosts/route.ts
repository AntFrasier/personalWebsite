import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import type { BlogPost } from '@/blogTypes';



async function handler(req:NextApiRequest, res:NextApiResponse<BlogPost>) {

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