import MyPost from "@/app/components/blogComponent/MyPost"
import { Locale } from "@/i18n-config"
import { getBlogPost } from "@/lib/getBlogPost"
import getCategorieName from "@/lib/getCategorieName"
import Image from "next/image"

const AdminBlogPostSlug = async ({params : {lang , slug}} : {params : {lang : Locale, slug : string}}) => {
    const blogPost = await getBlogPost(slug)
    const categorie = await getCategorieName(blogPost[0].categorieId)
    return (
        <div className="w-full">
            {blogPost[0].mainImageUrl? <Image 
                                            src={blogPost[0].mainImageUrl}
                                            alt={"todo a ajouter"}
                                            width={1024}
                                            height={768}/> : null} {/* @todo ajouter balise alt en BDD */}
            <h3>Version francaise : </h3>
            <MyPost h1={blogPost[0].h1_fr} content={blogPost[0].content_fr} />
            <div className="relative mt-10 mb-10">  
                <div content="" className="abolute w-full border-2"></div>
            </div>
            <h3>Version Anglaise : </h3>
            <MyPost h1={blogPost[0].h1_en} content={blogPost[0].content_en} />
        </div>
    )
}

export default AdminBlogPostSlug