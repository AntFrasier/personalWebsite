'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n-config'

export default function LocaleSwitcher({ lang } :  {lang : string} ) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        if (lang == locale) {
            return; //avoid displaying the other language @todo if there is an other language this as to be refactor
        }
        else return (
            <Link key={locale} type="button" href={redirectedPathName(locale)} className="language uppercase ">{locale}</Link>
        //   <li key={locale}>
        //     <Link
        //       href={redirectedPathName(locale)}
        //       className='rounded-md border bg-black px-3 py-2 text-white'
        //     >
        //       {locale}
        //     </Link>
        //   </li>
        )
      })}
    </ul>
  )
}