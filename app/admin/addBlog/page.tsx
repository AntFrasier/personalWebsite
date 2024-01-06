"use client";
 
import { ReactEventHandler, SyntheticEvent, useState } from "react";
import { UploadButton } from "../../../lib/uploadthing";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { PrismaClient } from "@prisma/client";
import { BlogPost } from "@/blogTypes";

const AddBlog = () => {
    const [blogObject, setBlogObject] =  useState<BlogPost | null>(null);
    const saveToDb = async (event:SyntheticEvent) => {
        console.log("the event :", event)
        // alert('An essay was submitted: ' + draft);
        event.preventDefault();
    }
    // const tags = await prisma?.tag.findMany()
    const [image, setImage] = useState<UploadFileResponse<{
        uploadedBy: any;
    }>[]>([])
    const [loadingImage, setLoadingImage] = useState<boolean>(false)
    const [draft, setDraft] = useState<boolean>(false)
    const [h1_fr, setH1_fr] = useState<string>("")
    const [h1_en, setH1_en] = useState<string>("")
    const [titre_fr, setTitre_fr] = useState<string>("")
    const [titre_en, setTitre_en] = useState<string>("")
    const [desc_fr, setDesc_fr] = useState<string>("")
    const [desc_en, setDesc_en] = useState<string>("")
    const [content_fr, setContent_fr] = useState<string>("")
    const [content_en, setContent_en] = useState<string>("")
    const [mainImageUrl, setMainImageUrl] = useState<string>("")
    const [thumbImageUrl, setThumbImageUrl] = useState<string>("")


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
                    <label>Titre</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="title_FR" placeholder="le titre"></input>
                            <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">FR</span>
                        </div>
                        <div className=" flex flex-grow relative">
                        <input className="border-2 flex-grow rounded-md p-1 m-2"type="text" id="title_EN" placeholder="the title"></input>
                        <span className=" btn-secondary absolute border-2 !p-1 !rounded-md top-2 right-2">EN</span>
                        </div>
                    </div>
                    <label>Meta Description</label>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_FR" placeholder="La meta description"></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2" maxLength={200} rows={4} id="description_EN" placeholder="the Meta descriptinon"></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                    <label>H1</label>
                    <div className="flex flex-row w-full gap-3">
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2" type="text" id="h1_FR" placeholder="le H1"></input>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className=" flex flex-grow relative">
                            <input className="border-2 flex-grow rounded-md p-1 m-2"type="text" id="h1_EN" placeholder="the H1"></input>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                    </div>
                    </div>
                    <label>Contenue</label>
                    <div className="flex flex-row w-full flex-wrap gap-3">
                        <div className="flex flex-grow relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2"  rows={30} id="description_FR" placeholder="Le contenue du blog"></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">FR</div>
                        </div>
                        <div className="flex flex-grow relative">
                            <textarea className="border-2 flex-grow rounded-md p-1 m-2"  rows={30} id="description_EN" placeholder="The Blog content"></textarea>
                            <div className=" btn-secondary absolute border-2 !p-1 !rounded-md bottom-2 right-2">EN</div>
                        </div>
                        </div>
                <input type="submit" value="Submit" className="btn-secondary"/>
            </form>
        </main>
    )
}

export default AddBlog;