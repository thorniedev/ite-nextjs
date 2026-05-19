import { NavType } from "@/lib/Types/NavType";


export const navLink: NavType[] = [
    {
        path:'/',
        name: 'Home',
        active: true,
    },
    {
        path: '/about',
        name: 'about',
        active: false,
    },
    {
        path: '/products',
        name: 'product',
        active: false,
    },
    {
        path: '/blog',
        name: 'blog',
        active: true,
    }
]