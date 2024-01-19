import React, { useEffect, useState } from 'react'
import ImageCard from '../blogComponent/ImageCard';
import { DbImage } from '@prisma/client';
import AddImage from './AddImage';
import AddImageModal from './form/AddImageModal';


interface Images {   
    id: number;
    name_fr: string;
    name_en: string;
    alt_fr: string;
    alt_en: string;
    url: string;}
function ImagesPreview({setValue, name}:{setValue? : any, name?:string}) {
    const [images, setAllImages] = useState<Images[]>()
    const [imageModal, setImageModal] = useState<boolean>(false)
    
    useEffect ( ()=> {
        const getImages = async () => {
            const result = await fetch ("/api/getAllImages" , {method : "GET"})
            const data = await result.json()
            console.log("images" , data.dody)
            setAllImages(data.body)
        }
        getImages();
    },[])

    const defaultImage: DbImage = {
        id:-1,
        name_fr: "image par default",
        name_en: "default image",
        alt_fr: "image de blog par default",
        alt_en: "default blog image",
        url: "/img/blog/Blog_default_thumbnail.jpeg"

    }

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
        
        setValue(`${name}`, `${url}`)
    }


  return (
    <div className="flex flex-row realtive gap-6 items-center bg-gray-50 h-[200px] p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        {images?.length &&  images?.length > 0 ? ( images.map( (image) => <button key={image.id} type="button" onClick={() => setTheValues(image.id, image.url)} ><ImageCard key={image.id} image={image} /></button>)):( <ImageCard image={defaultImage} />)}
        <AddImage setImageModal={setImageModal}/>
        {imageModal ? <AddImageModal setImageModal={setImageModal}/> : null}
    </div>
  )
}

export default ImagesPreview