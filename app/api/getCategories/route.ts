import { NextRequest } from 'next/server';
import getAllcategories from '@/lib/getAllcategories';

async function handler(req:NextRequest) {
    const result = await getAllcategories()
    return Response.json({body : result})
}

export { handler as GET}