<script setup lang="ts">
import Navbar from '../components/Navbar.vue';

</script>

<template>
    <div id="notfound-container">
        <navbar></navbar>
        <main>
            <h1>Page Not Found</h1>
            <router-link to="/">Back to <span id="home-tag">home</span></router-link>
        </main>
    </div>
</template>

<style scoped>
main{
    min-height: calc(100vh - (40px + 1em + 280px + 1em));
    margin: auto;
    max-width: 1000px;
    min-width: 300px;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#home-tag{
    color: aqua;
}
</style>