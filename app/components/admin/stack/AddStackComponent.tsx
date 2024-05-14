import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../LoadingSpinner'
import InputText from '../form/InputText'
import ImagesPreview from '../ImagesPreview'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { GivenStack } from '@/app/admin/addStack/page'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

function AddStackComponent({givenStack} : {givenStack : GivenStack | undefined}) {
    const {
        register,
        handleSubmit,
        formState:{errors, isValid},
        setValue,
        
    } = useForm<GivenStack>()
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    
    const deleteStack = async (givenStack : GivenStack) => {
        setLoading(true)
        try {
            const result = await fetch("/api/protected/delete-stack" , {
                method : "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({id : givenStack.id})
            })
            if (result.status == 200) {
                router.refresh()
                router.push("/admin/stacks")
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    const saveToDb = async (data : GivenStack) => {
        try {
            setLoading(true)
            let apiUrl : string = "";
            // if (Object.keys(givenStack).length == 0) {
            if (givenStack && Object.keys(givenStack).length === 0 || !givenStack) {
                apiUrl = "/api/protected/add-stack"
            } else  apiUrl = "/api/protected/modif-stack"
            const result = await fetch(`${apiUrl}`, {
                method : "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(data)
            })
            console.log(result)
            if (result.status == 200) {
                router.refresh()
                router.push("/admin/stacks")
            }

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
       
    const onSubmit: SubmitHandler<GivenStack> = (data) => {
        console.log(data)
        saveToDb(data)
    }

    useEffect ( () => {
        console.log("given stack : ", givenStack)
        if (givenStack) {
            setValue("id", givenStack.id)
            setValue("imageId", givenStack.imageId)
            setValue("name", givenStack.name)
            setValue("stackUrl", givenStack.stackUrl)
        }
        // updateImages()
       
    },[givenStack])

  return (
    <form className="flex flex-col items-center mt-9 gap-9 mx-9" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl w-full">Stack</h3>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="">
                        <InputText 
                            label="nom" 
                            name="name" 
                            lang={null} 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                    </div>
            </div>
            <div className="flex flex-col w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 gap-3">
                <h3 className="text-xl">Images</h3> 
                {/* <button type="button" className="btn-secondary" onClick={() => updateImages()}>Refresh</button> */}
                <ImagesPreview setValue={setValue} name="stackUrl" apiRoute = "/api/getAllImages"/>
                <InputText 
                            label="Image d'illustration" 
                            name="stackUrl" 
                            lang={null}
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                <input type="hidden" name="imageId" {...register} />
            </div>
            {loading ? <LoadingSpinner /> : 
            <div className="w-full flex gap-6 flex-row max-w-screen-xl mt-6">
                <input type="submit" value="Sauvegarder" className="btn-secondary cursor-pointer self-start"/>
                {(givenStack) && 
                    <button className="btn-secondary flex flex-row items-center justify-center" type='button' onClick={() => deleteStack(givenStack)}>
                        <span>Effacer</span>
                        <DeleteForeverIcon />
                    </button>}
            </div>}
            </div>

            </form>
  )
}

export default AddStackComponent