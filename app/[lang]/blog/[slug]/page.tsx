import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { getBlogPost } from '@/lib/getBlogPost'
import MyPost from '@/app/components/blogComponent/MyPost'
import { Post } from '@prisma/client'

// const dictionary = await 

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale, slug:string }
}) {
  // read route params
const otherLang = lang == "fr" ? {"en" : `/en/blog/${slug}`} : {"fr" : `/fr/blog/${slug}`}
const blogPost:Post[] = await getBlogPost(slug);
if (blogPost.length == 0 ) {
    return {
      title: "Blog Not found",
      robots: {
        index: false,
        follow: false,
        googleBot: {
            index:false,
            follow:false
        }
      }
  } 
} else { 
    return {
      title: lang == 'fr' ? blogPost[0].title_fr : blogPost[0].title_en,
      description: lang == 'fr' ? blogPost[0].description_fr : blogPost[0].description_en, 
      alternates : {
        canonical: `/${lang}/blog/${slug}`,
        languages: otherLang,
    },

    }
  }
}

export default async function BlogPost({
  params: { lang, slug },
}: {
  params: { lang: Locale, slug:string }
}) {

  const dictionary = await getDictionary(lang)
  const blogPost:Post[] = await getBlogPost(slug);
  
  if (blogPost.length == 0) {
    return (
      <div>{dictionary.blogPost.notFound}</div>
    )
  }
  else {
    const myBlogPost:Post = blogPost[0]
    return (
      
      <> 
        <MyPost h1={lang == "fr"? myBlogPost.h1_fr : myBlogPost.h1_en } content={lang == "fr"? myBlogPost.content_fr : myBlogPost.content_en} /> 
      </>
    )
  }
}