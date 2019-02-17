<template>
    <div >
        <SectionTitle v-bind:text='obra.data.titulo[0].text' />
        
        <div class='description'>
            <Parraph v-bind:text='obra.data.descripcion' />
        </div>

        <div v-for="image in obra.data.series" >
            <div class='pic'>
                <ImageComponent  v-bind:source="image.imagen" />
                <div class='foot-title' v-if="image.titulo1[0]">{{image.titulo1[0].text}}</div>
                <div class='foot-desc' v-if="image.descripcion1[0]">{{image.descripcion1[0].text}}</div>
                <div class='foot-tec' v-if="image.tecnica[0]">{{image.tecnica[0].text}}</div>

                <div class='sell' v-if="obra.data.se_vende=='Si'">
                    <div clas="tit"><b>¿LO QUERÉS EN POSTER?</b></div>
                    Sale $ {{obra.data.precio}}
                    <button class='buy-poster'>COMPRAR</button>
                </div>
            </div>
        </div>

        
    </div>
  
</template>

<script>
import config from '../../config';
import { SectionTitle, ImageComponent, Parraph } from '../../components'
import { mapState } from 'vuex';

export default {
    head: {
        title: `${config.title} - obras`
    },
    layout: 'default',
    components: {
        SectionTitle,
        ImageComponent,
        Parraph,
    },
    fetch: ({ store, params }) => store.dispatch({ type: 'fetchIlustracionById', id: params.id }),
    computed: mapState({
        obra: function ({ ilustraciones }) {
            const id = this.$route.params.id;
            const ilustracion = ilustraciones.find(obra => obra.id === id);
            return ilustracion;
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