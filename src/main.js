
import router from "./router/index.js";
import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { far } from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
library.add(far,fas,faMapLocationDot)

createApp(App).use(router).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
