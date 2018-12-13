<template>
  
  
</template>

<script>
import config from '../../config';
import { SectionTitle, Parraph, ImageComponent } from '../../components'
import { mapState } from 'vuex';

export default {
    head: {
        title: `${config.title} - obras`
    },
    layout: 'default',
    components: {
        SectionTitle,
        Parraph,
        ImageComponent,
    },
    fetch: ({ store, params }) => store.dispatch({ type: 'fetchObraById', id: params.id }),
    computed: mapState([
      'obra'
    ]),
    
}
</script>

<style>
</style>