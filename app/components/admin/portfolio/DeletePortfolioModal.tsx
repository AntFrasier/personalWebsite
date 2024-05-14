'use client'

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Portfolio } from "@prisma/client";
import LoadingSpinner from "../../LoadingSpinner";


const DeletePortfolioModal = ( {
    setModal, 
    portfolio,
} : {
    setModal : Dispatch<SetStateAction<boolean>>, 
    portfolio:Portfolio,
}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const deletePortfolio = async (portfolio : Portfolio) => {
        setLoading(true)
        try {
            const body = {
                id : portfolio.id,
            }
            console.log( "blog delete confirmed", portfolio.id)
            const result = await fetch("/api/protected/delete-portfolio", { //cant do a server side function because i'm in a use client component
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
                    Vous etes sur point d`&apos;`effacer le portfolio : `&quot;`{portfolio.name_fr}`&quot;`. Il sera donc effacer DEFINITIVEMENT. Aucun retour Possible ! 
                </div>
                <div className="flex self-center gap-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => deletePortfolio(portfolio)} >ATTENTION Confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setModal(false)} >Annuler</button>
                </div>
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
        </>
    )
}
export default DeletePortfolioModal