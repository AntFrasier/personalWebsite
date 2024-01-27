'use client'

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import Image from "next/image";



const DeleteImageModal = ( {
    setHasToRefresh,
    setModal, 
    image,
} : {
    setHasToRefresh : Dispatch<SetStateAction<boolean>>,
    setModal : Dispatch<SetStateAction<boolean>>, 
    image: {key: string, url: string},
}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const deleteImage = async (image : {key: string, url: string}) => {
        setLoading(true)
        try {
            const body = {
                key : image.key,
            }
            const result = await fetch("/api/protected/delete-UT-image", { //cant do a server side function because i'm in a use client component
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              });
            await result.json()
            setHasToRefresh(true)
            setModal(false)

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            
            
        }

        }

    return (
        <>
        <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[500px] bg-gray-100 rounded-3xl p-3">
                <h3>
                    ATTENTION ! Confirmation requise !
                </h3>
                <div className="h-full self-center align-center">
                    Vous etes sur point d'effacer cette image' : elle sera donc effacer DEFINITIVEMENT. Aucun retour Possible !
                    <Image
                    className="m-auto p-3"
                        src={image.url}
                        width={250}
                        height={250}
                        alt='image à suprimer'
                    />
                </div>
                <div className="flex self-center gap-3 p-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => deleteImage(image)} >ATTENTION Confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setModal(false)} >Annuler</button>
                </div>
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
        </>
    )
}
export default DeleteImageModal