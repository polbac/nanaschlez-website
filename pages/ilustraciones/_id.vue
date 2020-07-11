<template>
    <div v-if="obra" class="page-container">
        <div v-bind:style="{ color: obra.data.color }">
        <SectionTitle  v-if="obra.data.titulo.length>= 1" v-bind:text='obra.data.titulo[0].text' />
        
            <div class='description'>
                <Parraph  v-if="obra.data.descripcion.length> 1" v-bind:text='obra.data.descripcion' />
            </div>

        </div>

        <div v-for="image in obra.data.series" class='pic'>
            
                <ImageComponent  v-bind:source="image.imagen" />
                <div class='foot-title' v-if="image.titulo.length >= 1">{{image.titulo[0].text}}</div>
                <div class='foot-desc' v-if="image.descripcion.length >= 1">{{image.descripcion[0].text}}</div>
                <div class='foot-tec' v-if="image.tecnica.length >= 1">{{image.tecnica[0].text}}</div>
        </div>

        
    </div>
  
</template>

<script>
import { mapState } from 'vuex'
import config from '../../config'
import { SectionTitle, ImageComponent, Parraph } from '../../components'
import { widhtHead } from '../../utils/head'

export default {
    head() {
        if(this.obra) {
            return widhtHead(
                 `${this.obra.data.titulo.length >= 1 ? this.obra.data.titulo[0].text : ''}`, 
            this.obra.data.descripcion.length >= 1 ? this.obra.data.descripcion[0].text : '',
            this.obra.data.series.length >= 1 ? this.obra.data.series[0].imagen.url : '',
            this.$route.fullPath
            )
        }

        return {}
        
    },
    layout: 'default',
    components: {
        SectionTitle,
        ImageComponent,
        Parraph,
    },
    async fetch({ store, params }){
        await store.dispatch({ type: 'fetchIlustracionById', id: params.id })
    },
    computed: mapState({
        obra: function ({ ilustraciones }) {
            const id = this.$route.params.id;
            const obra = ilustraciones.find(obra => obra.id === id);

            
            obra.data.titulo = obra.data.titulo || obra.data.titulo1 || []
            obra.data.descripcion = obra.data.descripcion || obra.data.descripcion1 || []
            obra.data.series = obra.data.series || obra.data.series1 || []

            obra.data.series = obra.data.series.map(im => {
                im.titulo = im.titulo || im.titulo1 || [];
                im.descripcion = im.descripcion || im.descripcion1 || [];
                im.tecnica = im.tecnica || im.tecnica1 || [];

                return im
            })
            return obra;
        }
    }),
    
}
</script>

<style>
   

    .foot-title{
        margin-top: 20px;
        font-size:18px;
        margin-top: 5px;
        color: gray;
        margin-bottom: 10px;
    }

    .description{
        margin-bottom: 50px;
        line-height: 30px;
        
    }

    .buy-poster{
        background: yellow;
        border: 0;
        margin-top: 30px;
        cursor: pointer;
        padding-top:5px;
        padding-bottom:5px;
        padding-left:15px;
        padding-right:15px;
        font-weight: bold;
        font-size: 15px;
        font-family: 'Source Sans Pro', helvetica, arial, sans-serif;
        margin-left: 15px;
        box-shadow: 5px 5px 0 black;
    }

    .sell{
        border: 1px solid #ffdb00;
        margin: auto;
        margin-top: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        max-width: 230px;
    }

    .sell .tit{
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>