'use client'

import { useState } from "react"
import { Portfolio } from "@prisma/client"
import Link from "next/link"
import PublishPortfolioModal from "./PublishPortfolioModal"
import DeletePortfolioModal from "./DeletePortfolioModal"

const AdminPortfolioButtons = ( {portfolio} : {portfolio : Portfolio}) => {
    const [publishModal, setPublishModal] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    console.log("in adminPortfolio buttons ", portfolio)
    return (
        <>
        {publishModal ? <PublishPortfolioModal setModal ={setPublishModal}  portfolio = {portfolio}/> : null}
        {deleteModal ? <DeletePortfolioModal setModal ={setDeleteModal}  portfolio = {portfolio}/> : null}
        {portfolio.draft ? <button type="button" className="btn-primary portfolio hover-underline gap-3" onClick={ () => setPublishModal(true)}>Publier</button> : null}
        <button type="button" className="btn-primary portfolio hover-underline gap-3 " onClick={ () => setDeleteModal(true)}>Effacer</button>
        <Link
            href={{
                pathname:'/admin/addPortfolio',
                query: {id : portfolio.id},
            }}>
        <button type="button" className="btn-primary portfolio hover-underline gap-3 ">Modifier</button>
        </Link>
        </>
    )
}

export default AdminPortfolioButtons