<template>
  <div class='bio bio-container'>
  
  <div class="wordart slate">
  <marquee style="display: block;height: 64px;padding-top: 20px;width: 100%;">
  <span class="text">📖 Biography</span>
  </marquee>
  </div>
  
  
    
    <div>
    <div class="bio-text">
    
    <Parraph v-bind:text='bio.data.descripcion' />
    </div>

    <div class="pici ">
    <video class="picvideo" :src="require('~/assets/nana2.webm')" width="100%" autoplay muted loop></video>
    </div>
    </div>
    
    
  </div>
  
</template>

<script>
import config from '../../config';
import { SectionTitle, Parraph, ImageComponent } from '../../components'
import { mapState } from 'vuex';

export default {
    head: {
        title: `${config.title} - bio`
    },
    layout: 'default',
    components: {
        SectionTitle,
        Parraph,
        ImageComponent,
    },
    fetch: ({store}) => store.dispatch('fetchBio'),
    computed: mapState([
      'bio'
    ]),
    
}
</script>

<style>

.wordart {
  font-family: Arial, sans-serif;
  font-size: 4em;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.wordart.slate {
    transform: scale(1, 1.5);
    -webkit-transform: scale(1, 1.5);
    -moz-transform: scale(1, 1.5);
    -o-transform: scale(1, 1.5);
    -ms-transform: scale(1, 1.5);
}

.wordart.slate .text {
    font-family: Times, 'Times New Roman', serif;
    font-weight: normal;
    color: #2F5485;
    text-shadow: 0.03em 0.03em 0px #B3B3B3;
}
.bio-container h2{
  padding: 0;
  margin: 0;

  font-family: Arial, sans-serif;
  font-size: 4em;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bio-container{
    padding-left: 300px;
    padding-right: 300px;
    padding-bottom: 100px;
    padding-top: 100px;
    background-image: url(../../assets/xp.jpeg);
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}
.blinking{
    animation:blinkingText 1.2s infinite;
}
@keyframes blinkingText{
    0%{     color: red;    }
    49%{    color: red; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: red;    }
}
.bio{
    line-height: 30px;
    color: black;
}
.bio .image-container-bio{
  position: absolute;
  left: 75px;
  max-width: 600px;
  width: 90%;
  margin: auto;
  margin-top: 90px;
  margin-bottom:200px;
}
.bio-content{
max-width: 600px;
text-align: justify;
}

.bio-text{
  border: 6px ridge #d8d1d1;
    background: #d8d1d1;
    padding: 20px;
}

.pici{
  
  border: 6px ridge #d8d1d1;
    background: black;
    font-weight: bold;
    /* font-size: 6px; */
    /* line-height: 8px; */
    position: relative;
    width: 400px;
    margin: auto;
    font-family: monospace;
    border: 0;
    border-radius: 50%;
    height: 400px;
    padding: 0;
    text-align: center;
    margin-top: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 7px ridge #0605f9;
    box-shadow: 0px 0px 60px 10px blue;
    
}

    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

.picvideo{
  position: static;
  max-width: 400px;
}

.banner1{
  position: absolute;
  top: 200px;
  right: 10px;
  width: 22vw;
  background: red;
  color: pink;
}

@media (max-width: 600px) {
    .bio-container{
      padding-left: 5%;
      padding-right: 5%;
    }
  }
</style>

