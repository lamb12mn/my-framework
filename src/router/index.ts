// import {createRouter, createWebHistory} from "vue-router"
import {routes} from "@/router/config"
import type { App } from 'vue';
import {
    type RouterHistory,
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory
  } from 'vue-router';
  const { VITE_ROUTER_HISTORY_MODE = 'history', VITE_BASE_URL } = import.meta.env;
const historyCreatorMap: Record<Env.RouterHistoryMode, (base?: string) => RouterHistory> = {
    hash: createWebHashHistory,
    history: createWebHistory,
    memory: createMemoryHistory
  };
const router = createRouter({
    history: historyCreatorMap[VITE_ROUTER_HISTORY_MODE](VITE_BASE_URL),
    routes
})
router.beforeEach((to, from) => {
    console.log(to, from)
    return true
})
export async function setupRouter(app: App) {
    app.use(router);
    await router.isReady();
  }