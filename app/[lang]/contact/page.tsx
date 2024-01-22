import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { getDictionary } from '@/lib/dictionary'
import { Locale } from "@/i18n-config"

export async function generateMetadata({
    params: { lang },
  }: {
    params: { lang: Locale }
  }) {
    // read route params
  const dictionary = await getDictionary(lang)
  const otherLang = lang == "fr" ? {"en" : "/en/contact"} : {"fr" : "/fr/contact"}

  return {
    title: dictionary.contact.metaTitle,//"Cyril Maranber | Web Developer",
    description: dictionary.contact.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",
    alternates : {
        canonical: `/${lang}/contact`,
        languages: otherLang,
    },
  
  }
  }

const mySocials : {id:number, name:string, imgUri:string, alt:string, url:string, description:string}[]= [
    { 
        id: 0,
        name:"LinkedIn",
        imgUri:"LinkedInDarkBlue.svg",
        alt:"LinkedIn logo",
        url:"https://www.linkedin.com/in/cyril-maranber/",
        description:"@MaranberC",
    },
    { 
        id: 1,
        name:"Twitter",
        imgUri:"TwitterDarkBlue.svg",
        alt:"twitter logo",
        url:"https://twitter.com/MaranberC",
        description:"@MaranberC",
    },
    { 
        id: 2,
        name:"Telegram",
        imgUri:"TelegramDarkBlue.svg",
        alt:"Telegram logo",
        url:"https://t.me/+4fKW-lvJXu5mYWJk",
        description:"@CMaranber",
    },
    { 
        id: 22, 
        name:"Discord",
        imgUri:"DiscordDarkBlue.svg",
        alt:"Discord logo",
        url:"https://discord.com/channels/@MaranberC",
        description:"@MaranberC",
    },
    { 
        id: 3, 
        name:"GitHub",
        imgUri:"GithubDarkBlue.svg",
        alt:"Github logo",
        url:"https://github.com/AntFrasier",
        description:"@AntFrasier",
    },
    { 
        id: 4, 
        name:"Coding Game",
        imgUri:"CodingGameDarkBlue.svg",
        alt:"coding Game logo",
        url:"https://www.codingame.com/profile/56191ccc53f4c65138410f2f40fe81b40176245",
        description:"@AntFrasier",
    },
    { 
        id: 5, 
        name:"BuidlGuidl",
        imgUri:"BuidlGuidlDarkBlue.svg",
        alt:"BuidlGuidl logo",
        url:"https://app.buidlguidl.com/builders/0xB810b728E44df56eAf4Da93DDd08168B3660753f",
        description:"cmaranber.eth",
    },

]

const Contacts = async ( { params: { lang },
}: {
  params: { lang: Locale }
}) => {
    const dictionary = await getDictionary(lang)
  return (
    <>
    <Seo lang={lang} />
    <main className="flex flex-col items-center justify-between md:px-24 px-8 xl:pt-24 pt-12">
        <h1>{dictionary.contact.h1} </h1> {/*This is where you&#39;ll find the way to reach me. 📧 Feel free !*/}
        <ul className='flex flex-col gap-5 mt-5 w-full max-w-md mb-16'>
            {mySocials?.map( (social) => {
                return (
                    <li key={social.id}>
                        <a href={social.url} target='_blank' rel="nofollow noreferrer noopener">
                            <div className='flex flex-row items-center border-2 bg-secondary rounded-2xl origin-center ease-in-out duration-300 border-primary-content hover:border-info gap-3 px-5 py-2 w-full'>
                                <Image 
                                    src={`/img/socials/${social.imgUri}`}
                                    alt={social.alt}
                                    width={50}
                                    height={50}
                                    />
                                <div className="flex flex-col">
                                    <span className="text-md"> {social.name} </span>
                                    <span className="text-sm"> {social.description} </span>
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    </main>
    </>
  )
}

export default Contacts