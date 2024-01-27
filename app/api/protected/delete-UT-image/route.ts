import apiAdminAuth from '@/lib/apiAdminAuth';
import { NextRequest } from 'next/server';
import { deleteUploadThingsImage } from '../../uploadthing/delete-image';



async function handler(req:NextRequest) {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const reqData = await req.json()
    const { key } = reqData
    const result = await deleteUploadThingsImage(key)
    return Response.json({body : result})
    }

export { handler as POST}