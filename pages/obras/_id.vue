<template>
    <div>
        <SectionTitle v-bind:text='obra.data.titulo[0].text' />
        
        <div class='description'>
            <Parraph v-bind:text='obra.data.descripcion' />
        </div>

        <div v-for="image in obra.data.imagenes" >
            <div class='pic'>
                <ImageComponent  v-bind:source="image.imagen" />
                <div class='foot-title' v-if="image.titulo1[0]">{{image.titulo1[0].text}}</div>
                <div class='foot-desc' v-if="image.descripcion1[0]">{{image.descripcion1[0].text}}</div>
                <div class='foot-tec' v-if="image.tecnica[0]">{{image.tecnica[0].text}}</div>
            </div>
        </div>
    </div>
  
</template>

<script>
import config from '../../config';
import { SectionTitle, Parraph, ImageComponent } from '../../components'
import { mapState } from 'vuex'
import { widhtHead } from '../../utils/head'


export default {
    head() {
        return widhtHead(
            `${this.obra.data.titulo[0].text}`, 
            this.obra.data.descripcion[0].text,
            this.obra.data.imagenes[0].imagen.url,
            this.$route.fullPath
        )
    },
    layout: 'default',
    components: {
        SectionTitle,
        Parraph,
        ImageComponent,
    },
    async fetch({ store, params }){
        await store.dispatch({ type: 'fetchObraById', id: params.id })
    },
    computed: mapState({
        obra: function ({ obras }) {
            const id = this.$route.params.id;
            const obra = obras.find(obra => obra.id === id);
            return obra;
        }
    }),
    
}
</script>

<style>

    .pic{
        margin-bottom: 60px;
        border-bottom: 1px solid gray;
        padding-bottom: 60px;
        text-align: center
    }

    .foot-title{
        margin-top: 20px;
        font-size:18px;
        margin-top: 5px;
        color: gray;
        margin-bottom: 10px;
    }

    .description{
        margin-bottom: 50px;
        color: gray;
    }
</style>