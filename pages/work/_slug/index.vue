<template>
    <div class='page-container'  v-bind:class="{ 'cols-2': is2Cols() }">
        <router-link style="color: gray; text-decoration: none;" :key="index" v-for="(item, index) in obra" :to="{ path: item.link }">
            <div class='pic'>
                <ImageComponent v-bind:source="{url: item.image, alt: item.title}" v-bind:images="item.images" />
            <div style="letter-spacing: 0.5px; color: gray; text-decoration: none; margin-top: 10px">{{item.title}}</div>
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
        const fetch = {
            'art': 'fetchObras',
            'ilustraciones': 'fetchIlustraciones',
        }
        await store.dispatch({ type: fetch[slug] })
        
    },

    components: {
        SectionTitle,
        ImageComponent,
    },

    computed: mapState({
        obra: function ({ items }) {
            const { params: { slug }, query} = this.$route

            let it = items.filter(({tags}) => query.type ? 
                tags.indexOf(query.type) !== -1 : true)

            return it
        }
    }),

    methods: {
        is2Cols: function() {
            if (process.browser) {
                return document.location.search === ''
            }
        }
    }
}
</script>

<style>
   
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
</style>