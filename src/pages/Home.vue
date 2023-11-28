<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import SectionBox from '../components/HomePage/SectionBox.vue';

const sections = [
    {
        title: 'Solar system', imgUrl: 'images/solarSystem.jpg', route: "solar-system"
    },{
        title: 'Galaxies', imgUrl: '/images/galaxy.jpg', route: "galaxies"
}]
</script>

<template>
    <div id="home-container">
        <navbar></navbar>
        <main>
            <h1>Explore space with <span id="name">SpaceWiki</span> databank</h1>
            <p>Planets, stars, comets and over 1mln other objects</p>
            <div id="section-container">
               <section-box v-for="s in sections" v-bind:title="s.title" v-bind:imgUrl="s.imgUrl" :routePath="s.route"></section-box> 
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
    padding-top: 3em;
}
#section-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
#name{
    color: aqua;
}
@media screen and (max-width: 480px){
    #section-container{
        flex-direction: column;
    }
}
</style>