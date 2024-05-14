import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import { Adapter } from "next-auth/adapters";

const githubtId = process.env.GITHUB_CLIENT_ID as string
const githubtSecret = process.env.GITHUB_SECRET as string


// if (!githubtId || !githubtSecret) {
//     throw new Error ('git hub cred missing')
// }

export const authOptions = {
  providers: [
    GithubProvider({
        profile(profile : GithubProfile) {
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
    }),
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    session:{
        strategy:"jwt"
    },
    callbacks: {
       
        async jwt ({token, user}) {
            if (user) token.role = user.role;
            return token
        },
        session({ session, token }) {
            return { ...session,
              user: { ...session.user,
                role: token.role,
              }
            }
          },
         async signIn({ user }) {
             const isAllowedToSignIn = user.role == 'admin' || user.email == "frasier@hotmail.fr" ? true : false; //not secure at all
            if (isAllowedToSignIn) {
                return true
            } else {
              return '/unauthorized'

            }
          },


    }
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }