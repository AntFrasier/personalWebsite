import AddPortfolioComponent from "@/app/components/admin/AddPortfolioComponent";
import getPortfolioById from "@/lib/getPortfolioById";
import { ReturnedPortfolio } from "@/lib/getPortfolios";


const addPortfolio = async ({searchParams} : {searchParams : {id : number}}) => {
    let portfolio : ReturnedPortfolio | null = null
    if (searchParams.id) portfolio = await getPortfolioById(searchParams.id)
  
    return (
        <AddPortfolioComponent givenPortfolio = {portfolio}/>
    )
}
export default addPortfolio;