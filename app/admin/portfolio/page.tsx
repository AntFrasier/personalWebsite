import PortfolioCard from "@/app/components/PortfolioCard"
import AddPortfolio from "@/app/components/admin/AddPortfolio";
import AdminPortfolioButtons from "@/app/components/admin/portfolio/AdminPortfolioButtons";
import getPortfolios, { ReturnedPortfolio } from "@/lib/getPortfolios"

const Portfolio = async () => {

  const portfolios : ReturnedPortfolio[] = await getPortfolios();

  return (
    <main className="flex flex-col items-center justify-between max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12 ">
        <h1 className="self-start">{"Page d'administration des Portfolios"}</h1>
        <ul className='flex flex-col gap-5 mt-5 w-full max-w-4xl mb-16'>
          {(portfolios.length == 0) ? (
            <div>
              <span>No Portfolios</span>
                  <AddPortfolio />
            </div>
            ) : (
              portfolios?.map( (portfolio) => {
                return (
                  <div className="bg-secondary p-5 m-b-5 rounded-xl">
                    <div className="flex flex-row gap-3 pt-3">
                      <AdminPortfolioButtons portfolio={portfolio}/>
                    </div>
                    <PortfolioCard key= {`${portfolio.id} fr`} portfolio = {portfolio} lang = {"fr"}/>
                    <PortfolioCard key= {`${portfolio.id} en`} portfolio = {portfolio} lang = {"en"}/>
                  </div>
                )
            })
            )}
        </ul>
    </main>
  )
}

export default Portfolio