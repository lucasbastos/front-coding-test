import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import { pt_BR } from './locales/pt_BR';
import { en } from './locales/en';

const languages = {
    pt_BR,
    en,
};

const i18n = createI18n({
    locale: 'pt_BR',
    fallbackLocale: 'pt_BR',
    messages: languages,
});


library.add(fas)

createApp(App)
.use(i18n)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

