import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionary'

export const metadata: Metadata = {
  title: "About | Cyril Maranber ",
  description: "Here is a description about me, who i am and what i did.",
}

const About = async ({params : { lang } }: {params :{lang:string}}) => {

  const dictionary = await getDictionary(lang)
  
  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
      <h1>{dictionary.about.h1}</h1> 
    </main>
  )
}

export default About