import { Locale } from '@/i18n-config'
import { ReturnedPortfolio } from '@/lib/getPortfolios'
import { Portfolio } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PortfolioCard({ portfolio, lang } : {portfolio : ReturnedPortfolio, lang : Locale}  ) {
  return (
    <li>
    {/* <a href={portfolio.url} target='_blank' rel="nofollow noreferrer noopener"> */}
        <div className="flex flex-col border-b-2 origin-center ease-in-out duration-300 border-primary-content hover:border-info">
        <div className='flex flex-row items-start lg:flex-nowrap flex-wrap gap-3 px-5 py-2 w-full'>
            <Image 
                src={`${portfolio.portfolioThumbImage.url}`}
                alt={portfolio.portfolioThumbImage[`alt_${lang}`]}
                width={350}
                height={250}
                className="rounded-xl border-2 mt-5 aspect-video"
                />
            <div className="flex flex-col m-5">
                <h2 className="text-md"> {portfolio[`name_${lang}`]} </h2>
                <span className="text-sm"> {portfolio[`description_${lang}`]} </span>
                <p className="text-md pt-3 pb-3 font-bold">Stack :</p> {/*as an h3 styling*/}
                <ul className="flex flex-wrap gap-3">
                  {portfolio.stacks?.map((stack) => {
                    return (
                      <li key={stack.name} className="rounded-2xl border-2 bg-[#000000]">
                        <Image 
                          src={`${stack.stackImage.url}`}
                          alt={stack.name}
                          width={50}
                          height={50}
                          className="aspect-square "
                          title={stack.name}
                />
                      </li>
                    )
                  })}
                </ul>
            </div>
          </div>
          <div className='flex justify-center gap-10 mb-5'>
                  {portfolio.demoUrl? (
                    <Link href={portfolio.demoUrl} target="_blank" rel="noopener nofollow noreferrer">
                    <button type="button" className="btn-primary portfolio hover-underline ">Demo</button>
                  </Link>
                  ) : (
                    null)}
                  {portfolio.codeUrl? (
                    <Link href={portfolio.codeUrl} target="_blank" rel="noopener nofollow noreferer">
                    <button type="button" className="btn-primary portfolio hover-underline ">Code</button>
                  </Link>
                  ) : (
                    null
                  )}
                  
          </div>
        </div>
</li>
  )
}

export default PortfolioCard