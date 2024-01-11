import MyPost from "@/app/components/blogComponent/MyPost"
import { BlogPost } from "@/blogTypes"
import { getAllposts } from "@/lib/getAllPosts"
import BlogPreview from "@/app/components/blogComponent/BlogPreview"
import Link from "next/link"

const AdminBlogPost = async () => {
    const allBlogPost = await getAllposts("all")

    return (
        <div className="ml-[250px]">
            <h1>
                Admin Blog Post
            </h1>
            <ul>
                {allBlogPost.map ((blog) => {
                    return (
                        <>
                        <div className="flex flex-row gap-3 pt-3">
                            {blog.draft ? <button type="button" className="btn-primary portfolio hover-underline gap-3">Publié</button> : null}
                            <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Effacer</button>
                            <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Modifier</button>
                        </div>
                        <BlogPreview post ={blog} />
                        
                        </>

                    )
                })}
            </ul>
            <Link href={`admin/addBlog`}>
                <button type="button" className="btn-primary portfolio hover-underline ">Add new Post</button>
            </Link>
        </div>
    )
}

export default AdminBlogPost