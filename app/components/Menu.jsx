import React from 'react';
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <li className='hover-underline'>
        <Link href={"/contacts"} className="btn-primary">Contacts</Link>
      </li>
      <li className='hover-underline'>
        <Link href={"/about"}  className="btn-primary">About</Link>
      </li>
      <li className='hover-underline'>
        <Link href={"/portfolio"}  className="btn-primary">Portfolio</Link>
      </li>
      <li className='hover-underline'>
        <Link href={"/blog"}  className="btn-primary">Blog</Link>
      </li>
    </>
  )
}

export default Menu