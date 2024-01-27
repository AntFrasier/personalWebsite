
import { DbImage } from "@prisma/client"
import Image from "next/image"


function ImageCard( {imageUrl, imageAlt, imageName} : {imageUrl:string, imageAlt?:string, imageName?:string}) {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-2 w-[150px] h-[150px] bg-white border border-gray-200 rounded-lg shadow focus:bg-blue hover:bg-blue-200">
        
        <Image 
            className="m-auto"
            src={imageUrl}
            width={100}
            height={100}
            alt={imageAlt? imageAlt : "alt image"}/>
            <p className="text-xs">{imageName ? imageName : 'No Name'}</p>
    </div>
    
    </>
  )
}

export default ImageCard