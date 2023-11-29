import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n-config'

export const metadata: Metadata = {
  title: "About | Cyril Maranber ",
  description: "Here is a description about me, who i am and what i did.",
}

const About = async ({params : { lang } }: {params :{lang:Locale}}) => {

  const dictionary = await getDictionary(lang)
  
  return (
    <main className="flex flex-col items-left justify-between md:px-24 px-8 xl:pt-24 pt-12">
      <h1 className="">{dictionary.about.h1}</h1> 
      <p>{dictionary.about.intro}</p>
      <h2 className="">{dictionary.about.h21}</h2> 
      <p>{dictionary.about.p1}</p>
      <h2 className="">{dictionary.about.h22}</h2> 
      <p>{dictionary.about.p2}</p>
      <h2 className="">{dictionary.about.h23}</h2> 
      <p>{dictionary.about.p3}</p>
      <h2 className="">{dictionary.about.h24}</h2> 
      <p>{dictionary.about.p4}</p>
      <p>{dictionary.about.conclusion}</p>
    </main>
  )
}

export default About