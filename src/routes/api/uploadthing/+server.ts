import { env } from "$env/dynamic/private";
import { UploadRouter } from "$lib/server/uploadthing";
import { createRouteHandler } from "uploadthing/server";

const handlers = createRouteHandler({
    router: UploadRouter,
    config: {
        token: env.UPLOADTHING_TOKEN
    }
})

export { handlers as GET, handlers as POST };