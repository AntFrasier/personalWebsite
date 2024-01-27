import apiAdminAuth from '@/lib/apiAdminAuth';
import { NextRequest } from 'next/server';
import { changeUploadThingsImageName } from '../../uploadthing/changeUploadThingsImageName';



async function handler(req:NextRequest) {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const reqData = await req.json()
    const { key, name } = reqData
    const result = await changeUploadThingsImageName(key, name)
    return Response.json({body : result})
    }

export { handler as POST}