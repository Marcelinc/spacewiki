<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FullScreenImg from '../components/FullScreenImg.vue';


const showFullScreenImg = ref(false);
const fullScreenImgContent = ref({objectName: 'Galaxy',imgUrl: '#'});


var galleryContainer: HTMLElement | null;
var galleryControlsContainer: HTMLElement | null;
const galleryControls: Array<String> = ['previous', 'next'];
var galleryItems: NodeListOf<HTMLImageElement> | null;
var galaxyCarousel: Carousel;

class Carousel{

    carouselContainer: HTMLElement;
    carouselControls: Array<String>;
    carouselArray: Array<HTMLImageElement>;

    constructor(container: HTMLElement,items: NodeListOf<HTMLImageElement>,controls: Array<String>){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    setFullScreenImage(imgPath:string){
        fullScreenImgContent.value.imgUrl = imgPath
    }

    displayFullScreenImg(){
        showFullScreenImg.value = true;
    }

    setFullScreenImageControl(){
        this.setFullScreenImage(this.carouselArray[2].src);
        this.carouselArray[2].addEventListener('click',this.displayFullScreenImg)
    }

    //Update classes of updated node elements
    updateGallery(){
        this.carouselArray.forEach((el,index) => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            if(index === 2)
                this.setFullScreenImage(el.src);
        })

        this.carouselArray.slice(0,5).forEach((el,index) => {
            el.classList.add(`gallery-item-${index+1}`);
            //add event listener to show image
            if(index === 2){
                el.addEventListener('click',this.displayFullScreenImg)
            } else
                el.removeEventListener('click',this.displayFullScreenImg);
        })
    }

    //Move node elements in the array to change order of the carousel items
    setCurrentState(direction: any){
        console.log('mounted')
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop()!);
        } else{
            this.carouselArray.push(this.carouselArray.shift()!);
        }
        this.updateGallery();
    }

    //Add buttons to the carousel
    setControls(){
        this.carouselControls.forEach((control: any) => {
            if(galleryControlsContainer){
                galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
                let ctrlElem:HTMLElement | null = document.querySelector(`.gallery-controls-${control}`);
                if(ctrlElem){
                    ctrlElem.innerText = control;
                }
            }  
        })
    }

    //Set onclick listeners to buttons
    useControls(){
        if(galleryControlsContainer){
            const triggers: Array<ChildNode> | null = [...galleryControlsContainer.childNodes];
                triggers?.forEach(control => {
                    control.addEventListener('click', e => {
                        e.preventDefault();
                        this.setCurrentState(control);
                    })
                })
        }
        
    }
}
onMounted(() => {

    galleryContainer = document.querySelector('.gallery-container');
    galleryControlsContainer = document.querySelector('.gallery-controls');
    galleryItems = document.querySelectorAll('.gallery-item');

    if(galleryContainer && galleryItems){
        galaxyCarousel = new Carousel(galleryContainer,galleryItems,galleryControls);
        galaxyCarousel.setControls();
        galaxyCarousel.useControls();
        galaxyCarousel.setFullScreenImageControl();
    }
})

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
        <div class="gallery-controls"></div>
        <full-screen-img v-show="showFullScreenImg" :object-name="fullScreenImgContent.objectName"
        :img-url="fullScreenImgContent.imgUrl" @close-image="() => showFullScreenImg=false"></full-screen-img>
    </div>
</template>


<style scoped>
    .gallery{
        position: relative;
    }
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
    .gallery-item-3:hover{
        cursor: pointer;
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

    /**Media queries */
    @media screen and (max-width:1040px){
        .gallery-item-1,.gallery-item-5{
          display: none;
        }
    }
    @media screen and (max-width:640px){
        .gallery-item-2,.gallery-item-4{
          display: none;
        }
    }
    @media screen and (max-width:490px){
        .gallery-item-3{
          width: 80vw;
          object-fit:cover
        }
    }

</style>
<style>
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
        color: white;
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
    .gallery-controls-next{
        position:relative;
        background: transparent;
    }
    .gallery-controls-next::before{
        border: solid #fff;
        border-width: 0 5px 5px 0;
        content: '';
        display: inline-block;
        height: 5px;
        padding: 10px;
        position: absolute;
        right: -30px;
        top: 45%;
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

    /**Media queries */
    @media screen and (max-width:490px){
        .gallery-controls button{
            margin: 0 20px;
            font-size: 1.5em;
        }
    }
</style>