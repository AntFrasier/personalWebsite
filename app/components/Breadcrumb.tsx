import Link from 'next/link'
import React from 'react'

function Breadcrumb({links}: {links : {slug:string, name:string}[]}) {
  return (
    <ul id="breadcrumb" className='flex flex-row text-sm pt-3 '>
        <li>
            <Link className="hover:underline" href={`/${links[0].slug}`} >{links[0].name}</Link>
        </li>
        {links.slice(1).map ( (link) => {
            return (
                <li key={link.slug}>
                    <span>{"\u00A0"}| </span> {/*unberakable space befor | */}
                    <Link className="hover:underline" href={`/${link.slug}`} >{link.name}</Link>
                </li>
            
            )
        })
        }
    </ul>
  )
}

export default Breadcrumb