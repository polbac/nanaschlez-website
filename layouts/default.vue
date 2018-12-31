<template>
  <div class='container'>
      <Navigation v-bind:categories='categories' />
      <WorkshopsMarquee />
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
    WorkshopsMarquee,
  },
  
  computed: mapState([
    'categories'
  ]),
}
</script>

<style>
  html,body{
    font-family: 'Source Sans Pro', helvetica, arial, sans-serif;
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
</style>