import MyPost from "@/app/components/blogComponent/MyPost"
import { BlogPost } from "@/blogTypes"
import { Locale } from "@/i18n-config"
import { getBlogPost } from "@/lib/getBlogPost"



const AdminBlogPostSlug = async ({params : {lang , slug}} : {params : {lang : Locale, slug : string}}) => {
    const blogPost = await getBlogPost(slug)
    return (
        <div className="ml-[250px] max-w-[1280px]">
            <h3>Version francaise : </h3>
            <MyPost h1={blogPost[0].h1_fr} content={blogPost[0].content_fr} />
            <h3>Version Anglaise : </h3>
            <MyPost h1={blogPost[0].h1_en} content={blogPost[0].content_en} />
        </div>
    )
}

export default AdminBlogPostSlug