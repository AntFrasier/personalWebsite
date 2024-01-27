import { utapi } from "./server/uploadthing";

type ListFilesOptions = {
    limit?: number; // The maximum number of files to return
    offset?: number; // The number of files to skip
  };
export async function getUploadThingsAllImages (option : { limit?: number, offset? :number}) {
    const files = await utapi.listFiles(option);
     
    console.log(files);
    return files
}

export async function getUploadThingsAllImagesUrl(urls:string[]) {
    const multipleUrls = await utapi.getFileUrls(urls)
    console.log(multipleUrls)
    return multipleUrls
}
