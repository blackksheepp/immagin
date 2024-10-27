import { GetUserCookie, SaveUserCookie } from '$lib/utils/cookies/user';
import { SaveImage } from '$lib/server/db/image';
import { SaveUser } from '$lib/server/db/user';
import { v4 as uuidv4 } from 'uuid';
import type { RequestHandler } from './$types';

const slug = () => {
    const uuid = uuidv4();
    return uuid;
};

export const POST: RequestHandler = async ({ request, cookies }) => {
    const { name, url } = await request.json();

    if (!name || !url) {
        return new Response(JSON.stringify({ error: 'Missing name or url' }));
    }

    try {
        let user = GetUserCookie(cookies);
        var userId;
        if (!user) {
            const uid = slug();
            let resp = await SaveUser(uid);
            let user = resp.filter((u) => u)[0];
            userId = user.id;
            SaveUserCookie(user, cookies);
        } else {
            userId = user.id;
        }

        const iid = slug();
        await SaveImage(iid, name, userId, url);

        return new Response(JSON.stringify({ iid }));
    } catch (error) {
        return new Response(JSON.stringify({ error: error }));
    }
}