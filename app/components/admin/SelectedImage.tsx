import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import { DbImage } from '@prisma/client'
import Image from 'next/image'
import ImageCard from '../blogComponent/ImageCard'

export default function SelectedImage({imageId, size} : {imageId: number, size?:number }) {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<DbImage | undefined>(undefined)

    useEffect( () => {
        console.log("the image id passed : " , imageId)

        async function getImageById (imageId : number) {
            setLoading(true)
            try {
                const data = JSON.stringify({imageId : imageId})
                const result = await fetch("/api/get-image-by-id" , {
                method : "POST",
                headers: { 'Content-Type': 'application/json' },
                body : data
            })
            const Myimage = await result.json()
            console.log("selected image : ", Myimage)
            setImage(Myimage.body)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        if(imageId != undefined) getImageById(imageId)
    },[imageId])

  return (
    <div className='flex flex-col items-center justify-center relative'>
        <div className='absolute bg-blur'>
            {loading && <LoadingSpinner /> }
        </div>
        <div>
            {image? (
                <ImageCard 
                    imageUrl={image.url} 
                    imageName={image.name_fr} 
                    imageAlt={image.alt_fr} 
                    size={size || 600} />

                 
                ) : (
                <ImageCard      
                    imageUrl={"/img/noImageFallBack.svg"} 
                    imageName={"No Image selected"} 
                    imageAlt={"No Image selected"} 
                    size={size || 600} />
                )
            }
        </div>
    </div>
  )
}
