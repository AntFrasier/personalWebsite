'use client'

import FormHeader from "@/app/components/admin/form/FormHeader";
import InputText from "@/app/components/admin/form/InputText";
import { useForm, SubmitHandler } from "react-hook-form"
import { Categorie,  } from "@prisma/client"
import ImagesPreview from "@/app/components/admin/ImagesPreview";
import InputTextArea from "@/app/components/admin/form/InputTextArea";
import InputSelect from "@/app/components/admin/form/InputSelect";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AddCategorie from "@/app/components/admin/AddCategorie";
import { useRouter } from "next/navigation";
import { ToSavedPortfolio } from "@/lib/getPortfolios";
import AddStackToPortfolio from "@/app/components/admin/portfolio/AddStackToPortfolio";
import { ReturnedStack } from "@/lib/getAllStacks";
import SelectedImage from "@/app/components/admin/SelectedImage";

export default function AddPortfolioComponent  ({givenPortfolio} : {givenPortfolio : ToSavedPortfolio | null})  {
    const {
        register,
        handleSubmit,
        formState:{errors, isValid},
        setValue,
        getValues,
        watch,
    } = useForm<ToSavedPortfolio>()

    const [addCategorie, setAddCategorie] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingStacks, setLoadingStacks] = useState<boolean>(false)
    const [categories, setCategories] = useState<Categorie[]>()
    const [allStacks, setAllStacks] = useState<ReturnedStack[] | undefined>()
    const router = useRouter();

    const saveToDb = async (data:ToSavedPortfolio) => {
        setLoading(true)
        try {
            const body = data
            let apiUrl : string = "";
            console.log(body)
            if (givenPortfolio) {
            // if (givenPortfolio && Object.keys(givenPortfolio).length == 0) {
                apiUrl = "/api/protected/modif-portfolio"
            } else apiUrl = "/api/protected/create-portfolio"
            const result = await fetch(`${apiUrl}`, {
                method : "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (result.status == 200) router.push("/admin/portfolio")

        }catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    const onSubmit: SubmitHandler<ToSavedPortfolio> = (data) => {
        saveToDb(data)
    }
    useEffect ( () => {
        
        if (givenPortfolio) {
           
            setValue("id", givenPortfolio.id)
            setValue("name_fr", givenPortfolio.name_fr)
            setValue("name_en", givenPortfolio.name_en)
            setValue("h1_fr", givenPortfolio.h1_fr)
            setValue("h1_en", givenPortfolio.h1_en)
            setValue("categorieId", givenPortfolio.categorieId)
            setValue("content_en", givenPortfolio.content_en)
            setValue("content_fr", givenPortfolio.content_fr)
            setValue("description_en", givenPortfolio.description_en)
            setValue("description_fr", givenPortfolio.description_fr)
            setValue("metaDescription_en", givenPortfolio.metaDescription_en)
            setValue("metaDescription_fr", givenPortfolio.metaDescription_fr)
            setValue("slug", givenPortfolio.slug)
            setValue("title_en", givenPortfolio.title_en)
            setValue("title_fr", givenPortfolio.title_fr)        
            setValue("demoUrl", givenPortfolio.demoUrl)
            setValue("codeUrl", givenPortfolio.codeUrl)
            setValue("stacks", givenPortfolio.stacks)        
            setValue("mainImageId", givenPortfolio.mainImageId)        
            setValue("thumbImageId", givenPortfolio.thumbImageId)        
        }
    },[givenPortfolio])
    
    useEffect ( () => {
        const getCategories = async () => {
            try {
                const result = await fetch ("/api/getCategories", {method:"GET"})
                const data = await result.json()
                setCategories(data.body)
            } catch (error) {
                console.log(error)
            }
        }
        const allStacks = async () => {
            try {
                setLoadingStacks(true)
                const result = await fetch ("/api/get-all-stacks", {method:"GET"})
                const data = await result.json()
                setAllStacks(data.body)
            } catch (error) {
                console.log(error)
            } finally {
                setLoadingStacks(false)
            }
        }

        getCategories();
        allStacks();
    },[addCategorie])

    return (
        <div className="flex flex-col w-full justify-start pb-2"> {/* px-8 md:px-24*/}
            {givenPortfolio != undefined && Object.keys(givenPortfolio).length != 0 ? <FormHeader title = {`Modifier Le portfolio ${givenPortfolio.name_fr}`} url = {"/admin/adminPortfolio"} /> :<FormHeader title = {"Ajouter un portfolio"} url = {"/admin/adminPortfolio"} /> }
            <form className="flex flex-col items-center mt-9 gap-9 mx-9" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl w-full">Meta Data</h3>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="">
                        <InputText 
                            label="Titre fr" 
                            name="title_fr" 
                            lang="fr" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                    </div>
                    <div className="">
                        <InputText 
                            label="Title en" 
                            name="title_en" 
                            lang="en" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                    </div>
                    <div>
                        <InputTextArea 
                            label="Meta description fr" 
                            name="metaDescription_fr" 
                            lang="fr"
                            register = {register}
                            required = {true} 
                            errors = {errors}/>
                    </div>
                    <div className="">
                        <InputTextArea 
                            label="Meta description en" 
                            name="metaDescription_en" 
                            lang="en" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                    </div>
                 
                    <div className="">
                        <InputText 
                            label="Slug" 
                            name="slug" 
                            lang={null}
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <div className="flex-grow">
                            <InputSelect 
                                label="Categorie" 
                                name="categorieId" 
                                register = {register}
                                required = {true}  
                                errors = {errors}
                                options = {categories}/>  
                         </div>
                         <div>

                        <div className="border p-2 rounded-full bg-gray-200 justify-self-end ml-3">
                            <button type='button' onClick={() => setAddCategorie(true)}>
                                <AddIcon />
                            </button>
                        </div>
                         </div>
                    </div>
                {addCategorie? <AddCategorie setAddCategorie={setAddCategorie}/> : null}    
            </div>
            </div>
            <div className="flex flex-col w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 gap-3">
                <h3 className="text-xl">Stacks</h3> 
                <AddStackToPortfolio allStacks={allStacks} loading={loadingStacks} setValue = {setValue} getValues = {getValues} givenStacks={givenPortfolio? givenPortfolio.stacks : undefined}/>
                <div className="flex flex-row gap-3 justify-start content-start items-start justify-items-start">
                    {watch("stacks", getValues("stacks"))?.map ((stack) => (
                        <SelectedImage key={stack.id} imageId = {stack.imageId} size={50}/>
                    ))}
                </div>
                <input type="hidden" name="stacks" {...register} />
            </div>
            <div className="flex flex-col w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 gap-3">
                <h3 className="text-xl">Images</h3> 
                <ImagesPreview setValue={setValue} name="mainImageUrl" apiRoute = "/api/getAllImages"/>
                <input type="hidden" name="mainImageId" {...register} />
                <h4>Main Image :</h4>
                <SelectedImage imageId={watch("mainImageId", getValues("mainImageId"))} />
                <ImagesPreview setValue={setValue} name="thumbImageUrl" apiRoute = "/api/getAllImages"/>
                <h4>Thumbnail Image :</h4>
                <SelectedImage imageId={watch("thumbImageId", getValues("thumbImageId"))} />
                <input type="hidden" name="thumbImageId" {...register} />
            </div>
            <div className="flex flex-col w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl">Contenue</h3>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="">
                        <InputText 
                            label="Nom du Portfolio" 
                            name="name_fr" 
                            lang="fr" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="Portfolio Name" 
                            name="name_en" 
                            lang="en" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                </div>
                <div className="sm:col-span-2">
                    <InputTextArea 
                        label="Description courte" 
                        name="description_fr" 
                        lang="fr" 
                        register = {register}
                        required = {true}  
                        errors = {errors}/>
                </div>
                <div className="sm:col-span-2">
                    <InputTextArea 
                        label="Short description" 
                        name="description_en" 
                        lang="en" 
                        register = {register}
                        required = {true}  
                        errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="H1 fr" 
                            name="h1_fr" 
                            lang="fr" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="H1 en" 
                            name="h1_en" 
                            lang="en" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="Demo Url" 
                            name="demoUrl" 
                            lang={null}
                            register = {register}
                            required = {false}  
                            errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="Code Url" 
                            name="codeUrl" 
                            lang={null}
                            register = {register}
                            required = {false}  
                            errors = {errors}/>
                </div>
                <div className="sm:col-span-2">
                    <InputTextArea 
                        label="Contenue" 
                        name="content_fr" 
                        lang="fr" 
                        register = {register}
                        required = {true}  
                        errors = {errors}/>
                </div>
                <div className="sm:col-span-2">
                    <InputTextArea 
                        label="Content" 
                        name="content_en" 
                        lang="en" 
                        register = {register}
                        required = {true}  
                        errors = {errors}/>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mt-6">
                <input type="submit" value="Sauvegarder" className="btn-secondary cursor-pointer self-start"/>
            </div>
            </div>

            </form>
        </div>
    )
}
