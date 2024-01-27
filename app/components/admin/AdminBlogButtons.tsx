'use client'

import { useState } from "react"
import PublishModal from "./PublishModal"
import DeleteModal from "./DeleteModal"
import { Post } from "@prisma/client"
import Link from "next/link"

const AdminBlogButtons = ( {blog} : {blog : Post}) => {
    const [publishModal, setPublishModal] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    return (
        <>
        {publishModal ? <PublishModal setModal ={setPublishModal}  blog = {blog}/> : null}
        {deleteModal ? <DeleteModal setModal ={setDeleteModal}  blog = {blog}/> : null}
        {blog.draft ? <button type="button" className="btn-primary portfolio hover-underline gap-3" onClick={ () => setPublishModal(true)}>Publier</button> : null}
        <button type="button" className="btn-primary portfolio hover-underline gap-3 " onClick={ () => setDeleteModal(true)}>Effacer</button>
        <Link
            href={{
                pathname:'/admin/addBlog',
                query: blog,
            }}>
        <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Modifier</button>
        </Link>
        </>
    )
}

export default AdminBlogButtons