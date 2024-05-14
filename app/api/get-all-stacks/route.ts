import getAllStacks from '@/lib/getAllStacks';
import prisma from '../../../lib/prisma';
import { NextRequest } from 'next/server';

async function handler(req:NextRequest) :   Promise<never[] | Response>{ //added return typed to avoid vercel error

        try {
            const result = await getAllStacks();
                return Response.json({body : result})
        }
        catch (err) {
            console.log(err);
            return Response.json({status:500, error: err})
        }
    }

export { handler as GET}