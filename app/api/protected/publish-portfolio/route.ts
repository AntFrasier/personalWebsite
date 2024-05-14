import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';

async function handler(req:Request) {
    const auth = await apiAdminAuth()
    if (!auth)  return Response.json("Unauthorized",{status : 401})
    const reqData = await req.json();
    const {id, draft} = reqData
    if (req.method == "POST")  {
    const result = await prisma.portfolio.update({
        where : {
            id : id
        },
        data :{
            draft : draft
        }
    })
    return Response.json({result});}
}

export {handler as POST}