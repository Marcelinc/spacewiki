<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';
import { ref } from 'vue';

type CelestialType = {
    name: string,
    englishName: string,
}

var loading = ref(true);
var error= ref(false);
var objects = ref<CelestialType[]>([]);

fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Star&filter[]=bodyType,eq,Planet&satisfy=true&satisfy=any',{
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
    }, 5000)
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
                <div class="planet" v-for="obj in objects" :key="obj.name">{{ obj.englishName }}</div>
        </div>
        </main>
    </div>
</template>

<style scoped>
main{
    height: calc(100vh - 40px);
    min-height: 400px;
    max-height: min-content;
    text-align: center;
}
h1{
    margin-top: 2em;;
    animation: mover 1.5s ease-in;
}

.planet{
    animation: planetMover 5.5s ease-in;
}

@keyframes mover{
    0% { opacity: 0;  translate: -30px;}
    100% { opacity: 1; translate: 0px;}
}
@keyframes planetMover{
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>