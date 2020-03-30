<template>
    <div class='page-container'>
        <router-link :key="index" v-for="(item, index) in obra" :to="{ path: item.link }">
            <div class='pic'>
            <ImageComponent v-bind:source="{url: item.image, alt: item.title}" />
            </div>
        </router-link>
        
    </div>
    
  
</template>

<script>
import config from '../../../config';
import { SectionTitle, Parraph, ImageComponent } from '../../../components'
import { mapState } from 'vuex'
import { widhtHead } from '../../../utils/head'


export default {
    async fetch({ store, route }) {
        const { params: { slug } } = route
        if (slug === 'commitment') {
            await store.dispatch({ type: 'fetchCommitment' })
            return
        }
        
        if (slug === 'books') {
            await store.dispatch({ type: 'fetchBooks' })
            return
        }

        await store.dispatch({ type: 'fetchSelf' })
        
    },

    components: {
        SectionTitle,
        ImageComponent,
    },

    computed: mapState({
        obra: function ({ obra, pedido, books }) {
            const { params: { slug }} = this.$route
            
            if (slug === 'commitment') {
                return pedido;
            }

            if (slug === 'books') {
                return books;
            }
        
            return obra.filter(item => {
                return item.type === slug
            })
        }
    })
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
</style>