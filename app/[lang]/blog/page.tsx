
import React from "react"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"
import Breadcrumb from "@/app/components/Breadcrumb"
import BlogCategories from "@/app/components/blogComponent/BlogCategories"

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
    canonical: `/${lang}/blog`,
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
const links = [
  {
    slug : "blog",
    name : "Blog"
  },
  {
    slug : "blog",
    name : "All"
  },

]
  return (
    <main className="flex justify-center flex-row gap-6">
      <BlogCategories lang={lang}/>
      <div className="flex flex-col items-left max-w-4xl px-9 pt-6 mt-6 justify-between bg-base-200 rounded-xl">
        <Breadcrumb links = {links} />
          <h1 className="self-start">{dictionary.blog.h1}</h1>
          <ul className='flex flex-col gap-5 mt-5 w-full max-w-4xl mb-16'>
            {blogPosts?.map ((post) => {
              return (
                <BlogPreview key= {post.id} post = {post} lang={lang} />
              )
            })}
          </ul>
      </div>
       
    </main>
  )
}

export default Blog