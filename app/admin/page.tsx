'use client'

import { DefaultSession, Session } from 'next-auth'
import { SessionProvider } from "next-auth/react"
import AdminHome from '../components/admin/AdminHome'
import { FC } from 'react'
import { AppProps } from 'next/app'

type Props = {session : Session}

export default function Admin ({
     session 
    } : any //that is bad ... but got a type error that i cant fixe ... @todo Fixe that error
     ) {
    return (
        <main className="flex flex-row-reverse justify-end flex-wrap lg:p-24 2xl:ml-80 xl:ml-48 md:ml-24 lg:mt-24 p-12 mt-12">
        <SessionProvider session={session}>
           <AdminHome />
        </SessionProvider>
        </main>
    )
    }


