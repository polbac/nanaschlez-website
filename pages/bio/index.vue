<template>
  <div class='bio page-container'>
    <SectionTitle v-bind:text='bio.data.titulo[0].text' />
    <div>
    <Parraph v-bind:text='bio.data.descripcion' />
    </div>
    <div class='image-container-bio'>
      <ImageComponent v-bind:source='bio.data.imagen' />
    </div>
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
.bio{
    line-height: 30px;
    color: #c79810;
}
.bio .image-container-bio{
  position: absolute;
  left: 75px;
  max-width: 600px;
  width: 90%;
  margin: auto;
  margin-top: 90px;
  margin-bottom:200px;
}
.bio-content{
max-width: 600px;
text-align: justify;
}
@media (max-width: 600px) {
    .bio .image-container-bio{
      max-width: 600px;
      margin-left: 0;
      left: 0;
    }
  }
</style>