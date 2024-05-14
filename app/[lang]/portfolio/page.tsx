import React from "react"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import PortfolioCard from "@/app/components/PortfolioCard"
import getPortfolios, { ReturnedPortfolio } from "@/lib/getPortfolios"

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // read route params
const dictionary = await getDictionary(lang)
const otherLang = lang == "fr" ? {"en" : "/en/portfolio"} : {"fr" : "/fr/portfolio"}
return {
  title: dictionary.portfolio.metaTitle,//"Cyril Maranber | Web Developer",
  description: dictionary.portfolio.metaDescription, //"Welcome to my personal website. you'll find here all the information regarding, what i've done",
  alternates : {
    canonical: `/${lang}/portfolio`,
    languages: otherLang,
},
}
}

const Portfolio = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  // read route params
const dictionary = await getDictionary(lang);
const portfolios : ReturnedPortfolio[] = await getPortfolios();
  return (
    <main className="flex flex-col items-center justify-between max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12 ">
        <h1 className="self-start">{dictionary.portfolio.h1}</h1>
        <ul className='flex flex-col gap-5 mt-5 w-full max-w-4xl mb-16'>
          {(portfolios.length == 0) ? (
            <span>No Portfolios</span>
            ) : (
              portfolios?.map( (portfolio) => {
                return (
                   <PortfolioCard portfolio = {portfolio} lang = {lang}/>
                )
            })
            )}
            
        </ul>
       
    </main>
  )
}

export default Portfolio