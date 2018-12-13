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
        title: `${config.title} - contacto`
    },
    layout: 'default',
    components: {
        SectionTitle,
        Parraph,
        ImageComponent,
    },
    fetch: ({store}) => store.dispatch('fetchContact'),
    computed: mapState([
      'contact'
    ]),
    
}
</script>

<style>
</style>