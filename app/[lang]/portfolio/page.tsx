import React from "react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portfolio | Web3 developer",
  description: "Here is my portfolio, or at least some of things i've done.",
}

const Portfolio = () => {
  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
        <h1>Portfolio </h1>
       
    </main>
  )
}

export default Portfolio