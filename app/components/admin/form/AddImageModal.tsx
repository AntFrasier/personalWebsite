'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import LoadingSpinner from '../../LoadingSpinner'
import { EndpointMetadata, UploadDropzone } from '@uploadthing/react'
import { OurFileRouter } from '@/app/api/uploadthing/core'
import SimpleInputText from './SimpleInputText'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


function AddImageModal({setImageModal} : {setImageModal:Dispatch<SetStateAction<boolean>>}) {
    const [loading, setLoading] = useState<boolean>()
    const [name_fr, setName_fr] = useState<string>("")
    const [name_en, setName_en] = useState<string>("")
    const [alt_fr, setAlt_fr] = useState<string>("")
    const [alt_en, setAlt_en] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [errors, setErrors] = useState<boolean>(true)
    const router = useRouter();
    const [previewImage, setPreviewImage] = useState(null)
    

    const saveImageTodB = async () => {
       

        setLoading(true)
        try {
        const body = {
            name_fr: name_fr,
            name_en: name_en,
            alt_fr: alt_fr,
            alt_en: alt_en,
            url: url,
        }
        const result = await fetch("/api/save-image", { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            
        });
        if (result.status == 200) {
            
            router.refresh();
            setImageModal(false)
        }
        
        } catch (err) {
            console.log (err)
        } finally {
            setLoading(false)
        }
    }
    
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
            <div className="flex flex-col m-auto w-[1024px] px-24 my-auto bg-blue-50 rounded-3xl p-3">
                <h3>
                    Ajouter une image
                </h3>
                
                    <SimpleInputText label='Nom' name={name_fr} setState = {setName_fr} setErrors={setErrors} lang="fr" required={true} />
                    <SimpleInputText label='Name' name={name_en} setState = {setName_en} setErrors={setErrors} lang="en" required={true} />
                    <SimpleInputText label='Alt fr' name={alt_fr} setState = {setAlt_fr} setErrors={setErrors} lang="fr" required={true} />
                    <SimpleInputText label='Alt en' name={alt_en} setState = {setAlt_en} setErrors={setErrors} lang="en" required={true} />
                    <SimpleInputText label='Url' name={url} setState = {setUrl} setErrors={setErrors} lang={null} required={true} />
                <div className="h-full self-center align-center mt-6">
                    {url == "" ? (
                    <UploadDropzone<OurFileRouter, any>
                        endpoint="imageUploader"
                        
                        
                        onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        // alert("Upload Completed");
                        setUrl(res[0].url)
                        
                        }}
                        onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                        }}
                        onUploadBegin={(name) => {
                        // Do something once upload begins
                        console.log("Uploading: ", name);
                        }}
                    /> ) : (
                        <Image 
                            src={url} width={150} height={150} alt = "" />
                    )}
                </div>

                <div className="flex self-center gap-3 mt-6">
                    
      
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => saveImageTodB()} >confirmer</button>
                    <button className="btn-secondary w-36 hover:bg-warning" type="button" onClick={() => setImageModal(false)} >Annuler</button>
                </div>
               
                 {loading ? <LoadingSpinner /> : null}
            </div>
        </div>
  )
}

export default AddImageModal