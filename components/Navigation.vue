<template>
    <div>
        <h1>
            <div id='logo'>
                <router-link :to="{ path: '/' }">NANA SCHLEZ</router-link>
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
                        <router-link class='item-big' :to="{ path: '/' }">HOME</router-link>
                    </p>
                </div>
            
                
                <div class='block'>
                    <p class='item-big'>OBRAS</p>
                    <router-link v-bind:to="{ path: `/obras/${obra.id}`}"  v-for='obra in obras'>{{obra.data.titulo[0].text}}</router-link>
                </div>

                <div class='block'>
                    <p  class='item-big'>ILUSTRACIONES</p>
                    <router-link v-bind:to="{ path: `/ilustraciones/${ilustracion.id}`}"  v-for='ilustracion in ilustraciones'>{{ilustracion.data.titulo[0].text}}</router-link>
                </div>
                
                <div class='block'>
                    <p  class='item-big'>MURALES</p>
                    <router-link v-bind:to="{ path: `/murales/${mural.id}`}"  v-for='mural in murales'>{{mural.data.titulo[0].text}}</router-link>
                </div>

                <div class='block'>
                    <p>
                        <router-link class='item-big' :to="{ path: '/bio' }">BIO</router-link>
                    </p>
                    
                    <p>
                        <router-link class='item-big' :to="{ path: '/workshop' }">TALLERES</router-link>
                    </p>

                    <p>
                        <div class='item-big'>CONTACTO</div>

                        <div class="contact-social">

                                <a href="http://www.instagram.com/nanaschlez">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/><path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/><path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>
                                </a>
                                <a href="https://www.behance.net/nanaschlez" target="_blank">
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0"/><path d="m241 211c0-33.085938-26.914062-60-60-60h-90v210h90c33.085938 0 60-26.914062 60-60 0-17.90625-7.894531-33.996094-20.378906-45 12.484375-11.003906 20.378906-27.09375 20.378906-45zm-30 90c0 16.542969-13.457031 30-30 30h-60v-60h60c16.542969 0 30 13.457031 30 30zm-90-60v-60h60c16.542969 0 30 13.457031 30 30s-13.457031 30-30 30zm0 0"/><path d="m346 211c-41.355469 0-75 33.644531-75 75s33.644531 75 75 75c26.691406 0 51.582031-14.363281 64.957031-37.488281l-25.96875-15.023438c-8.03125 13.886719-22.972656 22.511719-38.988281 22.511719-19.558594 0-36.238281-12.539062-42.429688-30h117.429688v-15c0-41.355469-33.644531-75-75-75zm-42.429688 60c6.191407-17.460938 22.871094-30 42.429688-30s36.238281 12.539062 42.429688 30zm0 0"/><path d="m286 151h120v30h-120zm0 0"/></svg>
                                </a>
                           
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
                    </p>
                </div>
            </div>
            
            
        </nav>
        <div id='item-menu' v-on:click="show">
            -<br/>
            -<br/>
            -
        </div>


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

        name: 'Navigation',

        props: ['categories'],
        
        computed: mapState([
            'obras',
            'ilustraciones',
            'murales',
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

    #logo {
        position: fixed;
        top: 15px;
        left: 20px;
        z-index: 999;
        animation: blinker 0.5s linear infinite;
        letter-spacing: 1px;
    }

    #logo a{
        color: black;
        text-decoration: none;
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

    nav::after{
        content: "";
        display: block;
        position: fixed;
        pointer-events: none;
        bottom: 0;
        height: 100px;
        width: 100%;
        left: 0;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffff00+0,ffff00+100&0+0,1+100 */
background: -moz-linear-gradient(top, rgba(255,255,0,0) 0%, rgba(199, 153, 249, 0.78) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(255,255,0,0) 0%,rgba(199, 153, 249, 0.78) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(255,255,0,0) 0%,rgba(199, 153, 249, 0.78) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff00', endColorstr='#ffff00',GradientType=0 ); /* IE6-9 */
        z-index: 2;
    }

    .social-icons {
        position: fixed;
        bottom: 10px;
        left: 20px;
        width: 30px;
        z-index: 20;
    }

    .social-icons svg{
        width: 25px;
        height: 25px;
        margin-top: 5px;
    }

    .social-icons svg:hover {

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
</style>