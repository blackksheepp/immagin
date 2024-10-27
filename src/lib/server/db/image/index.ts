import { eq } from "drizzle-orm";
import { db } from "..";
import { image } from "../schema";

export const GetImages = async () => {
    return await db
        .select()
        .from(image);
}

export const GetImage = async (slug: string) => {
    return await db
        .select()
        .from(image)
        .where(eq(image.slug, slug));
}


export const SaveImage = async (slug: string, name: string, userId: number, url: string) => {
    return await db
        .insert(image)
        .values({ slug, name, userId, url })
        .returning();
}