<script setup lang="ts">
import { ref } from 'vue';

const opened = ref(false);

const handleHamburgerClick = () => {
    opened.value = !opened.value;
}

</script>

<template>
    <div id="hamburger-container" v-on:click="handleHamburgerClick">
        <div id="button-part">
            <p id="top" :class="{moved: opened}" ></p>
            <p id="mid" :class="{moved: opened}"></p>
            <p id="bot" :class="{moved: opened}"></p>
        </div>
        <Transition>
            <div id="content-part" v-show="opened">
                <a href="/databank">Databank</a>
                <a href="https://api.le-systeme-solaire.net/en/">OpenData API</a>
                <a href="https://planets-3d.netlify.app/" target="_blank">Space3D</a>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
#button-part{
    border: 1px solid white;
    padding: .5em;
    height: fit-content;
}
#button-part:hover{
    cursor: pointer;
    opacity: .7;
}
#button-part p{
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px;
    transition: all 0.5s ease-in;
}

#top.moved{
    rotate: z 45deg;
    translate: 0 7px;
}
#mid.moved{
    opacity: 0;
}
#bot.moved{
    rotate: z -45deg;
    translate: 0 -7px;
}

#content-part{
    transition: all .5s;
    position: absolute;
    background-color: rgb(121, 122, 122);
    color: rgb(253, 250, 250);
    right: 0;
    top: 60px;
    display: grid;
    margin: 5px 5px 0 0;
}
#content-part a{
    padding: 15px;
    width: 100%;
}
#content-part a:hover{
    background-color: rgba(29, 27, 24, 0.76);
}
.v-enter-from,.v-leave-to{
    opacity:0;
}
.v-enter-to,.v-leave-from{
    opacity: 1;
}

@media screen and (min-width: 541px){
    #hamburger-container{
        display: none;
    }
}
</style>