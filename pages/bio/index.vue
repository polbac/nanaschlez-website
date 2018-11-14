<template>
  <div>
    <SectionTitle v-bind:text='bio.data.titulo[0].text' />
    <Parraph v-bind:text='bio.data.data.description' />
  </div>
  
</template>

<script>
import config from '../../config';
import { SectionTitle, Parraph } from '../../components'
import { mapState } from 'vuex';

export default {
    head: {
        title: `${config.title} - bio`
    },
    components: {
        SectionTitle,
        Parraph,
    },
    fetch: ({store}) => store.dispatch('fetchBio'),
    computed: mapState([
      'bio'
    ]),
    
}
</script>

<style>
</style>