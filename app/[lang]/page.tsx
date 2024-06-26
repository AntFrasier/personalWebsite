import Image from 'next/image'
import { Irish_Grover } from 'next/font/google'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'

const irish = Irish_Grover({weight:"400", subsets:['latin']})


export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // read route params
const dictionary = await getDictionary(lang)
const otherLang = lang == "fr" ? {"en" : "/en/"} : {"fr" : "/fr/"}
return {
  title: dictionary.home.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.home.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",
  alternates : {
    canonical: `/${lang}/`,
    languages: otherLang,
  }
}
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  const dictionary = await getDictionary(lang)
 
  
  return (
    <main className="flex flex-row-reverse justify-end flex-wrap lg:p-24 2xl:ml-80 xl:ml-48 md:ml-24 lg:mt-24 p-12 mt-12">
    
      <div className="flex flex-col ">
        <div className='flex flex-row-reverse flex-wrap justify-end'>
          <Image 
              className='sm:ml-12 xl:max-w-[45%] max-w[55%] mb-12'
              src={"/img/CyrilMaranber.svg"}
              alt="Cyril Maranber Developer Web"
              width={400}
              height={400}
              />
          <div className={irish.className + " mt-auto mb-auto"}>
            <h1 className={"2xl:text-9xl xl:text-7xl md:text-6xl text-5xl"}><p>Cyril</p><p> Maranber</p></h1>
            <h2 className={"2xl:text-3xl xl:text-2xl md:mt-5 mt-2"}>{dictionary.home.h2}</h2>
          </div>

        </div>
      <p className={"mt-8 xl:max-w-screen-lg max-w-screen-md"}>
      {dictionary.home.hook} 
      </p>
      <div className='flex items-center justify-center gap-5'>
        <Link href={`/${lang}/contact`} >
          <button type="button" className="btn-secondary hover-underline xl:mt-36 mt-12">Contact</button>
        </Link>
        <Link href={`/${lang}/portfolio`} >
          <button type="button" className="btn-secondary hover-underline xl:mt-36 mt-12">Portfolio</button>
        </Link>
      </div>
      </div>
    
    </main>
  )
}


