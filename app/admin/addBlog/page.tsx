"use client";
 
import { SyntheticEvent, useEffect, useState } from "react";
import { UploadButton } from "../../../lib/uploadthing";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { Categorie, Post } from "@prisma/client";
import AddCategorie from "@/app/components/admin/AddCategorie";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import "@uploadthing/react/styles.css";

const AddBlog = () => {
    const [blogObject, setBlogObject] =  useState<Post | null>(null);
    const [addCategorie, setAddcategorie] = useState<boolean>(false)
    const [image, setImage] = useState<UploadFileResponse<{
        uploaded: any, 
        url:any;
    }>[]>([])
    const [loadingImage, setLoadingImage] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [draft, setDraft] = useState<boolean>(true)
    const [h1_fr, setH1_fr] = useState<string>("")
    const [h1_en, setH1_en] = useState<string>("")
    const [name_fr, setName_fr] = useState<string>("")
    const [name_en, setName_en] = useState<string>("")
    const [title_fr, setTitle_fr] = useState<string>("")
    const [title_en, setTitle_en] = useState<string>("")
    const [slug, setSlug] = useState<string>("")
    const [desc_fr, setDesc_fr] = useState<string>("")
    const [desc_en, setDesc_en] = useState<string>("")
    const [metaDesc_fr, setMetaDesc_fr] = useState<string>("")
    const [metaDesc_en, setMetaDesc_en] = useState<string>("")
    const [content_fr, setContent_fr] = useState<string>("")
    const [content_en, setContent_en] = useState<string>("")
    const [mainImageUrl, setMainImageUrl] = useState<string>("")
    const [thumbImageUrl, setThumbImageUrl] = useState<string>("")
    const [categorie, setCategorie] = useState<Categorie>()
    const [categories, setCategories] = useState<Categorie[]>()

    const router = useRouter();

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
    },[addCategorie])

    const saveToDb = async (event:SyntheticEvent) => {
        setLoading(true)
        console.log("the event :", event)
        // alert('An essay was submitted: ' + draft);
        event.preventDefault();
        try {
            const body = { 
                name_fr:  name_fr? name_fr : name_en,   
                name_en:  name_en? name_en : name_fr,   
                draft : draft,    
                categorieId : categorie?.id,       
                title_fr : title_fr? title_fr : title_en,        
                title_en : title_en? title_en : title_fr,        
                description_fr : desc_fr? desc_fr : desc_en,  
                description_en : desc_en? desc_en : desc_fr,  
                metaDescription_fr : metaDesc_fr? metaDesc_fr : metaDesc_en,  
                metaDescription_en : metaDesc_en? metaDesc_en : metaDesc_fr,  
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
            setLoading(false)
            router.push(`/admin/blog/${data.body.slug}`)
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <main className="flex flex-col w-full justify-start items-left pb-2"> {/* px-8 md:px-24*/}
            <h1> Ajouter un Post de Blog !</h1>
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
                <div>
                    <UploadButton
                        onUploadBegin={() => setLoadingImage(true)}
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                        // Do something with the response
                        if (res) {
                            setImage(res)
                            setMainImageUrl(res[0]?.url)
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
                </div>
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
                    <div className="flex flex-row gap-3 pl-2  b-2">
                        <select 
                            name="categorie"
                            id="select-categorie"
                            onChange={ (e) => {
                                let categorie = categories?.find( (categorie) => categorie.id.toString() == e.target.value)
                                console.log("selected categorie : ",categorie)
                                setCategorie(categorie)
                                }
                            }>
                            <option key = {"umpty"} value={"default"}>Choisir une categorie</option>
                            {categories?.map( (cat) => {
                                console.log(cat)
                                return <option key = {cat.id} value={cat.id}>{cat.name_fr}</option>
                            })}
                            
                            
                        </select>
                        <button className="border-2 rounded-full w-[35px] h-[35px] aspect-square hover:border-success"type="button" onClick={() => setAddcategorie(true)}> + </button>
                        {addCategorie ? <AddCategorie setAddCategorie={setAddcategorie}/> : null}
                        {/* */}
                    </div> 
                    <label>Slug</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="slug" placeholder="Slug (URI)" onChange={ (e) => setSlug(e.target.value) }></input>
                        </div>
                    </div>

                    <label>Meta Titre</label>
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
                    <label>Name</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="name_fr" placeholder="le nom du poste fficher dans le preview" onChange={ (e) => setTitle_fr(e.target.value) }></input>
                            <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">FR</span>
                        </div>
                        <div className=" flex flex-grow relative">
                        <input className="border-2 flex-grow rounded-md p-1 m-2"type="text" id="name_en" placeholder="the name display in preview" onChange={ (e) => setTitle_en(e.target.value)}></input>
                        <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">EN</span>
                        </div>
                    </div>
                    <label>Meta Description</label>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="metaDescription_fr" placeholder="La meta description" onChange={ (e) => setDesc_fr(e.target.value)}></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="metaDescription_en" placeholder="the Meta descriptinon" onChange={ (e) => setDesc_en(e.target.value)}></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                        <label>Description courte</label>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_fr" placeholder="La description courte pour le preview" onChange={ (e) => setDesc_fr(e.target.value)}></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_en" placeholder="the short descriptinon for preview" onChange={ (e) => setDesc_en(e.target.value)}></textarea>
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
                {loading? <LoadingSpinner /> : null }
            </form>
        </main>
    )
}

export default AddBlog;