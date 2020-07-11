<template>
    <div>
        <div v-if="images" ref="image" class="imageCompBackground" v-bind:style="{backgroundImage: 'url(' + source.url +')'}"  />
        <img v-else ref="image" class="imageComp" v-bind:src='source.url' v-bind:alt='source.alt' />
    </div>
</template>

<script>
export default {
    name: 'ImageComponent',
    props: {
        source: {
            type: Object,
            required: true,
        },
        images: {
            type: Array,
            required: false,
        }
    },
    mounted() {
        this.interval = 0
        this.currentImage = 0
        this.imagesLoaded = 0
        this.loadedImages()
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        loadedImages() {
            const self = this
            
            if (!this.images) return
            this.images.forEach(im => {
                const img = new Image()
                img.onload = () => {
                    self.imagesLoaded++
                    self.checkLoaded()
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
                
            }, 2000 + (Math.random() * 1000))
        }
    }
    
}
</script>

<style>

    .imageCompBackground{
        height: 400px;
        background-size: cover;
    }

    .imageComp{
        width: 100%;
        
    }

    a[href] .pic:hover .imageCompBackground,a[href] .pic:hover .imageComp:hover{
        box-shadow: rgb(216, 215, 215) 10px 10px 10px;
    }
</style>

