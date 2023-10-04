import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About | Cyril Maranber ",
  description: "Here is a description about me, who i am and what i did.",
}

const About = () => {
  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
      <h1>About </h1>
       
    </main>
  )
}

export default About