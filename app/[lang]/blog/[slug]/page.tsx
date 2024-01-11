import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { getBlogPost } from '@/lib/getBlogPost'
import { BlogPost } from '@/blogTypes'
import MyPost from '@/app/components/blogComponent/MyPost'

// const dictionary = await 

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale, slug:string }
}) {
  // read route params
const blogPost:BlogPost[] = await getBlogPost(slug);
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

    }
  }
}

export default async function BlogPost({
  params: { lang, slug },
}: {
  params: { lang: Locale, slug:string }
}) {

  const dictionary = await getDictionary(lang)
  const blogPost:BlogPost[] = await getBlogPost(slug);
  
  if (blogPost.length == 0) {
    return (
      <div>{dictionary.blogPost.notFound}</div>
    )
  }
  else {
    const myBlogPost:BlogPost = blogPost[0]
    return (
      
      <> 
        <MyPost h1={lang == "fr"? myBlogPost.h1_fr : myBlogPost.h1_en } content={lang == "fr"? myBlogPost.content_fr : myBlogPost.content_en} /> 
      </>
    )
  }
}