import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import { Adapter } from "next-auth/adapters";
import { redirect } from "next/dist/server/api-utils";

// const prisma = new PrismaClient()
const githubtId = process.env.GITHUB_CLIENT_ID as string
const githubtSecret = process.env.GITHUB_SECRET as string


if (!githubtId || !githubtSecret) {
    throw new Error ('git hub cred missing')
}

export const authOptions = {
  providers: [
    GithubProvider({
        profile(profile : GithubProfile) {
            //console.log("github profile : ", profile)
            return {
                // ...profile,
                id: profile.id.toString(),
                role: "user",
                image: profile.avatar_url,
                name:profile.name,
                email:profile.email
            }
        },
        clientId: githubtId,
        clientSecret: githubtSecret,
    })// ...add more providers here
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    session:{
        strategy:"jwt"
    },
    callbacks: {
       
        async jwt ({token, user}) {
            console.log ("the user in jwt", user)
            console.log ("the token in jwt", token)
            if (user) token.role = user.role;
            console.log ("the token in jwt after asign", token)
            return token
        },
        async session ({session, token, user}) {
            console.log("user : ", user)
            console.log("token : ", token)
            console.log("session : ", session)
            if (session.user) {
                session.user.role = token.role
                // session.user.id = user.id
            }
            
            return session
        },
         async signIn({ user, account, profile, email, credentials }) {
            console.log("the user role in signIn: ",user.role)
          
            const isAllowedToSignIn = user.role == 'admin' ? true : false;
            if (isAllowedToSignIn) {
                return true
            } else {
              // Return false to display a default error message
              return '/unauthorized'
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
            }
          },


    }
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }