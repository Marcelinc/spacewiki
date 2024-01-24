import { createApp } from 'vue'
import '../src/assets/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import SolarSystem from './pages/SolarSystem.vue'
import Galaxies from './pages/Galaxies.vue'
import PlanetPage from './pages/PlanetPage.vue'
import Databank from './pages/Databank.vue'
import NotFoundVue from './pages/NotFound.vue'
import GalaxyPage from './pages/GalaxyPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: Home},
        { path: '/solar-system', component: SolarSystem},
        { path: '/galaxies', component: Galaxies},
        { path: '/databank', component: Databank},
        { path: '/databank/planet/:id', name:'solarsys.object', component: PlanetPage},
        { path: '/databank/galaxy/:id', component: GalaxyPage},
        { path: '/databank/star/:id', component: PlanetPage},
        { path: '/:pathMatch(.*)*', component: NotFoundVue}
    ]
});

createApp(App).use(router).mount('#app')
