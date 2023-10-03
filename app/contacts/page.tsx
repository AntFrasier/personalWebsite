import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Contacts | Cyril Maranber ",
  description: "Here are all my contacts, please feel free to contat me for any web2 or web3 project. I studie all the proposition, open source or not. C U !",
}

const Contacts = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <h1>This is where you'll find the way to reach me. 📧 Feel free ! </h1>
        <ul>
            <li>
                <div className='flex min-w-200px border-2 border-radius-25 border-white gap-3 p-5'>
                    <Image 
                        src={"twitter.svg"}
                        alt={"twitter X logo"}
                        width={50}
                        height={50}
                        >

                    </Image>
                    <span> TWITTER / X </span>
                </div>
            </li>
            <li>
                <div className='flex min-w-200px border-1 gap-3'>
                    <Image 
                        src={"twitter.svg"}
                        alt={"twitter X logo"}
                        width={50}
                        height={50}
                        >

                    </Image>
                    <span> TWITTER / X </span>
                </div>
            </li>
        </ul>
    </main>
  )
}

export default Contacts