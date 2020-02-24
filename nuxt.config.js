export default {
  loading: '~/components/Loading.vue',
  head: {
    title: 'nana schlez'
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
