import React from 'react'
import CloseIcon from "@mui/icons-material/Close"
import Link from 'next/link'

export default function FormHeader({title, url} :{title : string, url:string}) {
  return (
    <div className='flex flex-row items-center justify-between px-9 bg-white'>
        <h1>
            {title}
        </h1>
        <Link href = {url}>
            <CloseIcon />
        </Link>
    </div>
  )
}
