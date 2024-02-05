import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function ManagingCard({name, listUrl, addUrl} : {name:string, listUrl:string, addUrl:string}) {
  return (
    <div className="flex flex-col w-full max-w-md p-4 items-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3>Manage {name}</h3>
        <Image 
            src="/img/default-add-blog.jpeg"
            width={150}
            height={150}
            alt="default add blog image"/>
        <div className=" flex flex-row items-center gap-3 pt-3">
            <Link href={listUrl}>
                <button type="button" className="btn-secondary portfolio hover-underline "><b>List</b></button>
            </Link>
            <Link href={addUrl}>
                <button type="button" className="btn-secondary portfolio hover-underline "><AddIcon /></button>
            </Link>
        </div>
    </div>
  )
}

export default ManagingCard