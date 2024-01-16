'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import LoadingSpinner from '../../LoadingSpinner'
import { UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '@/app/api/uploadthing/core'


function AddImageModal({setImageModal} : {setImageModal:Dispatch<SetStateAction<boolean>>}) {
    const [loading, setLoading] = useState<boolean>()
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[1024px] h-full px-24 ml-24 m-24 bg-gray-100 rounded-3xl p-3">
                <h3>
                    Ajouter une image
                </h3>
                <div className="h-full self-center align-center">
                    <UploadDropzone<OurFileRouter>
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        alert("Upload Completed");
                        }}
                        onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                        }}
                        onUploadBegin={(name) => {
                        // Do something once upload begins
                        console.log("Uploading: ", name);
                        }}
                    />
                </div>
                <div className="flex self-center gap-3">
                    <button className="btn-secondary w-36 hover:bg-success" type="button" onClick={() => null} >Confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setImageModal(false)} >Annuler</button>
                </div>
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
  )
}

export default AddImageModal