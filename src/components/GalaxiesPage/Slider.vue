<script setup lang="ts">
type imageType = {
    id: number,
    path: string,
}

const images = [];

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{
    constructor(container,items,controls){
        this.carousel
    }
}
</script>

<template>
    <div class="gallery">
        <div class="gallery-container">
            <img class="gallery-item gallery-item-1" src="/images/galaxies/antennae.jpg" data-index="1">
            <img class="gallery-item gallery-item-2" src="/images/galaxies/triocollision.jpg" data-index="2">
            <img class="gallery-item gallery-item-3" src="/images/galaxies/ic4141.jpg" data-index="3">
            <img class="gallery-item gallery-item-4" src="/images/galaxies/ngc4194.jpg" data-index="4">
            <img class="gallery-item gallery-item-5" src="/images/galaxies/cigarmessier.jpg" data-index="5">
        </div>
        <div class="gallery-controls">

        </div>
    </div>
</template>


<style scoped>
    .gallery-container{
        display: flex;
        align-items: center;
        height: 400px;
        margin: 0 auto;
        max-width: 1000px;
        position: relative;
    }
    .gallery-item{
        height: 200px;
        width: 330px;
        position: absolute;
        z-index: 0;
        border-radius: 15px;
        background-size: contain;
        transition: all 0.3s ease-in-out;
        opacity: 0;
    }
    .gallery-item-1{
        opacity: .4;
        left: 15%;
        transform: translateX(-50%);
    }
    .gallery-item-2,.gallery-item-4{
        height: 250px;
        width: 380px;
        opacity: .8;
        z-index: 1;
    }
    .gallery-item-2{
        left: 30%;
        transform: translateX(-50%);
    }
    .gallery-item-3{
        height: 300px;
        width:430px;
        opacity:1;
        left:50%;
        opacity:1;
        z-index: 2;
        transform: translateX(-50%);
        box-shadow: -2px 5px 33px 6px rgba(59, 59, 59, 0.35);
    }
    .gallery-item-4{
        left:70%;
        transform: translateX(-50%);
    }
    .gallery-item-5{
        left:85%;
        opacity:.4;
        transform: translateX(-50%);
    }
    .gallery-controls{
        display:flex;
        justify-content:center;
        margin: 25px 0;
        height: 100px;
    }
    .gallery-controls button{
        background-color: transparent;
        border:0;
        cursor:pointer;
        font-size:30px;
        margin: 0 50px;
        padding: 0 12px;
        text-transform: capitalize;
    }
    .gallery-controls button:focus{
        outline:none;
    }
    .gallery-controls-previous{
        position:relative;
    }
    .gallery-controls-previous::before{
        border: solid;
        border-width: 0 5px 5px 0;
        content:'';
        display: inline-block;
        height: 5px;
        left: -30px;
        padding: 10px;
        position: absolute;
        top:25%;
        transform: rotate(135deg) translateY(-50%);
        transition: left .15s ease-in-out;
        width: 5px;
    }
    .gallery-controls-previous:hover::before{
        left: -40px;
    }
    .gallery-controls--next{
        position:relative;
    }
    .gallery-controls--next::before{
        border: solid #000;
        border-width: 0 5px 5px 0;
        content: '';
        display: inline-block;
        height: 5px;
        padding: 10px;
        position: absolute;
        right: -30px;
        top: 45;
        transform: rotate(-45deg) translateY(-50%);
        transition: right .15s ease-in-out;
        width: 5px;
    }
    .gallery-controls-next:hover::before{
        right: -40px;
    }

    .gallery-nav{
        bottom:-15px;
        display:flex;
        justify-content: center;
        list-style:none;
        padding: 0;
        position:absolute;
        width:100%;
    }
    .gallery-nav li{
        background: #ccc;
        border-radius: 50%;
        height: 10px;
        margin: 0 16px;
        width: 10px;
    }

    .gallery-nav li.gallery-item-selected{
        background:#555;
    }

</style>