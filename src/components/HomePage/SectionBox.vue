<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true,
            default: "Default title"
        },
        imgUrl: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <div class="section-box">
        <h2>{{ props.title }}</h2>
        <img v-bind:src="props.imgUrl" class="section-img" :alt="props.title" />
    </div>
</template>

<style scoped>
.section-box{
    margin: 1.5em;
    position: relative;
}
.section-box:hover{
    cursor: pointer;
    opacity: .8;
}

h2{
    position: absolute;
    margin: auto;
    inset: 0;
    width: fit-content;
    height: fit-content;
    background-color: rgba(32, 12, 12, 0.555);
    padding: 5px;
    display: none;
}
.section-box:hover h2{
    display: block;
}
.section-img{
    width: 30vw;
    min-width: 200px;
    max-width: 500px;
    aspect-ratio: 3/2;
    border: 2px solid rgba(163, 155, 155, 0.062);
    border-radius: 5px;
}
</style>