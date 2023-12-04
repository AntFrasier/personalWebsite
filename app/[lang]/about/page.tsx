import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import { Irish_Grover } from 'next/font/google'

const irish = Irish_Grover({weight:"400", subsets:['latin']})

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
const dictionary = await getDictionary(lang)
return {
  title: dictionary.about.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.about.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",

}
}

const About = async ({
  params : { lang },
 }: {
  params :{lang:Locale}
}) => {
  const dictionary = await getDictionary(lang)
  return (
    <main className="about-background-wrapper flex max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12"> {/* px-8 md:px-24*/}
      
          <h1 className="">{dictionary.about.h1}</h1> 
          <p>{dictionary.about.intro}</p>
     
      <h2 className="">{dictionary.about.h21}</h2> 
      <p>{dictionary.about.p1}</p>
      <h2 className="">{dictionary.about.h22}</h2> 
      <p>{dictionary.about.p2}</p>
      <h2 className="">{dictionary.about.h23}</h2> 
      <p>{dictionary.about.p3}</p>
      <h2 className="">{dictionary.about.h24}</h2> 
      <p>{dictionary.about.p4}</p> < br/>
      <p>{dictionary.about.conclusion}</p>
      <div id='' className={irish.className +' about-background xl:text-[300px] text-[200px] flex flex-end items-start justify-start uppercase no-wrap'}>
      {dictionary.about.name}
      </div>
    </main>
  )
}

export default About