import { utapi } from "./server/uploadthing";

//todo prtotect this route
export async function deleteUploadThingsImage ( key: string) {
    const result = await utapi.deleteFiles(key);
     
    console.log(result);
    return result
}

