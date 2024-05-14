'use client'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children, session 
} //that is bad ... but got a type error that i cant fixe ... @todo Fixe that error
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