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
    font-family: 'Fivo Sans';
    src: url('../assets/FivoSans-Black.woff2') format('woff2'),
        url('../assets/FivoSans-Black.woff') format('woff'),
        url('../assets/FivoSans-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Fivo Sans';
    src: url('../assets/FivoSans-Regular.woff2') format('woff2'),
        url('../assets/FivoSans-Regular.woff') format('woff'),
        url('../assets/FivoSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Fivo Sans';
    src: url('../assets/FivoSans-Light.woff2') format('woff2'),
        url('../assets/FivoSans-Light.woff') format('woff'),
        url('../assets/FivoSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}



  html,body{
    font-family: 'Fivo Sans', helvetica, arial, sans-serif;
    background: #ffff0005;
  }
  .container {
    max-width: 1024px;
    width: 95%;
    margin: auto;
    text-align: left;
    padding-top: 100px;
  }
  p {
    font-size: 20px;
  }

  .page-container{
    max-width: 600px;
    margin-left: 40%;
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
    }
  }
</style>