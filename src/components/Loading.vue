<script setup lang="ts">
</script>

<template>
    <div id="loading-container">
        <h1>
            Loading 
            <span id="one">.</span>
            <span id="two">.</span>
            <span id="three">.</span>
        </h1>
    </div>
</template>

<style scoped>
#loading-container{
    width: 100vw;
    height: 100vh;
    min-height: 300px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#one,#two,#three{
   animation: showDot 3s infinite linear;
   opacity: 0; 
}
#two{
    animation-delay: 0.5s;
}
#three{
    animation-delay: 1s;
}
@keyframes showDot{
    0% {opacity: 0 }
    50% {opacity: 1}
    100% { opacity: 0;}
}
</style>