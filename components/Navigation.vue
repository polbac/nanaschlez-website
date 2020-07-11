<template>
    <div>
        <h1>
            <div id='logo' class='animation-menu'>
                
                <router-link :to="{ path: '/' }">
                    <div >
                        <span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ<span>NANA</span>SCHLEZ
                    </div>
                </router-link>
                
            </div>
        </h1>

        <div class='overlay' v-bind:style="{display: show ? 'block' : 'none' }" />

        <nav class="desktop">
            <a v-bind:style="{display: !show ? 'block' : 'none' }" class="menu" v-on:click="showNavigation()">MENU</a>
            <span class='other-items' v-bind:style="{display: show ? 'block' : 'none' }">
                <router-link v-bind:class='checkActive("work/art")' v-on:click.native="hideNavigation()" :to="{ path: '/work/art' }">OBRA</router-link>
                <router-link v-bind:class='checkActive("work/ilustraciones")' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones' }">ILUSTRACIONES</router-link>
                <div class="ilustraciones-submenu" v-bind:style="{display: shouldShowSubmenuIllustration() ? 'block' : 'none' }">
                    <router-link  v-bind:class='checkSubActive(["libros", "infantil", "cubiertas"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=libros' }">LIBROS</router-link>
                    <div class="submenu-submenu"  v-bind:style="{display: showSubSubmenu(['libros','infantil', 'cubiertas']) ? 'block' : 'none' }">
                        <router-link v-bind:class='checkSubActive(["infantil"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=infantil' }">INFANTIL</router-link>
                        <router-link v-bind:class='checkSubActive(["cubiertas"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=cubiertas' }">CUBIERTAS</router-link>
                    </div>
                    <router-link v-bind:class='checkSubActive(["discos"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=discos' }">DISCOS</router-link>
                    <router-link v-bind:class='checkSubActive(["proyectos"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=proyectos' }">PROYECTOS</router-link>
                    <router-link v-bind:class='checkSubActive(["cine"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=cine' }">CINE</router-link>
                    <router-link v-bind:class='checkSubActive(["publicidad", "branding", "acciones"])'  v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=publicidad' }">PUBLICIDAD</router-link>
                    <div class="submenu-submenu" v-bind:style="{display: showSubSubmenu(['publicidad', 'branding', 'acciones']) ? 'block' : 'none' }">
                        <router-link  v-bind:class='checkSubActive(["branding"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=branding' }">BRANDING</router-link>
                        <router-link v-bind:class='checkSubActive(["acciones"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=acciones' }">ACCIONES</router-link>
                    </div>
                    <router-link  v-bind:class='checkSubActive(["retratos"])' v-on:click.native="hideNavigation()" :to="{ path: '/work/ilustraciones?type=retratos' }">RETRATOS</router-link>
                </div>
                <router-link v-bind:class='checkActive("shop")' v-on:click.native="hideNavigation()" :to="{ path: '/shop' }">SHOP</router-link>
                <router-link v-bind:class='checkActive("bio")' v-on:click.native="hideNavigation()" :to="{ path: '/bio' }">BIO</router-link>
            </span>
        </nav>


        <div class="social-icons">
      <div class="social-icons-icon">
        <a href="http://www.instagram.com/nanaschlez">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/><path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/><path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>
        </a>

      </div>

      <div class="social-icons-icon">
          <a href="https://www.behance.net/nanaschlez" target="_blank">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0"/><path d="m241 211c0-33.085938-26.914062-60-60-60h-90v210h90c33.085938 0 60-26.914062 60-60 0-17.90625-7.894531-33.996094-20.378906-45 12.484375-11.003906 20.378906-27.09375 20.378906-45zm-30 90c0 16.542969-13.457031 30-30 30h-60v-60h60c16.542969 0 30 13.457031 30 30zm-90-60v-60h60c16.542969 0 30 13.457031 30 30s-13.457031 30-30 30zm0 0"/><path d="m346 211c-41.355469 0-75 33.644531-75 75s33.644531 75 75 75c26.691406 0 51.582031-14.363281 64.957031-37.488281l-25.96875-15.023438c-8.03125 13.886719-22.972656 22.511719-38.988281 22.511719-19.558594 0-36.238281-12.539062-42.429688-30h117.429688v-15c0-41.355469-33.644531-75-75-75zm-42.429688 60c6.191407-17.460938 22.871094-30 42.429688-30s36.238281 12.539062 42.429688 30zm0 0"/><path d="m286 151h120v30h-120zm0 0"/></svg>
          </a>
      </div>

      <div class="social-icons-icon">
          <a href="mailto:nanaschlez@gmail.com" target="_blank">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 205.996 205.996" style="enable-background:new 0 0 205.996 205.996;" xml:space="preserve">
