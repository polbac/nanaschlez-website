<template>
  <div>
    <SectionTitle v-bind:text='bio.data.titulo[0].text' />
    <Parraph v-bind:text='bio.data.descripcion' />
    <ImageComponent v-bind:source='bio.data.imagen' />
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
</style>