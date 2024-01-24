<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    objectName: {
        type: String,
        required: true
    },
    objectImage: {
        type: String,
        required: true
    },
    objectId:{
        type: [String,Number],
        required: true
    },
    objectType: {
        type: String,
        required: true
    }
})

const redirect = () => {
    router.push(`/databank/${props.objectType}/${props.objectId}`); 
    console.log('clicked');
    console.log('prop',props.objectType);
}



</script>

<template>
    <div class="object-tile" @click="redirect">
        <img :src="props.objectImage" :alt="$props.objectName" loading="lazy"/>
        <p class="object-name">{{ props.objectName }}</p>
    </div>
</template>

<style scoped>
.object-tile{
    border: 2px solid rgba(8, 140, 180, 0.726);
    background: rgba(6, 4, 17, 0.185);
    width: 15vw;
    min-width: 200px;
    min-height: 200px;
    margin: 1em;
    padding: 1em;
    position: relative;
    aspect-ratio: 2/2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.object-tile:hover{
    cursor: pointer;
}
.object-name{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-transform: uppercase;
    background-color: rgba(21, 34, 44, 0.726);
    opacity: 0;
    transition: opacity .5s linear;
}
.object-tile:hover .object-name{
    opacity: 1;
}
.object-tile img{
    width: 90%;
}
</style>