<g>
	<path d="M102.996,61.363c22.958,0,41.635,18.678,41.635,41.635c0,3.313,2.687,6,6,6s6-2.687,6-6
		c0-29.574-24.061-53.635-53.635-53.635S49.36,73.424,49.36,102.998s24.061,53.635,53.635,53.635
		c18.99,0,36.745-10.195,46.336-26.607c1.672-2.861,0.708-6.535-2.153-8.208c-2.86-1.67-6.535-0.707-8.208,2.153
		c-7.448,12.745-21.233,20.662-35.976,20.662c-22.958,0-41.635-18.678-41.635-41.635S80.038,61.363,102.996,61.363z"/>
	<path d="M205.698,95.053c-3.76-50.059-44.326-90.782-94.359-94.727C81.095-2.059,51.51,8.817,30.163,30.165
		C8.815,51.513-2.061,81.1,0.324,111.341c3.931,49.847,44.483,90.399,94.329,94.329c2.747,0.217,5.484,0.323,8.214,0.323
		c27.329,0,53.553-10.753,72.962-30.161c2.343-2.344,2.343-6.143,0-8.485s-6.142-2.344-8.485-0.001
		c-18.862,18.861-45.012,28.47-71.747,26.361c-44.023-3.471-79.838-39.286-83.31-83.31c-2.108-26.735,7.5-52.887,26.361-71.747
		c18.861-18.861,45.008-28.473,71.747-26.361c44.189,3.483,80.016,39.451,83.337,83.662c0.455,6.057,0.321,12.142-0.397,18.086
		c-0.762,6.304-4.578,11.805-10.208,14.713c-5.095,2.633-10.819,2.623-15.706-0.026c-2.913-1.582-6.556-0.499-8.134,2.415
		c-1.58,2.913-0.499,6.555,2.415,8.134c8.435,4.573,18.251,4.623,26.933,0.139c9.164-4.734,15.375-13.682,16.613-23.935
		C206.06,108.758,206.211,101.887,205.698,95.053z"/>
</g>
</svg>


          </a>
      </div>
    </div>

        
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex'
    
    export default {

        watch: {
            '$route': function (id) {
            this.$forceUpdate()
            }
        },

        data() {
            return {
                show: false,
            }
        },

        name: 'Navigation',

        props: ['categories'],
        
        computed: mapState([
            'obras',
            'ilustraciones',
            'murales',
            'navigation'
        ]),

        methods: {
            showNavigation: function() {
                this.show = true;    
            },

            hideNavigation: function() {
                this.show = false;
            },

            checkActive: function(r) {
                if (process.browser) {
                    return document.location.pathname.indexOf(r) !== -1 ? 'active' : ''
                }
            },

            showSubSubmenu: function(words) {
                if (process.browser) {
                    return words.reduce((accumulator, currentValue) => {
                        return document.location.search.indexOf(currentValue) !== -1 || accumulator
                    }, false)
                }
            },

            shouldShowSubmenuIllustration: function() {
                if (process.browser) {
                    return document.location.pathname.indexOf('ilustraciones') !== -1
                }
            },

            checkSubActive: function(types) {
                if (process.browser) {
                    const type =  document.location.search.split('?type=')[1]
                    return types.indexOf(type) !== -1 ? 'active' : ''
                }
            }
        }
    }
</script>

