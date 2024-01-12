"use client";
 
import { ReactEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { UploadButton } from "../../../lib/uploadthing";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { PrismaClient } from "@prisma/client";
import { BlogPost } from "@/blogTypes";
import Router from "next/router";

const AddBlog = () => {
    const [blogObject, setBlogObject] =  useState<BlogPost | null>(null);
    const [image, setImage] = useState<UploadFileResponse<{
        uploaded: any, 
        url:any;
    }>[]>([])
    const [loadingImage, setLoadingImage] = useState<boolean>(false)
    const [draft, setDraft] = useState<boolean>(true)
    const [h1_fr, setH1_fr] = useState<string>("")
    const [h1_en, setH1_en] = useState<string>("")
    const [title_fr, setTitle_fr] = useState<string>("")
    const [title_en, setTitle_en] = useState<string>("")
    const [desc_fr, setDesc_fr] = useState<string>("")
    const [slug, setSlug] = useState<string>("")
    const [desc_en, setDesc_en] = useState<string>("")
    const [content_fr, setContent_fr] = useState<string>("")
    const [content_en, setContent_en] = useState<string>("")
    const [mainImageUrl, setMainImageUrl] = useState<string>("")
    const [thumbImageUrl, setThumbImageUrl] = useState<string>("")
    const [categorie, setCategorie] = useState<{id:number, name_fr:string, name_en:string}>()
    const [categories, setCategories] = useState<{id:number, name_fr:string, name_en:string}[]>()


    useEffect( () => {
        const getCategories = async () => {
            const res = await fetch("/api/getCategories",
            {method: "GET" })
            const data = await res.json()
            console.log(data)
            setCategories(data.body)
        }
        try {
            getCategories()
        } catch (err) {
            console.log("error while fetching all catégories : ", err)
        }
    },[])

    const saveToDb = async (event:SyntheticEvent) => {
        console.log("the event :", event)
        // alert('An essay was submitted: ' + draft);
        event.preventDefault();
        try {
            const body = { 
                name:  h1_fr? h1_fr : h1_en,   
                draft : draft,    
                categorie : categorie?.id,       
                title_fr : title_fr? title_fr : title_en,        
                title_en : title_en? title_en : title_fr,        
                description_fr : desc_fr? desc_fr : desc_en,  
                description_en : desc_en? desc_en : desc_fr,  
                h1_fr :h1_fr? h1_fr : h1_en,           
                h1_en : h1_en? h1_en : h1_fr,   
                slug : slug,        
                content_fr : content_fr ? content_fr : content_en,       //html
                content_en : content_en? content_en : content_fr,       //html
                thumbImageUrl : thumbImageUrl,   
                mainImageUrl : mainImageUrl,   
            };
            const res = await fetch('/api/create-blog-post', { //cant do a server side function because i'm in a use client component
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            });
            const data = await res.json()
            Router.push(`/adminBlogPost/${data.body.slug}`)
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <main className="flex flex-col w-full justify-start items-left m-10 pl-[250px] pb-2"> {/* px-8 md:px-24*/}
            <h1> Ajoutez un Post de Blog !</h1>
            <form onSubmit={saveToDb}>
                <label>ajouter une image </label>
                {image.length ?( 
                <>
                    <h3>
                        {image[0].name}
                    </h3>
                    <Image 
                    src={image[0].url}
                    alt="test"
                    unoptimized
                    width={250}
                    height={141}
                    />
                </>
                 ) : (
                
                <UploadButton
                    onUploadBegin={() => setLoadingImage(true)}
                    className="btn-secondary"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                    // Do something with the response
                    if (res) {
                        setImage(res)
                        setLoadingImage(false)
                        console.log("res from upload thing", res)
                    }

                    console.log("Files: ", res);
                    //   alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                    setLoadingImage(false)
                    }}
                    />
                    )}
                    <div className="flex flex-col">
                    <label>Etat</label>
                    <div className="flex flex-row gap-3 pl-2">
                        <input 
                            type="checkbox" 
                            id="draft" 
                            checked={draft}
                            onChange={ () => setDraft(!draft)}
                            />
                        {draft ? <p>Brouillon</p> : <p>Publié</p>}
                    </div> 
                    <label>Catégorie</label>
                    <div className="flex flex-row gap-3 pl-2 w-[150px] b-2">
                        <select 
                            name="categorie"
                            id="select-categorie"
                            onChange={ (e) => {
                                let categorie = categories?.find( (categorie) => categorie.id.toString() == e.target.value)
                                console.log("selected categorie : ",categorie)
                                setCategorie(categorie)}}
                            >
                            <option key = {"umpty"} value={"default"}>Choisir une categorie</option>
                            {categories?.map( (cat) => {
                                console.log(cat)
                                return <option key = {cat.id} value={cat.id}>{cat.name_fr}</option>
                            })}
                            
                        </select>
                    </div> 
                    <label>Slug</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="slug" placeholder="Slug (URI)" onChange={ (e) => setSlug(e.target.value) }></input>
                        </div>
                    </div>

                    <label>Titre</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="title_FR" placeholder="le titre" onChange={ (e) => setTitle_fr(e.target.value) }></input>
                            <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">FR</span>
                        </div>
                        <div className=" flex flex-grow relative">
                        <input className="border-2 flex-grow rounded-md p-1 m-2"type="text" id="title_EN" placeholder="the title" onChange={ (e) => setTitle_en(e.target.value)}></input>
                        <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">EN</span>
                        </div>
                    </div>
                    <label>Meta Description</label>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_FR" placeholder="La meta description" onChange={ (e) => setDesc_fr(e.target.value)}></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_EN" placeholder="the Meta descriptinon" onChange={ (e) => setDesc_en(e.target.value)}></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                    <label>H1</label>
                    <div className="flex flex-row w-full gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="h1_FR" placeholder="le H1"  onChange={ (e) => setH1_fr(e.target.value) }></input>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2"type="text" id="h1_EN" placeholder="the H1" onChange={ (e) => setH1_en(e.target.value) }></input>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                    </div>
                    </div>
                    <label>Contenue</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className="flex flex-grow relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2"  rows={30} id="description_FR" placeholder="Le contenue du blog" onChange={ (e) => setContent_fr(e.target.value) }></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex flex-grow relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2"  rows={30} id="description_EN" placeholder="The Blog content" onChange={ (e) => setContent_en(e.target.value) }></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                        </div>
                <input type="submit" value="Submit" className="btn-secondary"/>
            </form>
        </main>
    )
}

export default AddBlog;