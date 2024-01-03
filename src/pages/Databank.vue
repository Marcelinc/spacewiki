<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import MyFooter from '../components/MyFooter.vue';
import ObjectTile from '../components/ObjectTile.vue';
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
    let response: Array<PlanetType | GalaxyType> | [] = [];
    errorMessage.value = '';
    console.log(chosenType.value)
    //object type selected
    if(chosenType.value){
        //fetch data
        if(chosenType.value === 'planet')
            response = Planets;
        else if(chosenType.value === 'star')
            response = [];
        else if(chosenType.value === 'galaxy')
            response = Galaxies;
        else if(chosenType.value === 'comet')
            response = [];
        else if(chosenType.value === 'asteroid')
            response = [];

        //save data to array and return message
        data.value = response;
        if(response.length > 0){
            dataMessage.value = '';
        }
        else
            dataMessage.value = `There is currently no ${chosenType.value} in our databank.`;
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
                    <select name="types" v-model="chosenType" id="select-types">
                        <option disabled value="">Select type</option>
                        <option v-for="obj in ObjectTypes" :value="obj.value" :key="obj.id">
                            {{ obj.typeName }}
                        </option>
                    </select>
                    <button id="searchButton" type="submit">Search</button>
                </form>
                <!--<label>
                    Search
                    <input type="text" placeholder="Search by object name"/>
                </label>-->
            </section>
            <section id="results">
                <div id="object-tile-container">
                    <object-tile v-for="x in data" :object-id="x.id" :object-name="x.name" :object-image="x.imagePath"></object-tile>
                </div> 
                <p v-show="!errorMessage" class="message">{{ dataMessage }}</p>
                <p v-show="errorMessage" class="message error">{{ errorMessage }}</p>
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
    min-height: calc(100vh - (40px + 1em + 280px + 1em));
}
h1{
    margin: 25px;
    font-size: min(max(4vw,16px),32px);
}
/**Form */
#categories-form{
    display: grid;
    justify-content: center;
}
#select-types{
    padding: .7em;
    margin: 1em;
    background-color: rgba(127, 255, 255, 0.5);
    border: 2px solid rgb(104, 204, 187);
    border-radius: 2px;
    color: rgb(17, 41, 63);
    font-weight: 700;
}
.optionIcon{
    width:10px;
}
#searchButton{
    padding: .5em;
    background-color: rgba(25, 41, 41, 0.5);
    border: 2px solid rgb(90, 138, 130);
    color: rgb(61, 177, 206);
    font-weight: 700;
    margin: 1em;
}
#searchButton:hover{
    cursor: pointer;
    opacity: .7;
}
/**Message fields */
.message{
    margin: 15px;
    color: rgb(0, 255, 76);
}
.error{
    color: rgb(185, 43, 43);
}
/**Results box */
#object-tile-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>