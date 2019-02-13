import config from './config';

export default {
  loading: '~/components/Loading.vue',
  head: {
    title: config.title
  },
  generate: {
    routes: [

    ]
  },
  routes: {
    middleware: 'navigation'
  },
  plugins: [
    { src: '~/plugins/masonry', ssr: false }
   ]
}
