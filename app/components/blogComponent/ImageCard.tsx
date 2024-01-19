
import { DbImage } from "@prisma/client"
import Image from "next/image"


function ImageCard( {image} : {image:DbImage}) {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-2 w-[150px] h-[150px] bg-white border border-gray-200 rounded-lg shadow focus:bg-blue hover:bg-blue-200">
        
        <Image 
            className="m-auto"
            src={image.url}
            width={100}
            height={100}
            alt={image.alt_fr}/>
            <p className="text-xs">{image.name_fr}</p>
    </div>
    
    </>
  )
}

export default ImageCard