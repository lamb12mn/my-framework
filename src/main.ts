import { createApp } from 'vue'
import '@/styles/global.less'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupI18n } from './locales'
import { setupDayjs } from './locales/plugins/dayjs'

async function setupApp() {

    setupDayjs()

    const app = createApp(App)

    setupStore(app);

    await setupRouter(app);

    setupI18n(app);

    app.mount('#app')
}
setupApp();

