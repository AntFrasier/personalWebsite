import { Locale } from "@/i18n-config"
import ManagingCard from "@/app/components/admin/ManagingCard";

const AdminBlogPost = async ({ params: { lang }} : {params : {lang:Locale}}) => {
    
   
    return (
        <div className="flex flex-col items-start px-9 min-h-screen">
            <h2>
                Admin Blog Posts
            </h2>
            <div className="flex flex-row wrap gap-6">
                <ManagingCard name="blog" listUrl="/admin/blog" addUrl="/admin/addBlog"/>
                <ManagingCard name="image" listUrl="/admin/image" addUrl="/admin/AddBlog"/>
            </div>
        </div>
            
    )
}

export default AdminBlogPost