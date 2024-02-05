import { Locale } from '@/i18n-config'
import getAllcategories from '@/lib/getAllcategories'
import Link from 'next/link'

async function BlogCategories({ lang }:{lang: Locale}){
    const categories = await getAllcategories()
  return (
    <div className="flex flex-col items-left mt-6">
        <div className="bg-base-200 w-48 rounded-xl">
        <p className='font-semibold bg-secondary p-3 rounded-t-xl w-full'>Categories</p>
        <ul className="flex flex-col items-left gap-3 p-6 text-sm">
            <Link href={`/${lang}/blog`}><li>All</li></Link>
            {categories.map((categorie) => {
                return (
                    <li key={categorie.id}><Link href={`/${lang}/blog/${categorie.slug}`}>{categorie.name_fr}</Link></li>
                )
            })}
        </ul>
    </div>
    </div>
  )
}

export default BlogCategories