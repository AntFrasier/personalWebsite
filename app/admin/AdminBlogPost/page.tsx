
import Link from "next/link"

import { Locale } from "@/i18n-config"
import Image from "next/image"

const AdminBlogPost = async ({ params: { lang }} : {params : {lang:Locale}}) => {
    
    
    return (
        <div className="flex flex-col items-start px-9">
            <h2>
                Admin Blog Posts
            </h2>
            <div className="flex flex-col w-full max-w-md p-4 items-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3>Manage Blogs Posts</h3>
                <Image 
                    src="/img/default-add-blog.jpeg"
                    width={150}
                    height={150}
                    alt="default add blog image"/>
                <div className=" flex flex-row items-center gap-3 pt-3">
                    <Link href={`/admin/blog`}>
                        <button type="button" className="btn-secondary portfolio hover-underline ">Post lists</button>
                    </Link>
                    <Link href={`/admin/addBlog`}>
                        <button type="button" className="btn-secondary portfolio hover-underline ">Add new Post</button>
                    </Link>
                </div>
            </div>
            
            
        </div>
    )
}

export default AdminBlogPost