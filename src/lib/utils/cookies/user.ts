import type { Cookies } from "@sveltejs/kit"
interface User {
    id: number,
    slug: string
};

export const GetUserCookie = (cookies: Cookies) => {
    const user = cookies.get('user');
    if (user) {
        return JSON.parse(user) as User;
    } else {
        return null;
    }
}

export const SaveUserCookie = (user: User, cookies: Cookies) => {
    console.log("saving user", user);
    const resp = cookies.set('user', JSON.stringify(user), {
        path: '/',
        maxAge: 60 * 60 * 24 * 90,
        secure: false,
        sameSite: "lax"
    });

    console.log("saved user", resp);
}
