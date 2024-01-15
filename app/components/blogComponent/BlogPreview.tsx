import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import getCategorieName from "@/lib/getCategorieName"
import { Post } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

const BlogPreview = async ({post, lang} : {post:Post, lang :Locale}) => { //language : Locale,
    const categorie = await getCategorieName(post.categorieId)
    const dictionary = await getDictionary(lang) 
    return (
        <li key={post.id}>
                <div className="flex flex-col border-b-2 origin-center ease-in-out duration-300 border-primary-content hover:border-info">
                  <div className='flex flex-row items-start lg:flex-nowrap flex-wrap gap-3 px-5 py-2 w-full'>
                    <Image 
                      src={post.mainImageUrl != "" ? `${post.mainImageUrl}` : "/img/blog/Blog_default_thumbnail.jpeg"}
                      alt={""}
                      width={350}
                      height={250}
                      className="rounded-xl border-2 mt-5 aspect-video"
                      />            
                    <div className="flex flex-col m-5">
                                    <h2 className="text-md"> {lang == "fr"? post.name_fr : post.name_en} </h2>
                                    <span className="text-sm"> {lang == "fr"? post.description_fr : post.description_en} </span>
                                    {/* <p className="text-md pt-3 pb-3 font-bold">{post.categorieId} :</p>  */}
                                    <p className="flex flex-wrap gap-3">
                                      {lang == "fr"? categorie?.name_fr : categorie?.name_en}
                                    </p>
                    </div>
                  </div>
                  <div className='flex justify-center gap-10 mb-5'>  
                    <Link href={`blog/${post.slug}`}>
                      <button type="button" className="btn-primary portfolio hover-underline ">{dictionary.blog.read}</button>
                    </Link>
                  </div>
                 </div>
                </li>
    )
}

export default BlogPreview