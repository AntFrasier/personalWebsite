import React from 'react';
import Link from "next/link";
import { Dictionary } from '@/lib/dictionary';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Menu = async ({dictionary} : {dictionary : Dictionary}) => {
  const session = await getServerSession(authOptions);
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