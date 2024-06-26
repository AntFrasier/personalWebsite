import { NextRequestWithAuth } from "next-auth/middleware";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from "next-auth";

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log("error", err);
    console.log("cause", err.cause);
    return {
      message: err.message,
    };
  },
});
 
//const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await getServerSession(authOptions)
      const user = session?.user;
      if (!user || user.role != 'admin') throw new Error("Unauthorized");
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { name: user.name };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.name);
 
      console.log("file url", file.url);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploaded: metadata.name , url : file.url};
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;

