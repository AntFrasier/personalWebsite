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
    <main className="flex flex-row-reverse justify-end flex-wrap lg:p-24 xl:ml-36 md:ml-24 lg:mt-24 p-12 mt-12">
    
      <div className="flex flex-col ">
        <div className='flex flex-row-reverse flex-wrap justify-end'>
          <Image 
              className='sm:ml-12 xl:max-w-[45%] max-w[55%]'
              src={"/img/CyrilMaranber.svg"}
              alt="Cyril Maranber Developer Web"
              width={400}
              height={400}
              />
          <div className={irish.className + " mt-auto mb-auto"}>
            <h1 className={"2xl:text-9xl xl:text-7xl md:text-6xl text-5xl"}><p>Cyril</p><p> Maranber</p></h1>
            <h2 className={"2xl:text-3xl xl:text-2xl md:mt-5 mt-2"}>Web3 Developer</h2>
          </div>

        </div>
      <p className={"mt-8 xl:max-w-screen-lg max-w-screen-md"}>
        Welcome to my personal website ! I&#39;m a french web developer pationate with blockchain technologies and web development. Here are some of my expérience and skills ! 
      </p>
      <Link href={"/contacts"} className='m-auto'>
        <button type="button" className="btn-secondary hover-underline xl:mt-36 mt-12">Contact</button>
      </Link>
      </div>
    
    </main>
  )
}
