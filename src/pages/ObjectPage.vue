<script setup lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';

const route = useRoute();
const id = route.params.id;

</script>

<template>
    <div id="galaxies-container">
        <navbar></navbar>
        <main>
            <h1>Object {{id}}</h1>
            <span>Site will be available soon. Thank you for your patience!</span>
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
</style>