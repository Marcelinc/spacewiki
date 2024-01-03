<script setup lang="ts">

</script>

<template>
    <footer>
        <span id="footer-line"></span>
        <div class="links">
            <div class="footer-column">
                <h3 class="footer-column-header">Resources</h3>
                <ul class="footer-column-links">
                    <li><a href="https://api.le-systeme-solaire.net/en/" target="_blank">OpenData API</a></li>
                    <li><a href="https://speckyboy.com/freebie-the-space-icon-set-50-icons-svg-png/" target="_blank">Icons</a></li>
                    <li><a href="https://esahubble.org/images/archive/category/galaxies/" target="_blank">Images</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-column-header">See also</h3>
                <ul class="footer-column-links">
                    <li><a href="https://planets-3d.netlify.app/" target="_blank">Planets 3D</a></li>
                    <li><a href="/databank">Databank</a></li>
                    <li><a href="https://www.esa.int/" target="_blank">ESA</a></li>
                </ul>
            </div>
        </div>
        <p id="footer-paragraph"> 2023 SpaceWiki</p>
    </footer>
</template>

<style scoped>
footer{
    margin: auto;
    max-width: 1100px;
    padding: 2em 10px;
    height: 280px;
}
#footer-line{
    height: 1px;
    width: 80%;
    background-color: rgb(37, 44, 44);
    display: block;
    margin: auto;
}
.links{
    display: flex;
    justify-content: space-around;
    margin: 1em;
}
.footer-column{
    text-align: center;
}
.footer-column-header{
    color: aqua;
    margin-bottom: 15px;
}
.footer-column-links{
    list-style-type: none;
}
li{
    margin: 2px;
}
li:hover{
    opacity: .8;
    cursor: pointer;
}
#footer-paragraph{
    text-align: center;
    font-weight: 200;
}
</style>