import { authOptions } from '@/lib/authOptions';
import { getServerSession } from "next-auth";


export default async function apiAdminAuth (){
    const session = await getServerSession(authOptions)
            const user = session?.user;
            if (!user || user.role != 'admin') {
              
              console.log("not authorized")
              return false
            } else return true
}