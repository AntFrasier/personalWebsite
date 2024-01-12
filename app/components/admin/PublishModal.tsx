'use client'
import { Dispatch, SetStateAction } from "react";


const PublishModal = ( {setModal, setConfirm, name} : {setModal : Dispatch<SetStateAction<boolean>>, setConfirm: Dispatch<SetStateAction<boolean>> ,name:string}) => {
    return (
        <>
        <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[500px] h-[300px] bg-gray-100 rounded-3xl p-3">
                <h3>
                    Confirmation requise !
                </h3>
                <div className="h-full self-center align-center">
                    Vous etes sur point de publier le blog : "{name}". Il sera donc accessible depuis le front et passera du status Brouillon à Publié.
                </div>
                <div className="flex self-center gap-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => setModal(false)} >Confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setModal(false)} >Annuler</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default PublishModal