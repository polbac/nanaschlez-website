<template>
    <div>
        <SectionTitle v-bind:text='obra.data.titulo[0].text' />
        <ImageComponent v-for="image in obra.data.imagenes" v-bind:source="image.imagen" />
    </div>
  
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
    computed: mapState({
        obra: function ({ obras }) {
            const id = this.$route.params.id;
            const obra = obras.find(obra => obra.id === id);
            return obra.detail;
        }
    }),
    
}
</script>

<style>
</style>