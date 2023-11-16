<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Loading from '../components/Loading.vue';
import { ref } from 'vue';

type ObjectType = {
    id: string,
    name: string,
    englishName: string,
    isPlanet: boolean,
    avgTemp: number,
    density: number,
    gravity: number,
    bodyType: string,
    discoveredBy: string,
    discoveryDate: string,
}

const route = useRoute();
const id = route.params.id;

const loading = ref(true);
const error = ref(false);
const object = ref<ObjectType|null>(null)

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
                    <p>Body type: {{ object?.bodyType }}</p>
                    <p>Discovered by: {{ object?.discoveredBy || 'No data'}}</p>
                    <p>Discovery date: {{ object?.discoveryDate || 'No data' }}</p>
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4em;
}
#obj-image-container{
    border: 1px solid rgb(61, 49, 49);
    padding: 2em;
    height: fit-content;
}
#obj-image{
    width: 20vw;
    max-width: 300px;
}
#obj-desc-container{
    border: 1px solid rgb(31, 34, 34);
    display: flex;
    justify-content: left;
    flex-direction: column;
    height:fit-content;
    margin-inline: 1em;
    padding: 1em 2.5em;
    width: 30vw;
    min-width: 330px;
    max-width: 500px;
}
#obj-data{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
#obj-data p{

}
</style>