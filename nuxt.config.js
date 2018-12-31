export default {
  loading: '~/components/Loading.vue',
  head: {
    title: 'Default title'
  },
  generate: {
    routes: [
      '/posts/1'
    ]
  },
  routes: {
    middleware: 'navigation'
  }
}
