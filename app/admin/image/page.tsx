'use client'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import DeleteModal from '@/app/components/admin/DeleteModal';
import ImagesPreview from '@/app/components/admin/ImagesPreview'
import ManageImage from '@/app/components/admin/ManageImage';
import MyUploadButton from '@/app/components/admin/UploadImage';
import FormHeader from '@/app/components/admin/form/FormHeader'
import ImageCard from '@/app/components/blogComponent/ImageCard';
import React, { useEffect, useState } from 'react'

function ImageList() {
    const [images,setImages] = useState<{key : string, url:string}[]>([]);
    const [selectImage,setSelectImage] = useState<{key : string, url:string}>();
    const [loading, setLoading] = useState<boolean>(false)
    const [hasToRefresh, setHasToRefresh]= useState<boolean>(true)


    const updateImages = async () => {
        console.log("Updating IMages ...")
        setLoading(true)
        try {
            const result = await fetch("/api/protected/refresh-UT-Images", {method : "GET"})
            const data = await result.json()
            console.log(data.body)
            setImages(data.body)
            setHasToRefresh(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        console.log("has to refresh")
        hasToRefresh ? updateImages() : null
        setSelectImage(undefined)
        
    }, [hasToRefresh])

  return (
    <div className="flex flex-col items-start min-h-screen w-full">
        <div className="flex flex-col w-full justify-start pb-2">
            <FormHeader title = {"Management des images"} url = {"/admin/adminBlogPost"} />
        </div>
        <div className="flex flex-col items-center jutsify-start w-full">

            
            <div className="flex flex-col flex-wrap realtive w-full gap-6 items-start bg-gray-50 p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <h3>Image sur UploadThing</h3>
            <div className="flex flex-row flex-wrap items-center gap-6">
                {loading? (<LoadingSpinner /> ):( null)}
                {images?.length &&  images?.length > 0 ? ( images.map( (image) => <button key={image.key} type="button" onClick={() => setSelectImage(image)} ><ImageCard key={image.key} imageUrl={image.url} /></button>)):( null)}
                

            </div>

            <button type='button' className='btn-secondary' onClick={() => updateImages()}>Update images from UploadThings</button>
            <MyUploadButton />
        </div>

        {selectImage? <ManageImage image = {selectImage} setHasToRefresh = {setHasToRefresh}/> : null }
        <ImagesPreview apiRoute = "/api/getAllImages"/>
        
    </div>
    </div>
  )
}

export default ImageList