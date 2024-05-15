'use client'

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react";

const Providers = ({ 
  children, 
  session
} : { 
  children: ReactNode,
  session : Session},
 )  => {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </ThemeProvider>
    )
  
}

export default Providers