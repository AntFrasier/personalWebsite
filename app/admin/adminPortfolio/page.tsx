import ManagingCard from '@/app/components/admin/ManagingCard'

function Portfolio() {
  return (
    <div className="flex flex-col items-start px-9 min-h-screen">
            <h2>
                Admin Portfolios
            </h2>
            <div className="flex flex-row wrap gap-6">
                <ManagingCard name="portfolio" listUrl="/admin/portfolio" addUrl="/admin/addPortfolio"/>
                <ManagingCard name="stack" listUrl="/admin/stacks" addUrl="/admin/addStack"/>
            </div>
        </div>
  )
}

export default Portfolio