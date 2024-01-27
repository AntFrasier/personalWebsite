'use client'

import { Dispatch, SetStateAction, useState } from "react"
import LoadingSpinner from "../LoadingSpinner"
import { Categorie } from "@prisma/client"

const AddCategorie = ({setAddCategorie} : {setAddCategorie : Dispatch<SetStateAction<boolean>>}) => {
    const [categorie_fr, setCategorie_fr] = useState<string>("")
    const [categorie_en, setCategorie_en] = useState<string>("")
    const [slug, setSlug] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const addCategorie = async (fr:string, en:string) => {
        setLoading(true)
        try {
            const body = {
                name_fr : fr,
                name_en : en,
                slug:slug,
            }
            const result = await fetch("/api/protected/add-categorie", { //cant do a server side function because i'm in a use client component
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              });
            const categorie = await result.json()
            console.log(categorie.body)
            
        } catch (err)
        {
            console.log(err)
        }
        finally {
            setLoading(false)
            setAddCategorie(false)
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[500px] h-[300px] bg-gray-100 rounded-3xl p-3">
                <h3>
                    Ajouter une categorie !
                </h3>
                <div className="flex flex row gap-3 justify-center mb-5">
                    <div>
                        <label>Nom de la categorie fr</label>
                        <input type="text" id="categorieName_fr" value={categorie_fr} onChange={(e) => setCategorie_fr(e.target.value)}></input>    
                    </div>
                    <div>
                    <label>Categorie name EN</label>
                        <input type="text" id="categorieName_en" value={categorie_en} onChange={(e) => setCategorie_en(e.target.value)}></input>
                    </div>
                </div>
                    <div className="flex flex-col">
                    <label>Categorie slug</label>
                        <input type="text" id="categorieName_en" value={slug} onChange={(e) => setSlug(e.target.value)}></input>
                    </div>
                <div className="flex self-center gap-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => addCategorie(categorie_fr, categorie_en)} >Ajouter</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setAddCategorie(false)} >Annuler</button>
                </div>
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
        </>
    )
}

export default AddCategorie