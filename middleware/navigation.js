import { mapMutations } from 'vuex'

export default function ({ store }) {
  store.commit('hideNavigation');
}