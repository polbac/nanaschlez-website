<template>
  <main>
      <Navigation v-bind:categories='categories' />
      <div class="container">
        <router-view/>
      </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Navigation from '../components/Navigation'
export default {
  components: {
    Navigation,
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
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
  text-align: center;
}
p {
  font-size: 20px;
}
</style>