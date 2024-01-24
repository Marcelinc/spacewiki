<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
import MyFooter from '../components/MyFooter.vue';
import { ref } from 'vue';

type PlanetType = {
    id: string,
    name: string,
    englishName: string,
    isPlanet: boolean,
    avgTemp: number,
    density: number,
    gravity: number,
    equaRadius: number,
    sideralOrbit: number,
    sideralRotation: number,
    bodyType: string,
    discoveredBy: string,
    discoveryDate: string,
    moons: any
}

const route = useRoute();
const id = route.params.id;

const loading = ref(true);
const error = ref(false);
const object = ref<PlanetType|null>(null)

fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`,{
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.then(res => {
    console.log(res)
    if(res)
        object.value = res;
    else error.value = true;
}).catch(err => {
    console.log(err)
    error.value = true;
}).finally(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1000)
})

</script>

<template>
    <loading v-if="loading"></loading>
    <div v-if="!loading" id="galaxies-container">
        <navbar></navbar>
        <main>
            <div id="obj-image-container">
                <img :src="'/images/'+object?.englishName.toLowerCase()+'.png'" id="obj-image" :alt="object?.englishName"/>
            </div>
            <div id="obj-desc-container">
                <h1>{{object?.englishName}}</h1>
                <div id="obj-data">
                    <p><b>Body type: </b>{{ object?.bodyType }}</p>
                    <p><b>Discovered by:</b> {{ object?.discoveredBy || 'No data'}}</p>
                    <p><b>Discovery date:</b> {{ object?.discoveryDate || 'No data' }}</p>
                    <p><b>Density: </b>{{ object?.density + ' g/cm^3'|| 'No data' }}</p>
                    <p><b>Gravity: </b>{{ object?.gravity + ' m/s^2'|| 'No data' }}</p>
                    <p><b>Equatorial radius: </b> {{ object?.equaRadius + ' km'|| 'No data' }}</p>
                    <p><b>Sideral orbital time: </b>{{ object?.sideralOrbit + ' days'|| 'No data' }}</p>
                    <p><b>Sideral rotation: </b> {{ object?.sideralRotation + ' hours'|| 'No data' }}</p>
                </div>
                
            </div>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<style scoped>
main{
    /*height: calc(100vh - 40px);
    text-align: center;*/
    min-height: 400px;
    max-height: min-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4em;
    margin-bottom: 3em;
}
#obj-image-container{
    border: 1px solid rgb(61, 49, 49);
    padding: 2em;
    height: fit-content;
    margin: 30px 0 30px 30px;
}
#obj-image{
    width: 20vw;
    max-width: 250px;
    min-width: 100px;
}
#obj-desc-container{
    /*border: 1px solid rgb(31, 34, 34);
    width: 30vw;*/
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    height:fit-content;
    margin-inline: 1em;
    padding: 1em 2.5em;
    min-width: 330px;
    max-width: 500px;
    font-size: min(max(13px,2vw),18px);
}
#obj-desc-container h1{
    text-align: center;
}
#obj-data{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


/*Media queries */
@media screen and (max-width:564px){
    #obj-image-container{
        margin: 30px;
    }
}
</style>