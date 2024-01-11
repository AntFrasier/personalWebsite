
import React from "react"
import Image from "next/image"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"
import Link from "next/link"
import { BlogPost } from "@/blogTypes"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"

// const blogPosts : {
//   id:number
//   title:string
//   description:string
//   h1:string
//   categories:string[]
//   thumbnailUrl:string
//   thumbnailAlt:string
// }[] = [
//   {
//     id:0,
//     title:"Blog Post 1",
//     description:"this the description of the blog post",
//     h1:"My first blog post",
//     categories:["test"],
//     thumbnailUrl:"",
//     thumbnailAlt:"my alt thumbnail",
//   }
// ]

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // read route params
const dictionary = await getDictionary(lang)
return {
  title: dictionary.blog.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.blog.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",
}
}

const Blog = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  
const dictionary = await getDictionary(lang) 
const blogPosts = await getAllposts("published")

  return (
    <main className="flex flex-col items-center justify-between max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12 ">
        <h1 className="self-start">{dictionary.blog.h1}</h1>
        <ul className='flex flex-col gap-5 mt-5 w-full max-w-4xl mb-16'>
          {blogPosts?.map ((post) => {
            return (
              <BlogPreview key= {post.id} post = {post} />
              //todo add blog preview component
            )
          })}
        </ul>
       
    </main>
  )
}

export default Blog