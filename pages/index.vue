<template>
  <div class='home-container' ref='container' v-bind:style="{top: `${scrollPosition}px`}">
    <div>
      <HomeModuleComponent v-for="module in home" v-bind:data="module" />
    </div>
    <div>
      <HomeModuleComponent v-for="module in home" v-bind:data="module" />
    </div>
    <div>
      <HomeModuleComponent v-for="module in home" v-bind:data="module" />
    </div>
  </div>
</template>
<script>
import config from '../config';
import { mapState } from 'vuex';
import { HomeModuleComponent } from '../components';
import { scrollPosition, viewportHeight } from '../utils';

export default {

  components: { HomeModuleComponent },

  layout: 'default',
  
  data() {
    return {
      title: config.title,
      scrollPosition: 0,
      viewportHeight: 0,
      contentHeight: 0,
    }
  },
  
  fetch: ({ store }) => {
    store.dispatch({ type: 'fetchHome' })
  },
  
  computed: mapState(['home']),
  
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: config.title }
      ]
    }
  },
  
  mounted() {
    if (window.addEventListener) {
      window.addEventListener('resize', this.setContentAndViewportProperties);
      window.addEventListener('mousewheel', this.handleWheel);
      window.addEventListener('DOMMouseScroll', this.handleWheel);
    } else {
      window.attachEvent("onmousewheel", this.handleWheel);
    }
    this.setContentAndViewportProperties();
  },
  methods:{

    handleScroll() {
      const scrollPosition = scrollPosition();
    },

    handleWheel(event) {
      const delta = event.deltaY;
      if (delta === 0) {
        return;
      }

      if (delta > 0) {
        if (this.scrollPosition <= 0 - this.contentHeight) {
          this.scrollPosition = 0;
        }

      }

      if (delta < 0) {
        if (this.scrollPosition >= 0) {
          this.scrollPosition = 0 - this.contentHeight;
        }
      }

      this.scrollPosition -= delta;


    },

    setContentAndViewportProperties() {
      const { container } = this.$refs;
      this.contentHeight = container.offsetHeight / 3;
      this.viewportHeight = viewportHeight();
    }

  },
  beforeDestroy(){
    window.removeEventListener('resize', this.setContentAndViewportProperties);

  },
}
</script>

<style>
  .home-container{
    max-width: initial;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 640px){
    padding-right: 60px;
  }
</style>