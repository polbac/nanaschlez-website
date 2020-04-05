<template>
<div class='page-container'>
    <div v-if="obra">
        <div v-bind:style="{ color: obra.data.color }">
            <SectionTitle v-bind:text='obra.data.titulo[0].text' />
            
            <div class='description'>
                <Parraph v-bind:text='obra.data.descripcion' />
            </div>
        </div>

        <div v-for="image in obra.data.series" >
            <div class='pic'>
                <ImageComponent  v-bind:source="image.imagen" />
                <div class='foot-title' v-if="image.titulo1[0]">{{image.titulo1[0].text}}</div>

            </div>
        </div>

        
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
                `${this.obra.data.titulo[0].text}`, 
                this.obra.data.descripcion[0].text,
                this.obra.data.series[0].imagen.url,
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
        await store.dispatch({ type: 'fetchMuralById', id: params.id })
    },
    computed: mapState({
        obra: function ({ murales }) {
            const id = this.$route.params.id;
            const mural = murales.find(obra => obra.id === id);
            return mural;
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
        text-transform: uppercase;
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