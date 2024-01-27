import { utapi } from "./server/uploadthing";

//todo prtotect this route
export async function changeUploadThingsImageName ( key: string, name:string) {
    const result = await utapi.renameFile({fileKey : key, newName: name});
     
    console.log(result);
    return result
}

