<template>
  <div>
    <div class='image-container'>
      <img src="../assets/hom1.jpeg" class="image1" alt="" v-bind:style="{display: isActive(1)}">
      <img src="../assets/hom2.png" class="image2" alt=""v-bind:style="{display: isActive(2)}">
      <img src="../assets/home3.jpg" class="image3" alt=""v-bind:style="{display: isActive(3)}">
      
    </div>
    <router-link :to="{ path: '/workshop' }" class='workshop-banner'>TALLER<br/>CREATIVO</router-link>
  </div>

  
</template>
<script>
import config from '../config';
import { mapState } from 'vuex';
import { HomeModuleComponent } from '../components';
import { scrollPosition, viewportHeight } from '../utils';

export default {

  data() {
    return {current: 1}
  },

  layout: 'default',
  
  created() {
    setInterval(() => {
      if(this.current === 3) {
        this.current = 1;
        return;  
      }
      this.current++
    }, 2000);
  },

  methods: {
    isActive(index) {
      return this.current === index ? 'block' : 'none';
    },
  },

  
  
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: config.title }
      ]
    }
  },
  
}
</script>

<style>
  .image-container{
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    animation: slide 5s infinite;
    background-size: 400px 400px;
    background-position:center;
    background-repeat: no-repeat;
  }

  .image-container img{
    position: fixed;
    height: 70vh;
    width: auto;
    display: none;
    bottom: 10vh;
    right: 30vh;
  }

  .image-container img.image1{
    height: 50vh;
    bottom: 30vh;
    right: 25vh;
  }

  .image-container img.image2{
    height: 50vh;
    bottom: 50vh;
    right: 85vh;
  }

  .image-container img.image3{
    height: 50vh;
    bottom: 10vh;
    right: 45vh;
  }

  @media (max-width: 720px){
    .image-container img{
      position: static;
      width: 100% !important;
      height: auto !important;
      max-height: auto !important;
      margin: auto;
    }

    .image-container img.image1{
      width: 80% !important;
      
    }
    .image-container{
      text-align: center;
      position: static;
    }
  }

  .workshop-banner:hover{
    background: black;
  }
  .workshop-banner{
    box-sizing: border-box;
    padding-top: 35px;
    display: block;
    width: 110px;
    height: 110px;
    text-align: center;
    font-size: 18px;
    background: rgb(74,85,82);
    color: white;
    border-radius: 50%;
    background: -moz-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    background: linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4a5552",endColorstr="#4a5552",GradientType=1);
    
    background-attachment: fixed;
    animation-timing-function: linear;
    background-size: auto 318px;
    animation-name: menu-gradient;
    animation-duration: 4s;
    animation-iteration-count: infinite;

    animation-name: float;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    

    position: fixed;
    bottom: 15px;
    right: 15px;
    font-weight: 500;
    text-decoration: none;
  }

  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

  
</style>