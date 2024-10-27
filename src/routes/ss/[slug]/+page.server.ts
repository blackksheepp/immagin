import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { GetImage } from '$lib/server/db/image';

export const load: PageServerLoad = async ({ params }) => {
    const image = await GetImage(params.slug);
    if (image) return image[0];

    error(404, 'Not found');
};