<style>
    @keyframes blinker {
        49% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        99% {
            opacity: 0;
        }
    }

    .overlay{
        background: rgba(255,255,255,0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
    nav.desktop{
        display: block;
        position: fixed;
        text-align: left;
        bottom: 20px;
        left: 20px;
        font-weight: 900;
        height: auto; 
        width: auto;
        background: transparent;
        top: auto;
        
    }
    nav.desktop a:hover{
        font-weight: 100;
    }

    nav.desktop a.active:hover{
        font-weight: 600;
    }
    nav.desktop a{
        font-size: 50px;
        background: rgb(74,85,82);
        
        background: -moz-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
        background: linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4a5552",endColorstr="#4a5552",GradientType=1);
        
        background-attachment: fixed;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        animation-timing-function: linear;
        background-size: auto 318px;
        animation-name: menu-gradient;
        animation-duration: 4s;
        animation-iteration-count: infinite;

    }
    @keyframes menu-gradient {
        0% {background-position: 0px 0px;}
        100% {background-position: 0px 318px;}
    }


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
        text-decoration: underline
    }

    nav .work a:nth-of-type(1n){
        color: r ed;
    }
    nav .work a:nth-of-type(2n){
        color: red;
    }

    .contact-social{
        margin-top:15px;
    }
    .contact-social a{
        display: inline;
    }
    .contact-social svg{
        width: 30px;
        height: 30px;
    }

    nav .ilustraciones-submenu a{
        font-size: 25px;
        margin-left: 20px;
    }

    nav .ilustraciones-submenu > a{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    nav .submenu-submenu{
        display: none;
    }
    nav .submenu-submenu a{
        margin-left: 40px;
        font-size: 20px;
    }
    .close {
        width: 20px;
        height: 20px;
        margin-top: 18px;
        position: fixed;
        right: 28px;
        top: 0px;
        cursor: pointer;
    }
    #item-menu {
        cursor: pointer;
        color: #000;
        position: fixed;
        top: 15px;
        right: 25px;
        z-index: 10;
        width: 30px;
        text-align: center;
        line-height: 9px;
        font-size: 41px;
    }
    #item-menu img {
        width: 100%;
    }
    #logo:hover a{
        color: #8588b7;
    }
    #logo {
        position: fixed;
        top: 15px;
        left: -369px;
        z-index: 999;
        
        letter-spacing: 1px;
        white-space: nowrap;
    }

    #logo a{
        font-weight: 100;
        color: black;
        
        
        
        
        font-size: 50px;
        text-decoration: none;
    }

    #logo a span{
        font-weight: 900;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;       
        color: transparent;
    }

    #logo img {
        width: 45px;
    }

    nav div.block{
        display: inline-block;
        width: 40%;
        vertical-align: top;
        text-align: left;
        margin-bottom: 20px;
        line-height: 24px;
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
        display: flex;
        align-items: normal;
        justify-content: flex-start;
        height: 570px;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top:100px;
    }

    

    .social-icons {
        position: fixed;
        bottom: 10px;
        left: 20px;
        width: 30px;
        z-index: 20;
        display: none;
    }

    .social-icons svg{
        width: 25px;
        height: 25px;
        margin-top: 5px;
    }



    @media(max-width:640px){
        
        nav .items .block{
            width: 80%;
            margin-top: 0;
        }
        nav .items
        {
            flex-direction: row;
            padding: 20px;
            margin-top: 0;
        }
        nav{
            overflow: auto;
            margin-top: 0;
        }
        nav video{
            position: static;
        }
        #item-menu{
            right: 5px;
        }
         .close {
             right: 10px;
         }
    }
    
    .animation-menu{
        animation-name: marquee;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    
     @keyframes marquee {
        0% {left: 0;}
        100% {left: -738px;}
    }

    .workshop{
        display: none;
    }

    .menu{
        display: none;
    }

    @media (max-width: 600px) {
        .workshop{
            display: block;
        }
        .menu{
            display: block;
        }
        .other-items{
            display: none;
        }
        nav.desktop{
            left: 15px;
        }
        nav.desktop a{
            font-size: 30px;
        }

        
    }

    @media (min-width: 601px) {
        .other-items{
            display: block !important;
        }
        .menu{
        display: none !important;
    }
    }

    nav a.active{
            filter: blur(2px) !important;
        }
</style>