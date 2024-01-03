<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Slider from '../components/Slider.vue';
import MyFooter from '../components/MyFooter.vue';

import GalaxyTypes from '../data/GalaxyTypes.ts';
</script>

<template>
    <div id="galaxies-container">
        <navbar></navbar>
        <main>
            <section id="about">
                <div id="about-content">
                    <h1>Welcome to the Galaxy Explorer</h1>
                    <span>Embark on a cosmic journey with us as we delve into the fascinating world of galaxies</span>
                    <div class="about-content right">
                        <img id="galaxyIcon" src="/images/galaxy.svg"/>
                        <span>
                            <h3>What are galaxies?</h3>
                            Galaxies are colossal systems of stars, interstellar gas, dust, and dark matter bound together by gravity. Our universe is teeming with these celestial giants, each telling a unique story of cosmic evolution.
                        </span>
                    </div>
                    <div class="about-content left">
                        <span>
                            <h3>Explore the Cosmos</h3>
                            Discover the diverse array of galaxies that populate our vast universe. From spiral galaxies like the Milky Way to elliptical galaxies with their graceful shapes, each holds its own secrets waiting to be unraveled. Learn about the various classifications, sizes, and distinctive features that make each galaxy a celestial masterpiece.
                        </span>
                        <img src="/images/blackHole.svg" style="width: 200px"/>
                    </div>
                </div>
            </section>
            

            <section id="types">
                <div id="types-content">
                    <h1>Types of galaxies</h1>
                    <div id="types-span-container">
                        <span id="types-span">
                            Galaxies, the building blocks of our vast universe, come in a variety of shapes and sizes. Each type of galaxy offers a unique glimpse into the cosmic tapestry. Let's embark on a journey through the different classifications of galaxies
                        </span>
                    </div>
                    <div v-for="x in GalaxyTypes" :key="x.id" class="type-content">
                        <h3>{{ x.typeName }}</h3>
                        <span class="type-description">{{ x.description }}</span>
                        <figure>
                            <img :src="x.example.image" :alt="x.example.objectName"/>
                            <figcaption>{{ x.example.objectName }}</figcaption>
                        </figure>
                        
                    </div>
                </div>
            </section>
            <section id="observations">
                <div id="observations-content">
                    <h1>Beyond the Visible</h1>
                    <div>
                        <span>
                            Peer into the unseen realms of the electromagnetic spectrum to unveil the hidden beauty of galaxies. Infrared, radio, and X-ray observations reveal a universe brimming with activity and phenomena that our eyes alone cannot perceive. Take a look at the breathtaking photos we have selected.
                        </span>
                        <slider></slider>
                    </div>
                </div>
            </section>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<style scoped>
main{
    /*height: calc(100vh - 40px);*/
    min-height: 400px;
    max-height: min-content;
    text-align: center;
}
h1{
    margin-top: 2em;
    font-size: xxx-large;
}
figure{
    max-width: 600px;
    margin: 2em;
}
figure img{
    aspect-ratio: 4/2;
    object-fit:cover;
    width: 100%;
}

.about span{
    margin: 20px;
}
.about-content{
    margin: 60px 40px;
    display: flex;
    justify-content: space-around;
}
.about-content span{
    width: 40%;
}
#types{
    background-image: linear-gradient(rgb(19, 16, 16),10%,rgb(20, 20, 44),98%,rgb(37, 18, 18));
    padding-block: 40px;
}
#observations{
    background-image: linear-gradient(rgb(37, 18, 18),20%, rgb(19, 16, 16));
}
#types-content,#about-content,#observations-content{
    margin: auto;
    max-width: 1100px;
}

.type-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.type-content h3{
    margin-top: 1em;
    font-size: xx-large;
}
.type-description{
    max-width: 900px;
    margin-inline: 10px;
}
#observations{
    padding: 2em;
}

#galaxyIcon{
    width: 200px;
    rotate: x 30deg;
    /*animation: rotateGalaxy 10s linear infinite;
    box-shadow: 0px 4px 2px -2px #00ffff;
    perspective: 300px;*/
}


/**Media queries */
@media screen and (max-width:980px){
    .about-content.right,.about-content.left{
        justify-content: center;
    }
    .about-content span{
        width: 60%;
    }
}

@media screen and (max-width: 660px){
    .about-content{
        flex-direction: column;
        align-items: center;
    }
}

/*Animations*/
/*@keyframes rotateGalaxy{
    100%{
        transform: rotat(360deg);
    }
}*/
</style>../data/GalaxyTypes.ts