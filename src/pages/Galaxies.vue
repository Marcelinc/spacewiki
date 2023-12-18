<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Slider from '../components/GalaxiesPage/Slider.vue';

const GalaxyTypes = [{
    id:1,
    typeName: 'Spiral Galaxies',
    example: {
        objectName: 'Sunflower Galaxy',
        image: '/images/galaxies/sunflowerGalaxy.png',
    },
    description: 'Spiral galaxies are characterized by their distinctive spiral arms, which wrap around a central bulge. Our very own Milky Way is a prime example of a spiral galaxy. These majestic structures showcase ongoing star formation within their arms, creating stunning cosmic vistas.'
},{
    id:2,
    typeName: 'Elliptical Galaxies',
    example: {
        objectName: 'NGC 1132 Galaxy',
        image: '/images/galaxies/ngc1132.jpg',
    },
    description: 'Elliptical galaxies, as the name suggests, have an elliptical or oval shape. They lack the spiral arms seen in spiral galaxies and are often composed of older stars. Elliptical galaxies can range from nearly spherical to highly elongated, and they play a crucial role in the cosmic web of galaxy clusters.'
},{
    id:3,
    typeName: 'Irregular Galaxies',
    example: {
        objectName: 'NGC 2337 Galaxy',
        image: '/images/galaxies/ngc2337.jpg',
    },
    description: 'Irregular galaxies defy the typical symmetrical shapes seen in spiral and elliptical galaxies. They can take on a chaotic, asymmetric appearance and are often the result of gravitational interactions or mergers between galaxies. Irregular galaxies are a testament to the dynamic nature of the cosmos.'
},{
    id: 4,
    typeName: 'Lenticular Galaxies',
    example: {
        objectName: 'NGC 6861 Galaxy',
        image: '/images/galaxies/ngc6861.jpg',
    },
    description: 'Lenticular galaxies combine features of both spiral and elliptical galaxies. They possess a central bulge like elliptical galaxies but also exhibit a flat, disk-like structure similar to spiral galaxies. Lenticular galaxies are sometimes referred to as "disk ellipticals."'
},{
    id:5,
    typeName: 'Dwarf Galaxies',
    example: {
        objectName: 'I Zwicky 18 Galaxy',
        image: '/images/galaxies/IZwicky18.jpg',
    },
    description: 'Dwarf galaxies are smaller and less luminous than their larger counterparts. They can be found in abundance throughout the universe and often orbit larger galaxies as satellites. Despite their diminutive size, dwarf galaxies contribute significantly to our understanding of cosmic structure and evolution.'
},{
    id:6,
    typeName: 'Barred Spiral Galaxies',
    example: {
        objectName: 'M109 Galaxy',
        image: '/images/galaxies/m109.jpg',
    },
    description: 'Barred spiral galaxies feature a central bar-shaped structure extending from the nucleus. The arms of the spiral galaxy emerge from the ends of this bar. The presence of a bar can influence the dynamics of the galaxy and the distribution of stars.'
}]


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
                    </div>
                </div>
            </section>
            

            <section id="types">
                <div id="types-content">
                    <h1>Types of galaxies</h1>
                    <div>
                        <span>
                            Galaxies, the building blocks of our vast universe, come in a variety of shapes and sizes. Each type of galaxy offers a unique glimpse into the cosmic tapestry. Let's embark on a journey through the different classifications of galaxies
                        </span>
                    </div>
                    <div v-for="x in GalaxyTypes" class="type-content">
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
}
.about-content.left{
    justify-content: left;
}
.about-content.right{
    justify-content: right;
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
}
#observations{
    padding: 2em;
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
</style>