'use client'

import { signIn } from "next-auth/react"


const LoginButton = () => {
  return (
    <button className="btn-secondary" onClick={ async () => {
        await signIn(undefined, {callbackUrl:"/admin"});
    }}>Login</button>
  )
}

export default LoginButton