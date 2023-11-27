import React from 'react';
import Link from "next/link";
import { getDictionary } from '@/lib/dictionary';
import type { Dictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n-config';

const Menu = async ({lang} : {lang : Locale}) => {
  const dictionary = await getDictionary(lang)
  return (
    <>
      <li className='hover-underline'>
        <Link href={{
          pathname: `/${dictionary.lang}/contact`
        }}
         className="btn-primary">{dictionary.contact.name}</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary.lang}/about`}  className="btn-primary">{dictionary.about.name}</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary.lang}/portfolio`}  className="btn-primary">Portfolio</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary.lang}/blog`}  className="btn-primary">Blog</Link>
      </li>
    </>
  )
}

export default Menu