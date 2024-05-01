"use client";

import FormHeader from "@/app/components/admin/form/FormHeader";
import InputText from "@/app/components/admin/form/InputText";
import { useForm, SubmitHandler } from "react-hook-form"
import { Categorie, Post } from "@prisma/client"
import ImagesPreview from "@/app/components/admin/ImagesPreview";
import InputTextArea from "@/app/components/admin/form/InputTextArea";
import InputSelect from "@/app/components/admin/form/InputSelect";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AddCategorie from "@/app/components/admin/AddCategorie";
import { useRouter } from "next/navigation";


// type Inputs = typeof {Post} 
// import { SyntheticEvent, useEffect, useState } from "react";
// import { UploadButton } from "../../../lib/uploadthing";
// import Image from "next/image";
// import { UploadFileResponse } from "uploadthing/client";
// import { Categorie, Post } from "@prisma/client";
// import AddCategorie from "@/app/components/admin/AddCategorie";
// import { useRouter } from "next/navigation";
// import LoadingSpinner from "@/app/components/LoadingSpinner";
// import "@uploadthing/react/styles.css";
// import FormHeader from "@/app/components/admin/form/FormHeader";
// // import ImagesPreview from "@/app/components/admin/ImagesPreview";

const AddBlog = ({searchParams} : {searchParams : Post}) => {
    const {
        register,
        handleSubmit,
        formState:{errors, isValid},
        setValue,
        
    } = useForm<Post>()
    const [addCategorie, setAddCategorie] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<Categorie[]>()
    const router = useRouter();
    const givenBlog : Post | undefined = searchParams
    console.log("givenBlog : ", givenBlog)
    console.log("searchParams : ", searchParams)

    const saveToDb = async (data:Post) => {
        setLoading(true)
        try {
            const body = data
            let apiUrl : string = "";
            if (Object.keys(givenBlog).length == 0) {
                apiUrl = "/api/protected/create-blog-post"
            } else  apiUrl = "/api/protected/modif-blog-post"
            const result = await fetch(`${apiUrl}`, {
                method : "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (result.status == 200) router.push("/admin/adminBlogPost")

        }catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    const onSubmit: SubmitHandler<Post> = (data) => {
        console.log(data)
        saveToDb(data)
    }
    useEffect ( () => {
        if (givenBlog) {
            setValue("id", givenBlog.id)
            setValue("name_fr", givenBlog.name_fr)
            setValue("name_en", givenBlog.name_en)
            setValue("h1_fr", givenBlog.h1_fr)
            setValue("h1_en", givenBlog.h1_en)
            setValue("categorieId", givenBlog.categorieId)
            setValue("content_en", givenBlog.content_en)
            setValue("content_fr", givenBlog.content_fr)
            setValue("description_en", givenBlog.description_en)
            setValue("description_fr", givenBlog.description_fr)
            setValue("mainImageId", givenBlog.mainImageId)
            setValue("mainImageUrl", givenBlog.mainImageUrl)
            setValue("thumbImageId", givenBlog.thumbImageId)
            setValue("thumbImageUrl", givenBlog.thumbImageUrl)
            setValue("metaDescription_en", givenBlog.metaDescription_en)
            setValue("metaDescription_fr", givenBlog.metaDescription_fr)
            setValue("slug", givenBlog.slug)
            setValue("title_en", givenBlog.title_en)
            setValue("title_fr", givenBlog.title_fr)        
        }
    },[givenBlog])
    
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
        getCategories();
    },[addCategorie])

    const updateImages = async () => {
        console.log("Updating IMages ...")
        try {
            const result = await fetch("/api/protected/refreshUTImages", {method : "GET"})
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="flex flex-col w-full justify-start pb-2"> {/* px-8 md:px-24*/}
            {Object.keys(givenBlog).length != 0 ? <FormHeader title = {`Modifier Le post ${givenBlog.name_fr}`} url = {"/admin/adminBlogPost"} /> :<FormHeader title = {"Ajouter un post de blog"} url = {"/admin/adminBlogPost"} /> }
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
                <h3 className="text-xl">Images</h3> 
                <button type="button" className="btn-secondary" onClick={() => updateImages()}>Refresh</button>
                <ImagesPreview setValue={setValue} name="mainImageUrl" apiRoute = "/api/getAllImages"/>
                <InputText 
                            label="Image principale" 
                            name="mainImageUrl" 
                            lang={null}
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                <input type="hidden" name="mainImageId" {...register} />
                <ImagesPreview setValue={setValue} name="thumbImageUrl" apiRoute = "/api/getAllImages"/>
                <InputText 
                            label="Thumbnail image" 
                            name="thumbImageUrl" 
                            lang={null}
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                <input type="hidden" name="thumbImageId" {...register} />
            </div>
            <div className="flex flex-col w-full max-w-screen-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl">Contenue</h3>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="">
                        <InputText 
                            label="Nom du Post" 
                            name="name_fr" 
                            lang="fr" 
                            register = {register}
                            required = {true}  
                            errors = {errors}/>
                </div>
                <div className="">
                        <InputText 
                            label="Post Name" 
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
export default AddBlog;