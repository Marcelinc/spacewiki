<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';
import { ref } from 'vue';

type CelestialType = {
    name: string,
    englishName: string,
    id: string
}

var loading = ref(true);
var error= ref(false);
var objects = ref<CelestialType[]>([]);

fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Star&filter[]=bodyType,eq,Planet&satisfy=true&satisfy=any&order=aphelion,asc&data=id,name,englishName',{
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
            <div class="planet-container">
                <div class="planet" v-for="obj in objects" :key="obj.name">
                    <router-link :to="'/solar-system/'+obj.id">
                        <img :src="'/images/'+obj.englishName.toLowerCase()+'.png'" :alt="obj.englishName"/>
                        <span class="obj-name">{{ obj.englishName }}</span>
                    </router-link>
                </div>
        </div>
        </main>
    </div>
</template>

<style scoped>
main{
    /*height: calc(100vh - 40px);*/
    min-height: 400px;
    max-height: min-content;
    text-align: center;
}
h1{
    margin-top: 2em;;
    animation: mover 1.5s ease-in;
}
img{
    width: 50px;
    aspect-ratio: 3/3;
    object-fit: contain;
}

.planet-container{
    display: flex;
    justify-content: center;
    padding: 5em;
}
.planet a{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.2em;
    transition: scale .8s ease-in;
    animation: planetMover 4.5s ease-in;
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

@keyframes mover{
    0% { opacity: 0;  translate: -30px;}
    100% { opacity: 1; translate: 0px;}
}
@keyframes planetMover{
    0% {opacity: 0;}
    100% {opacity: 1;}
}

@media screen and (max-width:849px){
    .planet-container{
        flex-direction: column;
    }
}
</style>