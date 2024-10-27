import { createUploadthing } from "uploadthing/server";
import type { FileRouter } from "uploadthing/server";


const up = createUploadthing();

export const UploadRouter = {
    imageUploader: up({ image: { maxFileSize: "4MB" } })
        .onUploadComplete(async () => {
        }),
} satisfies FileRouter;

export type UploadRouter = typeof UploadRouter;
