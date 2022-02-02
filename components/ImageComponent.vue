<template>
    <div>
        <div v-if="isZoom" class="zoom">
            <img v-on:click="isZoom=false" v-bind:src='source.url' width="80%" />
        </div>


        <div v-if="images" ref="image" class="imageCompBackground" v-bind:style="{backgroundImage: 'url(' + source.url +')'}"  />
        <img v-else v-on:click="isZoom=true && useZoom" ref="image" class="imageComp" v-bind:src='source.url' v-bind:alt='source.alt' />
        
        

    </div>
    
</template>

<script>
export default {
    data() {
        return {isZoom: false, imageList: []}
    },
    name: 'ImageComponent',
    props: {
        source: {
            type: Object,
            required: true,
        },
        images: {
            type: Array,
            required: false,
        },
        useZoom: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    mounted() {
        this.interval = 0
        this.currentImage = 0
        this.imagesLoaded = 0
        this.loadedImages()
        console.log(this.images)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        zoom: function() {
            this.isZoom = true;
        },
        hideZoom: function() {
            this.isZoom = false;
        },
        loadedImages() {
            const self = this
            
            if (!this.images) return
            this.images.forEach((im, index) => {
                const img = new Image()
                img.onload = () => {
                    self.imagesLoaded++
                    self.checkLoaded()
                    self.imageList[index] = this
                }
                img.src = im.imagen.url
            })
        },
        checkLoaded() {
            if (this.images.length === this.imagesLoaded) {
                this.startCarrusel()
            }
        },
        startCarrusel() {
            const self = this
            this.interval = setInterval(() => {
                self.currentImage++

                if (self.currentImage === self.images.length) {
                    self.currentImage = 0
                }

                self.$refs.image.style.backgroundImage = `url(${self.images[self.currentImage].imagen.url})`
                self.$refs.image.style.height = self.imageList[self.currentImage].height
                
            }, 2000 + (Math.random() * 1000))
        }
    }
    
}
</script>

<style>

    .imageCompBackground{
        height: 400px;
        background-size: cover;
        background-position: center;
    }

    .imageComp{
        width: 100%;
        cursor: pointer;    
    }

    @media (max-width: 640px) {
        .zoom{
            display: none !important;
        }
    }

    .zoom{
        background: rgba(0,0,0,0.8);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999999;
        overflow-y: scroll;
        cursor: crosshair;;
    }
    .zoom img{
        width: 80%;
    }

    a[href] .pic:hover .imageCompBackground,a[href] .pic:hover .imageComp:hover{
        box-shadow: rgb(216, 215, 215) 10px 10px 10px;
    }
</style>

