
<template>
  <main>
      <Navigation />
      <div class="container">
        <p>{{ bio }}</p>
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

  fetch: ({store}) => store.dispatch('fetchBio'),

  computed: mapState([
    'bio'
  ]),

}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
