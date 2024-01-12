import { BlogPost } from "@/blogTypes"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"
import Link from "next/link"
import AdminBlogButtons from "@/app/components/admin/AdminBlogButtons"

const AdminBlogPost = async () => {
    const allBlogPost = await getAllposts("all")
    
    return (
        <div className="flex flex-col">
            <h1>
                Admin Blog Post
            </h1>
            <Link href={`admin/addBlog`}>
                <button type="button" className="btn-primary portfolio hover-underline ">Add new Post</button>
            </Link>
            <ul>
                {allBlogPost.map ((blog) => {
                    return (
                        <>
                        <div className="flex flex-row gap-3 pt-3">
                            <AdminBlogButtons blog = {blog} />
                        </div>
                        <BlogPreview post ={blog} />
                        
                        </>

                    )
                })}
            </ul>
            
        </div>
    )
}

export default AdminBlogPost