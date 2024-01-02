<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import MyFooter from '../components/MyFooter.vue';
import { ref } from 'vue';

import ObjectTypes from '../data/ObjectTypes';
import {Planets,PlanetType} from '../data/Planets';
import {Galaxies,GalaxyType} from '../data/Galaxies';

const data = ref<Array<PlanetType | GalaxyType> | [] >([]);
const chosenType = ref('');
const dataMessage = ref('Search objects');
const errorMessage = ref('');
const searched = ref(false);

//Set fetched objects to defined array
const onSubmitForm = () => {
    console.log(chosenType.value)
    //object type selected
    if(chosenType.value){
        if(chosenType.value === 'planet')
            data.value = Planets;
        else if(chosenType.value === 'star')
            data.value = [];
        else if(chosenType.value === 'galaxy')
            data.value = Galaxies;
        else if(chosenType.value === 'comet')
            data.value = [];
        else if(chosenType.value === 'asteroid')
            data.value = [];
    }
    //object type not selected
    else{
        errorMessage.value = 'Select object type'
    }
    searched.value = true;
}
</script>

<template>
    <div id="databank-container">
        <navbar></navbar>
        <main>
            <h1>Search any type of object in our databank</h1>
            <section id="categories-form-container">
                <form id="categories-form" @submit.prevent="onSubmitForm">
                    <select name="types" v-model="chosenType">
                        <option disabled value="">Select type</option>
                        <option v-for="obj in ObjectTypes" :value="obj.value" :key="obj.id">{{ obj.typeName }}</option>
                    </select>
                    <button id="searchButton" type="submit">Search</button>
                </form>
                <!--<label>
                    Search
                    <input type="text" placeholder="Search by object name"/>
                </label>-->
            </section>
            <section id="results">
                <div v-for="x in data">{{ x }}</div>
                <p v-show="!data.length && searched" class="message">There are no specified data</p>
                <p v-show="!errorMessage && !data.length" class="message">{{ dataMessage }}</p>
                <p v-show="errorMessage && searched" class="message error">{{ errorMessage }}</p>
            </section>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<style scoped>

main{
    margin: auto;
    max-width: 1000px;
    min-width: 300px;
    font-size: 1em;
    text-align: center;
}
h1{
    margin: 25px;
    font-size: min(max(4vw,16px),32px);
}
.message{
    margin: 15px;
    color: rgb(0, 255, 76);
}
.error{
    color: rgb(185, 43, 43);
}
</style>