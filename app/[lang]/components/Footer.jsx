import Image from 'next/image';
import Link from 'next/image';
import React from 'react'

const Footer = (lang) => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className='flex fixed bottom-0 w-full bg-secondary shadow-lg mt-10'>
        <a className='p-2' href={"https://github.com/AntFrasier/personalWebsite"} target={"_blanck"} alt={"Cyril Maranber Github profile link"} rel='nofollow noreferrer noopener'>
            <Image
             className='justify-self-start'
                src={"/img/github-mark.svg"}
                alt='github logo'
                width={22}
                height={21}
                />
         </a>
        <p className='p-2 text-xs ml-auto mr-auto'>&copy;Copyright Cyril Maranber - {year}</p>
    </footer>
  )
}

export default Footer