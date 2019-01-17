<template>
    <div>
        <h1>
            <div id='logo'>
                <router-link :to="{ path: '/' }"><img src="~/assets/logo.png" alt=""></router-link>
            </div>
        </h1>

        <nav v-bind:class="{ active: navigation.showing }">

            

            <div class='close' v-on:click="hide">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                    <g>
                        <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
                            C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
                            C514.019,27.23,514.019,14.135,505.943,6.058z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
                            c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/>
                    </g>
                </g>

                </svg>
            </div>

            

            <div class='items'>
                <div class='block'>
                    <p>
                        <router-link class='item-big' :to="{ path: '/' }">Home</router-link>
                    </p>
                </div>
            
                
                <div class='block'>
                    <p class='item-big'>Obras</p>
                    <router-link v-bind:to="{ path: `/obras/${obra.id}`}"  v-for='obra in obras'>{{obra.data.titulo[0].text}}</router-link>
                </div>

                <div class='block'>
                    <p>Ilustraciones</p>
                    <a v-bind:href="`/ilustraciones/${ilustracion.id}`" v-for='ilustracion in ilustraciones'>{{ilustracion.data.titulo[0].text}}</a>
                </div>
                
                <div class='block'>
                    <p>
                        <router-link class='item-big' :to="{ path: '/bio' }">Acerca de mí</router-link>
                    </p>
                    
                    <p>
                        <router-link class='item-big' :to="{ path: '/talleres' }">Talleres</router-link>
                    </p>


                    <p>
                        <router-link class='item-big' :to="{ path: '/exposiciones' }">Exposiciones</router-link>
                    </p>

                    <p>
                        <router-link class='item-big' :to="{ path: '/contacto' }">Contacto</router-link>
                    </p>
                </div>
            </div>
            
            <video autoplay loop src="~/assets/video-nav.mp4"></video>
        </nav>
        <div id='item-menu' v-on:click="show">
            <img src="~/assets/menu.png" alt="">
        </div>

        
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex'
    
    export default {

        name: 'Navigation',

        props: ['categories'],
        
        computed: mapState([
            'obras',
            'ilustraciones',
            'navigation'
        ]),

        methods: {
            ...mapMutations({
                show: 'showNavigation',
                hide: 'hideNavigation',
            })
        }
    }
</script>

<style>
    nav {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        text-align: center;
        z-index: 99999;
    }
    nav.active{
        display: block;
    }
    nav .item-big {
        margin-top: 20px;
        color: black;
        font-size: 26px;
    }

    nav .item-big:hover {
        color: black;
    }

    nav a {
        text-decoration: none;
        color: gray;
        font-size: 19px;
        display: block;
        transition: 0.1s color ease-in;
    }

    nav a:hover {
        color: #ff0;
    }

    nav .work a:nth-of-type(1n){
        color: r ed;
    }
    nav .work a:nth-of-type(2n){
        color: red;
    }
    .close {
        width: 20px;
        height: 20px;
        margin-top: 20px;
        position: fixed;
        right: 10px;
        top: 0px;
    }
    #item-menu {
        cursor: pointer;
        color: #ff0;
        text-shadow: 1px 1px 0 black;
        position: fixed;
        top: 15px;
        right: 25px;
        z-index: 10;
        width: 30px;
        text-align: center;
    }
    #item-menu img {
        width: 100%;
    }

    #logo {
        position: fixed;
        top: 15px;
        left: 20px;
        z-index: 999;
    }

    #logo img {
        width: 45px;
    }

    nav div.block{
        display: inline-block;
        width: 40%;
        vertical-align: top;
        text-align: left;
        margin-top: 50px;
    }

    nav video {
        position: fixed;
        top: 0;
        width: 220px;
        left: 40px;
    }

    .items {
        max-width: 900px;
        margin: auto;
    }

</style>