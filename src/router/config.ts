export const routes = [
    // 路由重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        // component: Home
        component: () => import("@/views/home/index.vue")
    },
    {
        path: '/other',
        component: () => import("@/views/home/other.vue")
    }
]