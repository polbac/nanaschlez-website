<template>
    <div id='workshops-marquee' >
        <div
            v-bind:style="{ top: offset + 'px' }" 
            class='workshops-marquee-content' 
            v-html='text'>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WotshopsMarquee',
        data: () => ({
                text: splitCharacters('Workshops todos los martes y miercoles a las 19hs - Preguntar por clases personalizadas. MÁS INFO HACÉ CLICK AQUÍ!'),
                offset: 0, 
                $container: null,
                $text: null,
        }),
        mounted(){
            if (document){
                this.$container = document.querySelector('#workshops-marquee');
                this.$text = document.querySelector('#workshops-marquee .workshops-marquee-content');
                this.offset = this.$container.offsetHeight;
                this.interval = setInterval(this.updateMarquee, 15);  
            }
        },
        destroyed: () => {
            
        },
        methods: {
            updateMarquee(){
                this.offset -= 1;

                if (this.shouldRestartOffset()){
                    this.offset = this.$container.offsetHeight;
                }
            },
            shouldRestartOffset(){
                return (this.offset + this.$text.offsetHeight) < this.$container.offsetHeight;
            }
        },
    }

    function splitCharacters(characters) {
        return characters.split('')
                .map(ch => ch === ' ' ? `<span class='space'>${ch}</span>` : `<span>${ch}</span>`)
                .join('');
    }
</script>

<style>
    #workshops-marquee{
        background: #ff0;
        position: fixed;
        right: 20px;
        top: 60px;
        bottom: 30px;
        width: 40px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 19px;
        overflow: hidden;
        cursor: pointer;
        z-index: 10;
    }

    #workshops-marquee::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        height: 100px;
        width: 100%;
        left: 0;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffff00+1,ffff00+100&1+0,0+100 */
        background: -moz-linear-gradient(top, rgba(255,255,0,1) 0%, rgba(255,255,0,0.99) 1%, rgba(255,255,0,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(255,255,0,1) 0%,rgba(255,255,0,0.99) 1%,rgba(255,255,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(255,255,0,1) 0%,rgba(255,255,0,0.99) 1%,rgba(255,255,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff00', endColorstr='#00ffff00',GradientType=0 ); /* IE6-9 */
        z-index: 2;
    }

    #workshops-marquee::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        height: 100px;
        width: 100%;
        left: 0;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffff00+0,ffff00+100&0+0,1+100 */
background: -moz-linear-gradient(top, rgba(255,255,0,0) 0%, rgba(255,255,0,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(255,255,0,0) 0%,rgba(255,255,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(255,255,0,0) 0%,rgba(255,255,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff00', endColorstr='#ffff00',GradientType=0 ); /* IE6-9 */
        z-index: 2;
    }

    #workshops-marquee:hover{
        box-shadow: 5px 5px 0 black;
    }

    #workshops-marquee .workshops-marquee-content{
        position: absolute;
        width: 100%;
    }

    #workshops-marquee span{
        display: block;
    }

    #workshops-marquee span.space{
        margin-bottom: 20px;
    }
</style>

