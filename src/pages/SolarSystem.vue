<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';
import { ref, Transition } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid';

type CelestialType = {
    name: string,
    englishName: string,
    id: string,
    bodyType: string
}

var loading = ref(true);
var error= ref(false);
var objects = ref<CelestialType[]>([]);

const showOrbClearance = ref(false);
const showSize = ref(false);
const showShape = ref(false);

fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Star&filter[]=bodyType,eq,Planet&filter[]=bodyType,eq,Dwarf Planet&satisfy=true&satisfy=any&order=aphelion,asc&data=id,name,englishName,bodyType',{
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => res.json())
.then(res => {
    console.log(res);
    if(res.bodies){
        objects.value = res.bodies;
    } else{
        error
    }
    
})
.catch(err => {
    console.log('err',err);
    error.value = true;
    
})
.finally(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1000)
})

</script>

<template>
    <loading v-if="loading"></loading>
    <error v-if="!loading && error"></error>
    <div id="solarsystem-container" v-if="!loading">
        <navbar></navbar>
        <main>
            <h1>Solar System</h1>
            
            <p class="solar-desc">
                Planetary system that centers around the 
                <router-link to="/solar-system/soleil" id="sun">Sun</router-link>.
            </p>
            <p class="solar-desc">It consists of eight planets, their moons, dwarf planets, asteroids, comets and other celestial bodies</p>
            <img src="/images/solarSystem.gif" id="solarGif"/>
            <p class="solar-desc">Unlike the commonly used model of the solar system, it actually looks different. Its movement through space in the form of a 3D model resembles a vortex.</p>
            <section>
                <h2>Planets</h2>
                <div class="planet-container">
                    <div class="planet" v-for="obj in objects" :key="obj.name">
                        <router-link :to="'/solar-system/'+obj.id" v-if="obj.bodyType === 'Planet'">
                            <img :src="'/images/'+obj.englishName.toLowerCase()+'.png'" :alt="obj.englishName"/>
                            <span class="obj-name">{{ obj.englishName }}</span>
                        </router-link>
                    </div>
                </div>
            </section>

            <section>
                <h2>Dwarf planets</h2>
                <p>
                    Unique category of celestial bodies that share characteristics with both planets and asteroids. They are distinct from regular planets due to their inability to clear their orbits and their smaller size. Despite not meeting all the criteria to be considered planets, dwarf planets play a crucial role in understanding the diversity of our solar system.
                </p>
                <h4 id="characteristics-title">Characteristics of Dwarf Planets</h4>
                <p>
                    <span class="characteristic-name" id="orbClearanceBttn" @click="showOrbClearance = !showOrbClearance">
                        Orbital Clearance 
                        <chevron-down-icon v-show="!showOrbClearance"/>
                        <chevron-up-icon v-show="showOrbClearance"/>
                    </span>
                    <Transition>
                        <div class="characteristic-desc" v-show="showOrbClearance">
                            Unlike planets, dwarf planets do not have the ability to clear    their orbits of other objects. Their orbits may intersect with those of other celestial bodies.
                        </div>
                    </Transition>
                </p>
                <p>
                    <span class="characteristic-name" id="sizeBttn" @click="showSize = !showSize">
                        Size 
                        <chevron-down-icon v-show="!showSize"/>
                        <chevron-up-icon v-show="showSize"/>
                    </span>
                    <Transition>
                        <div class="characteristic-desc" v-show="showSize">
                            Dwarf planets are significantly smaller than regular planets. Their smaller size prevents them from achieving gravitational dominance in their orbital regions.
                        </div>
                    </Transition>
                </p>
                <p>
                    <span class="characteristic-name" id="shapeBttn" @click="showShape = !showShape">
                        Spherical Shape 
                        <chevron-down-icon v-show="!showShape"/>
                        <chevron-up-icon v-show="showShape"/>
                    </span>
                    <Transition>
                        <div class="characteristic-desc" v-show="showShape">
                            Similar to planets, dwarf planets have a spherical shape. This distinguishes them from most asteroids and other irregularly shaped objects.
                        </div>
                    </Transition>
                </p>
                <div class="planet-container">
                    <div class="planet" v-for="obj in objects" :key="obj.name">
                        <router-link :to="'/solar-system/'+obj.id" v-if="obj.bodyType === 'Dwarf Planet'">
                            <img :src="'/images/'+obj.englishName.toLowerCase()+'.png'" :alt="obj.englishName"/>
                            <span class="obj-name">{{ obj.englishName }}</span>
                        </router-link>
                    </div>
                </div>
            </section>

            <!--<section>
                <h2>Asteroid belts</h2>
            </section>-->
        </main>
    </div>
</template>

<style scoped>
main{
    /*height: calc(100vh - 40px);*/
    min-height: 400px;
    max-height: min-content;
    text-align: center;
    max-width: 1000px;
    margin: auto;
}
h1{
    margin-top: 2em;;
    animation: mover 1.5s ease-in;
}
h2{
    animation: mover 2.5s ease-in;
}
img{
    width: 50px;
    aspect-ratio: 3/3;
    object-fit: contain;
}
section{
    margin-top: 4em;
}
#solarGif{
    width: 20vw;
    min-width: 200px;
    animation: opacityMover 2.5s ease-in;
}
.solar-desc{
    animation: opacityMover 2s ease-in;
}

.planet-container{
    display: flex;
    justify-content: center;
    padding: 1em 5em;
}
.planet a{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.2em;
    transition: scale .8s ease-in;
    animation: opacityMover 5.5s ease-in;
}
.planet:hover a{
    cursor: pointer;
    scale: 2;
}
.planet:hover .obj-name{
    opacity: 1;
    transition: opacity 1.5s ease-in;
}
.obj-name{
    opacity: 0;
}

#sun{
    color: rgb(194, 135, 25);
}
.characteristic-name{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: yellowgreen;
}
.characteristic-name svg{
    width: 5%;
    min-width: 25px;
}
.characteristic-name:hover{
    cursor: pointer;
    opacity: .8;
}
#characteristics-title{
    margin-top: 15px;
}

/**Transitions */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

/*animations*/
@keyframes mover{
    0% { opacity: 0;  translate: -30px;}
    100% { opacity: 1; translate: 0px;}
}
@keyframes opacityMover{
    0% {opacity: 0;}
    100% {opacity: 1;}
}

/**Media queries */
@media screen and (max-width:849px){
    .planet-container{
        flex-direction: column;
    }
}
</style>