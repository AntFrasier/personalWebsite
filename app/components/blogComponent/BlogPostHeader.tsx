import { Locale } from '@/i18n-config'
import { Post } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

function BlogPostHeader({lang, post} : {lang:Locale, post:Post}) {
    const links = [
        {
            slug: "blog",
            name: "Blog",
        },
        {
            slug: `blog/${post.categorie.name_fr}`,
            name: `${post.categorie.name_fr}`,
        },
        {
            slug: `blog/${post.categorie.name_fr}/${post.slug}`, //todo add slug to categories
            name: `${post.name_fr}`,
        }
    ]

    

  return (
    <>
        <div id="myPostHeader" className='top-0 left-0 w-full overflow-hidden max-h-[200px]' >
            <Image src={post.mainImageUrl} width={1024} height={200} alt='todo get image infos' />
        </div>
        <Breadcrumb links = {links} />
        
  </>
  )
}

export default BlogPostHeader