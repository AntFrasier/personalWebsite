import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import LogoutButton from './LogoutButton'

async function AdminHeader() {
    const session = await getServerSession()
  return (
    <div className='flex flex-row items-center justify-between bg-white w-full p-3'>
        <p className='font-semibold text-2xl'>
            Back office 
        </p>
        <div className="flex flex-row items-center justify-evenly gap-3">
        {session ? (
            <>
                <Image 
                    src={session?.user.image?  session?.user.image : "\img\defaultAvatar.svg"}
                    width={35}
                    height={35}
                    alt={"avatar image"}
                    className={"rounded-full"}/>
                <span>
                    {session?.user.name}
                </span>
                    <LogoutButton />
            </>
            ):(
            <div>Not connected</div>
            )}
             
        </div>
    </div>
  )
}

export default AdminHeader