import './bootstrap';
import { createApp } from 'vue';
import router from './router';

import app from './Layouts/App.vue';

createApp(app)
    .use(router)
    .mount('#app')
