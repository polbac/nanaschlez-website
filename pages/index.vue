<template>
  <div class='image-container'>
    <img src="../assets/home_5.png">
  </div>
</template>
<script>
import config from '../config';
import { mapState } from 'vuex';
import { HomeModuleComponent } from '../components';
import { scrollPosition, viewportHeight } from '../utils';

export default {

  layout: 'default',
  
  
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
  }
  .image-container img{
    max-width: 760px;
    margin-top: 10vh;
  }
</style>