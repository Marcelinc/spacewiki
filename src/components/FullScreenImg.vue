<script setup lang="ts">

const props = defineProps({
    objectName: {
        type: String,
        required: true,
        defaultValue: "Galaxy"
    },
    imgUrl: {
            type: String,
            required: true,
    }
})



</script>

<template>
    <div id="fullSizeImg-container">
        <div id="fullSizeImg-content">
            <img v-bind:src="props.imgUrl" :alt="props.objectName" />
        </div>
        <span id="close-button" @click="$emit('closeImage')">X</span>
    </div>
</template>

<style scoped>
#fullSizeImg-container{
    background-color: rgba(51, 52, 53, 0.767);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}
#close-button{
    right: 0;
    top: 0;
    position: fixed;
    margin: 2em;
    font-weight: 900;
    font-size: 30px;
    color: aqua;
}
#close-button:hover{
    cursor: pointer;
    opacity: .8;
}
img{
    width: 80vw;
    height: 70vh;
    object-fit: contain;
}
</style>