import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import DeleteImageModal from './DeleteImageModal';
import ChangeNameModal from './ChangeNameModal';
import AddImageModal from './form/AddImageModal';
import ImagesPreview from './ImagesPreview';

function ManageImage({image, setHasToRefresh} : {image : {key:string, url:string}, setHasToRefresh : Dispatch<SetStateAction<boolean>>}) {
    const [nameModal, setNameModal] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [imageModal, setImageModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center jutsify-start pt-6">      
        <div className="flex flex-col flex-wrap realtive gap-6 items-start bg-gray-50 p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <h3>Modifier image</h3>
            <div className="flex flex-row flex-wrap items-center gap-6">
                <Image
                src={image.url}
                width={250}
                height={250}
                alt='image à modifer'
                />
            <div className="flex flex-col">
                <p>Key : {image.key}</p>
                <p>url : {image.url}</p>
                <div className="flex flex-row justify-evenly p-6">
                    <button className="btn-secondary" type ="button" onClick={ () => setDeleteModal(true)}>Delete</button>
                    <button className="btn-secondary" type ="button" onClick={ () => setNameModal(true)}>Change Name</button>
                    <button className="btn-secondary" type ="button" onClick={ () => setImageModal(true)}>Push to Db</button>
                </div>
                {nameModal? <ChangeNameModal setHasToRefresh = {setHasToRefresh} setModal={setNameModal} image= {image} /> : null}
                {deleteModal? <DeleteImageModal setModal ={setDeleteModal} setHasToRefresh = {setHasToRefresh} image = {image}/> : null}
                {imageModal? <AddImageModal setImageModal ={setImageModal} givenImage = {image}/> : null}
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default ManageImage