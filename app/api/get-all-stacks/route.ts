import getAllStacks from '@/lib/getAllStacks';

async function handler() { //added return typed to avoid vercel error

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