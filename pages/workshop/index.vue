<template>
  <div class='talleres'>
    <SectionTitle v-bind:text='workshop.data.titulo[0].text' />
    <div class='tall-text'>
    <Parraph v-bind:text='workshop.data.descripcion' />
    </div>

    <div v-masonry transition-duration="0.3s" item-selector=".item" class="masonry-container">
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
.talleres{
  line-height: 30px;
  color: blue;  
}
.item {
  width: 30%;
  padding:10px;
  box-sizing: border-box;
}

.masonry-container {
  margin-top: 50px;
}
.tall-text{
  max-width: 600px;
  text-align: justify;
}

@media (max-width: 640px) {
  .item {
    width: 100%;
    padding: 0;
    padding-bottom:10px;
  } 
}
</style>