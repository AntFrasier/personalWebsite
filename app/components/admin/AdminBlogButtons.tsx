'use client'

import { BlogPost } from "@/blogTypes"
import { useState } from "react"
import PublishModal from "./PublishModal"

const AdminBlogButtons = ( {blog} : {blog : BlogPost}) => {
    const [modal, setModal] = useState<boolean>(false)
    const [confirm, setConfirm] = useState<boolean>(false)

    const publishBlogPost = async (blog : BlogPost) => {
        if (confirm) {
            console.log( "blog publication confirmed")
        }

        if (!confirm) console.log( "blog publication NOT confirmed")

    }
    return (
        <>
        {modal ? <PublishModal setModal ={setModal} setConfirm={setConfirm} name = {blog.name} /> : null}
        {blog.draft ? <button type="button" className="btn-primary portfolio hover-underline gap-3" onClick={ () => setModal(true)}>Publier</button> : null}
        <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Effacer</button>
        <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Modifier</button>
        </>
    )
}

export default AdminBlogButtons