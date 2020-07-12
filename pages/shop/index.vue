<template>
    <div class='page-container'>
    <SectionTitle text='Tienda Online' />
    <p class="body">
        Si te gustaría adquirir alguna de estas láminas o algún retrato personalizado enviá un email a nanaschlez@gmail.com así arreglamos forma de pago y envío.
    </p>
    <div v-masonry transition-duration="0.3s" item-selector=".item-shop" class="masonry-container">
        <div v-masonry-tile class="item-shop" :key="index" v-for="(item, index) in shop.results[0].data.items">


            <img v-bind:src="item.image.url" width="100%"/>
            
            <p class='title'>{{item.title[0].text}} <span class='precio' v-id="item.precio > 1">{{item.precio[0].text}}</span></p>
            

        
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

    computed: mapState(['shop']),

    mounted () {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    }
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
        padding-right: 25px;
        padding-bottom: 30px;
        box-sizing: border-box;
    }

    .title{
        text-transform: uppercase;
        font-size: 12px;
        text-align: center;
    }
    .precio{
            text-transform: uppercase;
    font-size: 12px;
    background-color: rgb(234, 229, 227);
    color: #4c4a4a;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    }

    .body{
        color: black;
        font-size: 16px;
        margin-bottom: 50px;
        
    }

    @media (max-width: 600px) {
    .precio{
      display: block;
      margin-top: 10px;
      margin-bototm: 50px;
    }
  }
</style>