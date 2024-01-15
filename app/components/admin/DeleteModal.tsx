'use client'

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Post } from "@prisma/client";


const DeleteModal = ( {
    setModal, 
    blog,
} : {
    setModal : Dispatch<SetStateAction<boolean>>, 
    blog:Post,
}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const deleteBlogPost = async (blog : Post) => {
        setLoading(true)
        try {
            const body = {
                id : blog.id,
            }
            console.log( "blog delete confirmed", blog.id)
            const result = await fetch("/api/delete-post", { //cant do a server side function because i'm in a use client component
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              });
            console.log(await result.json())
            router.refresh()

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            setModal(false)
            
        }

        }

    return (
        <>
        <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[500px] h-[300px] bg-gray-100 rounded-3xl p-3">
                <h3>
                    ATTENTION ! Confirmation requise !
                </h3>
                <div className="h-full self-center align-center">
                    Vous etes sur point d'effacer le blog : "{blog.name_fr}". Il sera donc effacer DEFINITIVEMENT. Aucun retour Possible ! 
                </div>
                <div className="flex self-center gap-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => deleteBlogPost(blog)} >ATTENTION Confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setModal(false)} >Annuler</button>
                </div>
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
        </>
    )
}
export default DeleteModal