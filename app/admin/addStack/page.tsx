"use client";

import FormHeader from "@/app/components/admin/form/FormHeader";
import InputText from "@/app/components/admin/form/InputText";
import { useForm, SubmitHandler } from "react-hook-form"
import { Stack } from "@prisma/client"
import ImagesPreview from "@/app/components/admin/ImagesPreview";
import InputTextArea from "@/app/components/admin/form/InputTextArea";
import InputSelect from "@/app/components/admin/form/InputSelect";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AddCategorie from "@/app/components/admin/AddCategorie";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface GivenStack {
    id : number;
    name : string;
    stackUrl: string;
    imageId : number;
}

const AddStack = ({searchParams} : {searchParams : GivenStack}) => {
    const {
        register,
        handleSubmit,
        formState:{errors, isValid},
        setValue,
        
    } = useForm<GivenStack>()
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const givenStack : GivenStack | undefined = searchParams
const saveToDb = async (data : GivenStack) => {
    try {
        setLoading(true)
        let apiUrl : string = "";
        if (Object.keys(givenStack).length == 0) {
            apiUrl = "/api/protected/add-stack"
        } else  apiUrl = "/api/protected/modif-stack"
        const result = await fetch(`${apiUrl}`, {
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(data)
        })
        console.log(result)
        if (result.status == 200) router.push("/admin/adminPortfolio")

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
 

    const updateImages = async () => {
        console.log("Updating IMages ...")
        try {
            const result = await fetch("/api/getAllImages", {method : "GET"})
        } catch (err) {
            console.log(err)
        }
    }
    useEffect ( () => {
        console.log(givenStack)
        if (givenStack) {
            setValue("id", givenStack.id)
            setValue("imageId", givenStack.imageId)
            setValue("name", givenStack.name)
            setValue("stackUrl", givenStack.stackUrl)
        }
        updateImages()
    },[givenStack])

    return (
        <div className="flex flex-col w-full justify-start pb-2"> {/* px-8 md:px-24*/}
            <FormHeader title = { (Object.keys(givenStack).length == 0) ? `Créer une Stack` : 'Modifier la Stack'} url = {"/admin/portfolio"} />
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
                <button type="button" className="btn-secondary" onClick={() => updateImages()}>Refresh</button>
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
            <div className="w-full max-w-screen-xl mt-6">
                <input type="submit" value="Sauvegarder" className="btn-secondary cursor-pointer self-start"/>
            </div>}
            </div>

            </form>
        </div>
    )
}
export default AddStack;