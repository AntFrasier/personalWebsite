'use client'
import React, { useEffect, useState } from 'react'
import ImageCard from '../blogComponent/ImageCard';
import { DbImage } from '@prisma/client';
import AddImage from './AddButton';
import AddImageModal from './form/AddImageModal';
import AddButton from './AddButton';
import LoadingSpinner from '../LoadingSpinner';

interface Images {   
    id: number;
    name_fr: string;
    name_en: string;
    alt_fr: string;
    alt_en: string;
    url: string;}

function ImagesPreview({setValue, name, apiRoute}:{setValue? : any, name?:string, apiRoute:string}) {
    const [loading, setLoading] = useState(false)
    const [images, setAllImages] = useState<Images[]>()
    const [imageModal, setImageModal] = useState<boolean>(false)
    
    useEffect ( ()=> {
        const getImages = async () => {
            setLoading(true)
            const result = await fetch (`${apiRoute}` , {method : "GET"})
            const data = await result.json()
            console.log("images" , data.dody)
            setAllImages(data.body)
            setLoading(false)
        }
        getImages();
    },[imageModal, apiRoute])


    const setTheValues = (id :number, url:string) => {
        setValue(`${name}`, `${url}`)
        console.log(name)
        if (name == "thumbImageUrl") {
            console.log("thumb id", id)
            setValue("thumbImageId", id)
        }
        if (name == "mainImageUrl") {
         console.log("main image ", id)
            setValue("mainImageId", id)
        }
        if (name == "stackUrl") {
         console.log("stack image ", id)
            setValue("imageId", id)
        }
        
        setValue(`${name}`, `${url}`)
    }


  return (
    <div className="flex flex-row realtive flex-wrap gap-6 items-center bg-gray-50 min-h-[200px] p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        {images?.length &&  images?.length > 0 ? ( images.map( (image) => <button key={image.id} type="button" onClick={() => setTheValues(image.id, image.url)} ><ImageCard key={image.id} imageUrl={image.url} imageAlt={image.alt_fr} imageName={image.name_fr} /></button>)):( null )}
        {loading && <LoadingSpinner />}
        <AddButton setModal={setImageModal}/>
        {imageModal ? <AddImageModal setImageModal={setImageModal}/> : null}
    </div>
  )
}

export default ImagesPreview