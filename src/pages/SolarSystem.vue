<script setup lang="ts">
import Navbar from '../components/Navbar.vue';


</script>

<template>
    <div id="solarsystem-container">
        <navbar></navbar>
        <main>
            <h1>Solar System</h1>
            <span>Site will be available soon. Thank you for your patience!</span>
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
    margin-top: 2em;
}
</style>