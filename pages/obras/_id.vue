<template>
    <div class="page-container">
        <div >

        <SectionTitle  v-if="obra.data.titulo.length >= 1" v-bind:text='obra.data.titulo[0].text' />
        
        <div class='description'>
            <Parraph v-if="obra.data.descripcion.length >= 1" v-bind:text='obra.data.descripcion' />
        </div>
        </div>

        <div v-for="image in obra.data.imagenes" >
            <div class='pic'>
                <ImageComponent useZoom="true" v-bind:source="image.imagen" />
                <div class='foot-title' v-if="image.titulo.length >= 1">{{image.titulo[0].text}}</div>
                <div class='foot-desc' v-if="image.descripcion.length >= 1">{{image.descripcion[0].text}}</div>
                <div class='foot-tec' v-if="image.tecnica.length >= 1">{{image.tecnica[0].text}}</div>
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
            `${this.obra.data.titulo.length >= 1 ? this.obra.data.titulo[0].text : ''}`, 
            this.obra.data.descripcion.length >= 1 ? this.obra.data.descripcion[0].text : '',
            this.obra.data.imagenes.length >= 1 ? this.obra.data.imagenes[0].imagen.url : '',
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
            
            obra.data.titulo = obra.data.titulo || obra.data.titulo1 || []
            obra.data.descripcion = obra.data.descripcion || obra.data.descripcion1 || []
            obra.data.imagenes = obra.data.imagenes || obra.data.imagenes1 || []

            obra.data.imagenes = obra.data.imagenes.map(im => {
                im.titulo = im.titulo || im.titulo1 || [];
                im.descripcion = im.descripcion || im.descripcion1 || [];
                im.tecnica = im.tecnica || im.tecnica1 || [];

                return im
            })

            console.log(obra)
    
            return obra;
        }
    }),
    
}
</script>

<style>

.page-container{
    margin-left: 200px;
    margin-right: 200px;
}


    .foot-title{
        margin-top: 20px;
        font-size:18px;
        margin-top: 5px;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 20px;
        font-family: "RoslindaleVariable";
        color: black;
    }

    .foot-desc{
color: black;
        font-size: 12px;
        
    }


    .foot-tec{
        color: black;
        text-transform: uppercase;
        font-size: 12px;
    }
</style>