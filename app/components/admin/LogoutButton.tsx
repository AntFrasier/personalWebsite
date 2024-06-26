'use client'

import { signOut } from "next-auth/react"


const LogoutButton = () => {
  return (
    <button className="btn-secondary" onClick={ async () => {
        await signOut();
    }}>Logout</button>
  )
}

export default LogoutButton