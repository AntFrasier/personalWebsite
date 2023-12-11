import React from "react"
import Image from "next/image"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"

const myProjects : {
  id:number, 
  name:string, 
  imgUrl:string, 
  alt:string, 
  url:string, 
  description:string, 
  githubUrl:string, 
  stack:{
    name:string, 
    logoUrl:string}[]
  }[]= [ 
  {
  id:0,
  name:"This WebSite",
  imgUrl:"cyril-maranber-thumbnail.jpg",
  alt:"Cyril Maranber fullStack dev",
  url:"https://cyril-maranber.com",
  description:"This project has been made to get out of localhost ... Showing some skills that i have. It's a way for me to still learn and improve my self !",
  githubUrl:"https://github.com/AntFrasier/personalWebsite/tree/master",
  stack:[
    {
      name:"NextJS",
      logoUrl:"nextJS.svg",
    },
    {
      name:"Css",
      logoUrl:"css.svg",
    },
    {
      name:"Html",
      logoUrl:"html5.svg",
    },
    {
      name:"Tailwind",
      logoUrl:"tailwind.svg",
    },
  ]
  },
  {
  id:1,
  name:"BuidlGuidl profile",
  imgUrl:"buidlGuidl-thumbnail.jpg",
  alt:"Buidl Guidl cyril maranber profile thumbnail",
  url:"https://app.buidlguidl.com/builders/0xB810b728E44df56eAf4Da93DDd08168B3660753f",
  description:"My buidlGuidl profile where some of web3 challenge or project are listed ! For some of theme i uses scaffoldEth 1 and some uses scaffoldEth 2",
  githubUrl:"https://github.com/AntFrasier",
  stack:[
    {
      name:"ScaffoldEth",
      logoUrl:"scaffoldEth.svg",
    },
    {
      name:"NextJS",
      logoUrl:"nextJS.svg",
    },
    {
      name:"TypeScript",
      logoUrl:"typescript.svg",
    },
  ]
  },
  {
  id:2,
  name:"alchemy uni Project",
  imgUrl:"/img/thumbnail/",
  alt:"image alt",
  url:"/alchemy.test",
  description:"This the description",
  githubUrl:"/github",
  stack:[
    {
      name:"nodeJs",
      logoUrl:"Brand=nodejs, Style=Dark.svg",
    },
  ]
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
                        {/* <a href={project.url} target='_blank' rel="nofollow noreferrer noopener"> */}
                            <div className="flex flex-col border-b-2 origin-center ease-in-out duration-300 border-primary-content hover:border-info">
                            <div className='flex flex-row items-start lg:flex-nowrap flex-wrap gap-3 px-5 py-2 w-full'>
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
                                    <h3>Stack :</h3>
                                    <ul className="flex gap-3">
                                      {project.stack?.map((stack) => {
                                        return (
                                          <li key={stack.name} className="rounded-2xl bg-[#000000]">
                                            <Image 
                                              src={`/img/stacks-logos/${stack.logoUrl}`}
                                              alt={stack.name}
                                              width={50}
                                              height={50}
                                              className=""
                                    />
                                          </li>
                                        )
                                      })}
                                    </ul>
                                </div>
                              </div>
                              <div className='flex justify-center gap-10 mb-5'>
                                      <Link href={project.url} target="_blank" rel="noopener nofollow noreferrer">
                                        <button type="button" className="btn-primary portfolio hover-underline ">Demo</button>
                                      </Link>
                                      <Link href={project.githubUrl} target="_blank" rel="noopener nofollow noreferer">
                                        <button type="button" className="btn-primary portfolio hover-underline ">Code</button>
                                      </Link>
                              </div>
                            </div>
                    </li>
                )
            })}
        </ul>
       
    </main>
  )
}

export default Portfolio