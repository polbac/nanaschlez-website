<template>
  <div class='container'>
      <Navigation v-bind:categories='categories' />
    <nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navigation from '../components/Navigation'
import WorkshopsMarquee from '../components/WorkshopsMarquee'

export default {
  middleware: 'navigation',
  
  components: {
    Navigation,
  },

  computed: mapState([
    'categories'
  ]),
}
</script>

<style>
@font-face {
    font-family: 'Surt';
    src: url('../assets/Surt.woff2') format('woff2'),
        url('../assets/Surt.ttf') format('truetype');
    font-style: normal;
}

@font-face {
    font-family: 'RoslindaleVariable';
    src: url('../assets/RoslindaleVariable.woff2') format('woff2'),
        url('../assets/RoslindaleVariable.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}




  html,body{
    font-family: 'Surt', helvetica, arial, sans-serif;
    
  }
  .container{
    margin: auto;
    text-align: left;
  }
  @media (max-width: 600px){
    
  }
  p {
    font-size: 20px;
  }

  

  .pic{
        width: 70%;
        text-align: center;
        margin-bottom: 50px;
    }


    .pic img{
      width: 100%;
    }

  @media (max-width: 600px) {
    .page-container{
      max-width: 600px;
      margin-left: 0;
      margin-top: 50px;
    }
    .pic{
        width: 100%;
    }
  }
</style>