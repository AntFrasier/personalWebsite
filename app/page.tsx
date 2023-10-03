import Image from 'next/image'
import type { Metadata } from 'next'
import { Irish_Grover } from 'next/font/google'
import Link from 'next/link'

const irish = Irish_Grover({weight:"400", subsets:['latin']})
export const metadata: Metadata = {
  title: "Cyril Maranber | Web Developer",
  description: "Welcome to my personal website. you'll find here all the information regarding, what i've done",
}

export default function Home() {
  return (
    <main className="flex flex-col items-left justify-between lg:p-24 lg:mt-24 p-12 mt-12">
      <div className="pl-130px m-auto flex flex-col">
      <div className={irish.className}>
        <h1 className={"xl:text-9xl text-7xl"}><p>Cyril</p><p> Maranber</p></h1>
        <h2 className={"xl:text-3xl text-2xl mt-8"}>Web3 Developer</h2>
      </div>
      <p className={"mt-8 max-w-screen-lg"}>
        Welcome to my personal website ! I'm a french web developer pationate with blockchain technologies and web development. Here are some of my expérience and skills ! 
      </p>
      <Link href={"/contacts"} className='m-auto'>
        <button type="button" className="btn-secondary hover-underline mt-36 ">Contact</button>
      </Link>
      </div>
    </main>
  )
}
