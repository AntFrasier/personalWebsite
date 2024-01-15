'use client'

import { BlogPost } from "@/blogTypes"
import { useState } from "react"
import PublishModal from "./PublishModal"
import DeleteModal from "./DeleteModal"

const AdminBlogButtons = ( {blog} : {blog : BlogPost}) => {
    const [publishModal, setPublishModal] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    return (
        <>
        {publishModal ? <PublishModal setModal ={setPublishModal}  blog = {blog}/> : null}
        {deleteModal ? <DeleteModal setModal ={setDeleteModal}  blog = {blog}/> : null}
        {blog.draft ? <button type="button" className="btn-primary portfolio hover-underline gap-3" onClick={ () => setPublishModal(true)}>Publier</button> : null}
        <button type="button" className="btn-primary portfolio hover-underline gap-3 " onClick={ () => setDeleteModal(true)}>Effacer</button>
        <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Modifier</button>
        </>
    )
}

export default AdminBlogButtons