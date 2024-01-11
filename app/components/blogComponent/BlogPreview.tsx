import { BlogPost } from "@/blogTypes"
import Image from "next/image"
import Link from "next/link"

const BlogPreview = ({post} : {post:BlogPost}) => { //language : Locale,
  
    return (
        <li key={post.id}>
                <div className="flex flex-col border-b-2 origin-center ease-in-out duration-300 border-primary-content hover:border-info">
                  <div className='flex flex-row items-start lg:flex-nowrap flex-wrap gap-3 px-5 py-2 w-full'>
                    <Image 
                      src={post.mainImageUrl != "" ? `/img/thumbnail/${post.mainImageUrl}` : "/img/blog/Blog_default_thumbnail.jpeg"}
                      alt={""}
                      width={350}
                      height={250}
                      className="rounded-xl border-2 mt-5 aspect-video"
                      />            
                    <div className="flex flex-col m-5">
                                    <h2 className="text-md"> {post.h1_fr} </h2>
                                    <span className="text-sm"> {post.description_fr} </span>
                                    <p className="text-md pt-3 pb-3 font-bold">{post.categorieId} :</p> {/*as an h3 styling*/}
                                    <p className="flex flex-wrap gap-3">
                                      {post.categorieId}
                                      
                                    </p>
                    </div>
                  </div>
                  <div className='flex justify-center gap-10 mb-5'>  
                    <Link href={`blog/${post.slug}`}>
                      <button type="button" className="btn-primary portfolio hover-underline ">read</button>
                    </Link>
                  </div>
                 </div>
                </li>
    )
}

export default BlogPreview