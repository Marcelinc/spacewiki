<script setup lang="ts">
import HamburgerButton from './HamburgerButton.vue';
</script>

<template>
    <nav id="nav-container">
        <div id="logo">
            <a href="/">SpaceWiki</a>
        </div>
        <div id="links-container">
            <a href="#">Databank</a>
            <a href="#">OpenData API</a>
            <a href="https://planets-3d.netlify.app/" target="_blank">Space3D</a>
        </div>
        <hamburger-button></hamburger-button>
    </nav>
</template>

<style scoped>
#nav-container{
    display: flex;
    justify-content: space-between;
    padding: 1em;
    height: 40px;
}
a{
    margin: 1.2em;
}

@media screen and (max-width: 540px){
    #links-container{
        display: none;
    }
}
</style>