import React from "react"
import Image from "next/image"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"

const myProjects : {id:number, name:string, imgUrl:string, alt:string, url:string, description:string, githubUrl:string}[]= [ 
  {
  id:0,
  name:"This WebSite",
  imgUrl:"cyril-maranber-thumbnail.jpg",
  alt:"Cyril Maranber fullStack dev",
  url:"/cyril-maranber.com",
  description:"This the description",
  githubUrl:"/github"
  },
  {
  id:1,
  name:"alchemy uni Project",
  imgUrl:"/img/thumbnail/",
  alt:"image alt",
  url:"/alchemy.test",
  description:"This the description",
  githubUrl:"/github"
  },
]


export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // read route params
const dictionary = await getDictionary(lang)
return {
  title: dictionary.portfolio.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.portfolio.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",

}
}

const Portfolio = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  // read route params
const dictionary = await getDictionary(lang) 
  return (
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
        <h1>{dictionary.portfolio.h1} </h1>
        <p>Under Construction</p>
        <ul className='flex flex-col gap-5 mt-5 w-full max-w-4xl mb-16'>
            {myProjects?.map( (project) => {
                return (
                    <li key={project.id}>
                        <a href={project.url} target='_blank' rel="nofollow noreferrer noopener">
                            <div className='flex flex-row items-start border-b-2 hover:bg-secondary origin-center ease-in-out duration-300 border-primary-content hover:border-info gap-3 px-5 py-2 w-full'>
                                <Image 
                                    src={`/img/thumbnail/${project.imgUrl}`}
                                    alt={project.alt}
                                    width={350}
                                    height={250}
                                    className="rounded-xl border-2 m-5"
                                    />
                                <div className="flex flex-col m-5">
                                    <h3 className="text-md"> {project.name} </h3>
                                    <span className="text-sm"> {project.description} </span>
                                    <span className="text-sm"> {project.githubUrl} </span>
                                    <span className="text-sm"> {project.url} </span>
                                    <h3>Stack :</h3>
                                    <div className='flex items-center justify-center gap-5'>
                                      <Link href={`/${lang}/#`} >
                                        <button type="button" className="btn-primary portfolio hover-underline xl:mt-36 mt-12">Demo</button>
                                      </Link>
                                      <Link href={`/${lang}/#`} >
                                        <button type="button" className="btn-primary portfolio hover-underline xl:mt-36 mt-12">Code</button>
                                      </Link>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
       
    </main>
  )
}

export default Portfolio