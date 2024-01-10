import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    id: number;
    name_fr: string;
    name_en: string;
}[]


async function handler(req:NextApiRequest, res:NextApiResponse<Data>) {

    if (req.method == 'POST') {
        console.log("POST METHOD FOR ACTGORIES");
    }
    else {
        const result = await prisma.categorie.findMany();
        console.log(result)
        return Response.json({body : result})
    }
    }

export { handler as GET, handler as POST}