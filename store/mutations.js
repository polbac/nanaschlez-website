
import { randomItem, shuffleArray } from '../utils';

const mutations = {
    
  setHome(state, { obras, ilustraciones, randomStuff }) {
    console.log(obras)
    state.home = shuffleArray([
      ...obras.map(obra => ({
        id: obra.id,
        type: 'obras',
        title: obra.data.titulo[0].text,
        image: randomItem(obra.data.imagenes).imagen,
        link: `obras/${obra.id}`,
      })),
      ...ilustraciones.map(obra => ({
        id: obra.id,
        type: 'ilustraciones',
        title: obra.data.titulo[0].text,
        image: randomItem(obra.data.series).imagen,
        link: `ilustracion/${obra.id}`,
      })),
      ...randomStuff.map(random => ({
        id: random.id,
        type: 'random-stuff',
        title: '',
        image: random.data.imagen,
        link: random.data.link.url
      })),
    ]);
    state.home = [ ...state.home ];
  },

  setBio(state, bio) {
    state.bio = bio;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  setRandomStuff(state, randomStuff) {
    state.randomStuff = randomStuff;
  },

  setObra(state, detail) {
    const index = state.obras.findIndex(({ id }) => id === detail.id );
    state.obras[index].detail = detail;
  },

  setIlustracion(state, detail) {
    const index = state.ilustraciones.findIndex(({ id }) => id === detail.id );
    state.ilustraciones[index].detail = detail;
  },

  showNavigation(state) {
    state.navigation.showing = true;
  },

  hideNavigation(state) {
    state.navigation.showing = false;
  },

}

export default mutations