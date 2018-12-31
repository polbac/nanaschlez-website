import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import config from '../config';

const createStore = () => {
  return new Vuex.Store({
    state: {
      bio: '',
      home: null,
      obras: config.prismic.documents.obras,
      ilustraciones: config.prismic.documents.ilustraciones,
      randomStuff: null,
      navigation: {
        showing: false,
      },
    },
    mutations,
    actions,
  })
}

export default createStore