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
    {
      name:"Solidity",
      logoUrl:"solidity.svg",
    },
  ]
  },
  {
  id:2,
  name:"Alchemy University final Project | LoyaltEth",
  imgUrl:"loyaltEth-thumbnail.jpg",
  alt:"image alt",
  url:"none",
  description:"WIP - This project is a app that can create a set of smart contract to automaticly create a paiment and an referal nft contract. It allows merchent that acept crypto payment to add loyalty and to reward their customer for this loyalty ! ",
  githubUrl:"https://github.com/AntFrasier/FinalProjectAU",
  stack:[
    {
      name:"NodeJs",
      logoUrl:"nodeJS.svg",
    },
    {
      name:"ReactJs",
      logoUrl:"reactJS.svg",
    },
    {
      name:"ViteJs",
      logoUrl:"viteJS.svg",
    },
    {
      name:"Javascript",
      logoUrl:"javascript.svg",
    },
    {
      name:"mongoDB",
      logoUrl:"mongodb.svg",
    },
    {
      name:"Solidity",
      logoUrl:"solidity.svg",
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
    <main className="flex flex-col items-center justify-between max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12 ">
        <h1 className="self-start">{dictionary.portfolio.h1}</h1>
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
                                    className="rounded-xl border-2 mt-5 aspect-video"
                                    />
                                <div className="flex flex-col m-5">
                                    <h2 className="text-md"> {project.name} </h2>
                                    <span className="text-sm"> {project.description} </span>
                                    <p className="text-md pt-3 pb-3 font-bold">Stack :</p> {/*as an h3 styling*/}
                                    <ul className="flex flex-wrap gap-3">
                                      {project.stack?.map((stack) => {
                                        return (
                                          <li key={stack.name} className="rounded-2xl bg-[#000000]">
                                            <Image 
                                              src={`/img/stacks-logos/${stack.logoUrl}`}
                                              alt={stack.name}
                                              width={50}
                                              height={50}
                                              className="aspect-square"
                                              title={stack.name}
                                    />
                                          </li>
                                        )
                                      })}
                                    </ul>
                                </div>
                              </div>
                              <div className='flex justify-center gap-10 mb-5'>
                                      {project.url != "none" ? (
                                        <Link href={project.url} target="_blank" rel="noopener nofollow noreferrer">
                                        <button type="button" className="btn-primary portfolio hover-underline ">Demo</button>
                                      </Link>
                                      ) : (
                                        null)}
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