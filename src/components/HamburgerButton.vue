<script setup lang="ts">
const animateHamburger = () => {
    
}
</script>

<template>
    <div id="hamburger-container" v-on:click="animateHamburger">
        <div id="button-part">
            <p id="top"></p>
            <p id="mid"></p>
            <p id="bot"></p>
        </div>
        <div id="content-part"></div>
    </div>
</template>

<style scoped>
#hamburger-container{
    border: 1px solid white;
    padding: .5em;
    height: fit-content;
}
#hamburger-container:hover{
    cursor: pointer;
    opacity: .7;
}
#button-part p{
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px;
}

@media screen and (min-width: 541px){
    #hamburger-container{
        display: none;
    }
}
</style>