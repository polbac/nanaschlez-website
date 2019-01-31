import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import config from '../config';

export const initialStore = {
  state: {
    bio: '',
    home: null,
    obras: config.prismic.documents.obras,
    ilustraciones: config.prismic.documents.ilustraciones,
    workshop: null,
    randomStuff: null,
    navigation: {
      showing: false,
    },
  },
  mutations,
  actions,
};

const createStore = () => {
  return new Vuex.Store(initialStore)
}

export default createStore