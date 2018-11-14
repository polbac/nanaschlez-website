import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      bio: '',
      categories: [
        'Ilustración',
        'Libros',
        'Murales',
        'Soplado Absoluto',
        'Ajugeros negros',
        'Chorreado',
        'Stencil',
        'Mini Nanas',
      ],
      navigation: {
        showing: false,
      },
    },
    mutations,
    actions,
  })
}

export default createStore