import React from "react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | freelance blockchain developer  ",
  description: "Blockcahin development Blog. All the articles about web3 dev, tips, skills, and so on. ",
}

const Blog = () => {
  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
        <h1>Blog </h1>
        <p>Comming soon</p>
       
    </main>
  )
}

export default Blog