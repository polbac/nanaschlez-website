<template>
  <div>
    <SectionTitle v-bind:text='workshop.data.titulo[0].text' />
    <Parraph v-bind:text='workshop.data.descripcion' />

    <div v-masonry transition-duration="3s" item-selector=".item" class="masonry-container">
      <div v-masonry-tile class="item" :key="index" v-for="(item, index) in workshop.data.galeria">
        <img class='image-gallery' v-bind:src='item.image.url' width='100%' />
      </div>
    </div>

  </div>
  
</template>

<script>
import config from '../../config';
import { SectionTitle, Parraph, ImageComponent } from '../../components'
import { mapState } from 'vuex';


export default {
    head: {
        title: `${config.title} - talleres`
    },
    layout: 'default',
    components: {
        SectionTitle,
        Parraph,
        ImageComponent,
    },
    fetch: ({store}) => store.dispatch('fetchWorkshop'),
    computed: mapState([
      'workshop'
    ]),
    mounted () {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    }
    
}
</script>

<style>

.item {
  width: 30%;
  margin: 10px;
}

.masonry-container {
  margin-top: 50px;
}
</style>