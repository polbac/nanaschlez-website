<template>
    <div class='page-container'>
        <div class="item-shop" :key="index" v-for="(item, index) in shop.results[0].data.items">
            <img v-bind:src="item.image.url" width="100%"/>
            <div v-if="item.link.url">
            <p v-id="item.title.length > 1">{{item.title[0].text}}</p>
            <p v-id="item.precio > 1">{{item.precio[0].text}}</p>
            <p>
                <a v-bind:href='item.link.url' class='button'>Comprar</a>
            </p>
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
    async fetch({ store }) {

        await store.dispatch({ type: 'fetchShop' })
        
    },

    components: {
        SectionTitle,
        ImageComponent,
    },

    computed: mapState(['shop'])
}
</script>

<style>

    .button{
        border: 1px solid black;
        color: pink;
        text-decoration: none;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .item-shop{
        width: 50%;
        padding: 10px;
        margin-bottom: 100px;
    }
</style>