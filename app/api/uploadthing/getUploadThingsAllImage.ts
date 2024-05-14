import { utapi } from "./server/uploadthing";

type ListFilesOptions = {
    limit?: number; // The maximum number of files to return
    offset?: number; // The number of files to skip
  };
export async function getUploadThingsAllImages (option : { limit?: number, offset? :number}) {
    const files = await utapi.listFiles(option);
    return files
}

export async function getUploadThingsAllImagesUrl(urls:string[]) {
    const multipleUrls = await utapi.getFileUrls(urls)
    return multipleUrls
}
