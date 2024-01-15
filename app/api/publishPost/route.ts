import prisma from '../../../lib/prisma';

async function handler(req:Request, res:Response) {
    const reqData = await req.json();
    const {id, draft} = reqData
    if (req.method == "POST")  {
    const result = await prisma.post.update({
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