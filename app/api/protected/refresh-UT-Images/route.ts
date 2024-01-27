import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '@/lib/prisma';
import { getUploadThingsAllImages, getUploadThingsAllImagesUrl } from '../../uploadthing/getUploadThingsAllImage';

async function handler(req:Request) {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const result = await getUploadThingsAllImages({limit:1000});
    const keys:string[] =[];
    result.forEach ((file) => keys.push(file.key))
    const urls = await getUploadThingsAllImagesUrl(keys)
    console.log(urls)
    
    return Response.json({body:urls});
}

export {handler as GET}