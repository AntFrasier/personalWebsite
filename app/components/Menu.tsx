import React from 'react';
import Link from "next/link";
import { Dictionary } from '@/lib/dictionary';
import { authOptions } from '@/lib/authOptions';
import { Session } from 'next-auth';



const Menu = ({dictionary, session} : {dictionary : Dictionary, session? : Session | null}) => {
  
  return (
    <>
      <li className='hover-underline'>
        <Link href={{
          pathname: `/${dictionary?.lang}/contact`
        }}
         className="btn-primary">{dictionary?.contact.name}</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary?.lang}/about`}  className="btn-primary">{dictionary?.about.name}</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary?.lang}/portfolio`}  className="btn-primary">Portfolio</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/${dictionary?.lang}/blog`}  className="btn-primary">Blog</Link>
      </li>
      {session ? ( 
        <li className='hover-underline'>
        <Link href={`/admin`}  className="btn-primary">Admin</Link>
      </li>

      ) : (
        null
       )}
    </>
  )
}

export default Menu