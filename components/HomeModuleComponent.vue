<template>
    <article class='home-module-component'>
        <p>{{data.title}}</p>
        <div ref='imageContainer' class='image-container'>
            <a v-bind:href='data.link' v-if="data.type === 'random-stuff'">
                <img ref='image' />
            </a>

            <router-link :to="{ path: data.link }" v-if="data.type !== 'random-stuff'">
                <img ref='image' />
            </router-link>
        </div>
    </article>
</template>

<script>
    import config from '../config';

    export default {
        name: 'HomeModuleComponent',
        data() {
            return {
                imageLoaded: false,
            }
        },
        props: {
            data: {
                type: Object,
                required: true,
            }
        },
        methods: {
            handleResize() {
                const { imageContainer } = this.$refs;
                const container = imageContainer.parentNode;
                const imageRes = this.originalImageWidth / this.originalImageHeight;
                const containerRes = container.offsetWidth / container.offsetHeight;
                const margin = this.data.type === 'random-stuff' ? 10 : config.home.moduleMargin;
                let imageWidth, imageHeight, marginLeft, marginTop;
                
                if (imageRes > containerRes) {
                    imageWidth = container.offsetWidth - (margin * 4);
                    imageHeight = this.originalImageHeight * imageWidth / this.originalImageWidth;
                } else {
                    imageHeight = container.offsetHeight - (margin * 2);
                    imageWidth = this.originalImageWidth * imageHeight / this.originalImageHeight;
                    
                }

                marginLeft = (container.offsetWidth - imageWidth) / 2;
                marginTop = (container.offsetHeight - imageHeight) / 2;

                imageContainer.style.marginTop = `${marginTop}px`;
                imageContainer.style.marginLeft = `${marginLeft}px`;
                imageContainer.style.width = `${imageWidth}px`;
                imageContainer.style.height = `${imageHeight}px`;
            },
        },

        mounted() {
            window.addEventListener('resize', this.handleResize)
            this.originalImageWidth = this.data.image.dimensions.width;
            this.originalImageHeight = this.data.image.dimensions.height;

            this.handleResize();

            const { image } = this.$refs;
            
            const loadImage = new Image();
            loadImage.onload = () => {
                image.src = this.data.image.url;
                image.classList.add('loaded');
            };

            loadImage.src = this.data.image.url;
        },
        
        beforeDestroy   () {
            window.removeEventListener('resize', this.handleResize)
        }
    }
</script>

<style>
.image-container:hover{
    
}
.home-module-component{
    height: 85vh;
    width: 100%;   
    display: inline-block;
    text-align: center;
    vertical-align: top;
    margin-bottom: 100px;
}   



.home-module-component img{
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;

    transition: .3s opacity ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.home-module-component img.loaded{
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
    opacity: 1;
}

.home-module-component p{
    position: absolute;
    width: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
}
</style>

