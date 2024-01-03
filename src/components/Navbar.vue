<script setup lang="ts">
import HamburgerButton from './HamburgerButton.vue';
</script>

<template>
    <nav id="nav-container">
        <div id="logo">
            <a href="/">SpaceWiki</a>
        </div>
        <div id="links-container">
            <a href="/databank">Databank</a>
            <a href="https://api.le-systeme-solaire.net/en/" target="_blank">OpenData API</a>
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
#logo{
    color: aqua;
}

@media screen and (max-width: 540px){
    #links-container{
        display: none;
    }
}
</style>