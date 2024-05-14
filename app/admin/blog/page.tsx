import AdminBlogButtons from "@/app/components/admin/AdminBlogButtons"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"
import { Locale } from "@/i18n-config"

async function blogList({ params: { lang }} : {params : {lang:Locale}}) {
  const allBlogPost = await getAllposts("all")
  return (
    <ul>
        {allBlogPost.map ((blog) => {
            return (
                <li key={blog.id}>
                    <div className="flex flex-row gap-3 pt-3">
                        <AdminBlogButtons blog = {blog} />
                    </div>
                    <BlogPreview key={blog.id} post ={blog} lang = {lang}/>         
                </li>
                )
        })}
    </ul>
  )
}

export default blogList