import { Locale } from '@/i18n-config';
import { getPost } from '@/lib/getPost';
import Image from 'next/image';
import Link from 'next/link';



export default async function Post({
    params: { lang, id },

  }: {
    params: { lang: Locale, id:number }
  }) {

    const post = await getPost(lang, id);

    return(
      <>
      <div className='relative md:h-[250px] h-[150px] overflow-hidden'> {/* blog post header*/ }
        <Image 
            src={`/img/blog/${id}/${post.headerImg}`}
            alt={post.thumbnailAlt}
            width={1650}
            height={1250}
            className="absolute w-full l-[50%] "
          />   
        <div className='absolute h-full w-full l-[50%] bg-gradient-to-b from-secondary'>
        </div>
      </div>
      <main className="flex flex-col items-start justify-between max-w-4xl flex-col items-left justify-between lg:px-0 px-8 xl:pt-24 pt-12 ">
        <nav className="self-start underline">
          <Link href={"/blog"}>Blog</Link> | {post.categories[0]} | Post{post.id}
        </nav>
        <h1>{post.h1}</h1>
        <p>{post.intro}</p>
        <h2>{post.h21}</h2>
        <p>{post.p1}</p>
        <h2>{post.h22}</h2>
        <p>{post.p2}</p>
        <h2>{post.h23}</h2>
        <p>{post.p3}</p>
                 

      </main>
      </>
    )
  }