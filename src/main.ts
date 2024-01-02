import { createApp } from 'vue'
import '../src/assets/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import SolarSystem from './pages/SolarSystem.vue'
import Galaxies from './pages/Galaxies.vue'
import ObjectPage from './pages/ObjectPage.vue'
import Databank from './pages/Databank.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: Home},
        { path: '/solar-system', component: SolarSystem},
        { path: '/solar-system/:id', name:'solarsys.object', component: ObjectPage},
        { path: '/galaxies', component: Galaxies},
        { path: '/databank', component: Databank}
    ]
});

createApp(App).use(router).mount('#app')
