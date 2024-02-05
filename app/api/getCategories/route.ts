import { NextRequest } from 'next/server';
import prisma from '../../../lib/prisma';
import getAllcategories from '@/lib/getAllcategories';

async function handler(req:NextRequest) {
    const result = await getAllcategories()
    console.log(result)
    return Response.json({body : result})
}

export { handler as GET}