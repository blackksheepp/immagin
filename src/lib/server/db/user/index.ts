import { eq } from "drizzle-orm"
import { db } from ".."
import { user } from "../schema"

export const GetUser = async (slug: string) => {
    return await db
        .select()
        .from(user)
        .where(eq(user.slug, slug));
}

export const SaveUser = async (slug: string) => {
    return await db
        .insert(user)
        .values({ slug: slug })
        .returning();
}
