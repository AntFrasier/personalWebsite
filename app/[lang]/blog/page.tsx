
import React from "react"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // read route params
const dictionary = await getDictionary(lang)
const otherLang = lang == "fr" ? {"en" : "/en/blog"} : {"fr" : "/fr/blog"}

return {
  title: dictionary.blog.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.blog.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",
  alternates : {
    canonical: `/${lang}/contact`,
    languages: otherLang,
},
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
              <BlogPreview key= {post.id} post = {post} lang={lang} />
            )
          })}
        </ul>
       
    </main>
  )
}

export default Blog