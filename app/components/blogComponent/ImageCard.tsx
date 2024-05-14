
import { DbImage } from "@prisma/client"
import Image from "next/image"


function ImageCard( {imageUrl, imageAlt, imageName, size} : {imageUrl:string, imageAlt?:string, imageName?:string, size?:number}) {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-2 min-w-[150px] min-h-[150px] bg-blue-50 border border-gray-100 rounded-lg shadow focus:bg-blue hover:bg-blue-200">
        
        <Image 
            className="m-auto"
            src={imageUrl}
            width={size || 100}
            height={size ||100}
            alt={imageAlt? imageAlt : "alt image"}/>
            <p className="text-xs">{imageName ? imageName : 'No Name'}</p>
    </div>
    
    </>
  )
}

export default ImageCard