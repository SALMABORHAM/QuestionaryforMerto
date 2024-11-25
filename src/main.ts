/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// import './vuetify.d.ts'; // Import the type declaration
// import "@/types/vuetify.d.ts";  // Adjust the path based on where your vuetify.d.ts is located

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './assets/styles/global.css';

const i18n = createI18n({
    locale: 'ar', // Set default locale to Arabic
    fallbackLocale: 'en', // Fallback to English if a translation is missing
    messages: {
        en: { /* English translations */ },
        ar: { /* Arabic translations */ },
    },
})
const app = createApp(App)
app.use(i18n)
registerPlugins(app)

app.mount('#app')
