
import { randomItem, shuffleArray } from '../utils';
import { initialStore } from './index';

const mutations = {
    
  setHome(state, { obras, ilustraciones, randomStuff, murales }) {
    state.home = shuffleArray([
      ...obras.map(obra => obra.data.imagenes.length ? {
        id: obra.id,
        type: 'obras',
        title: obra.data.titulo[0].text,
        image: randomItem(obra.data.imagenes).imagen,
        link: `obras/${obra.id}`,
      } : null) ,
      ...ilustraciones.map(obra => obra.data.series.length ? {
          id: obra.id,
          type: 'ilustraciones',
          title: obra.data.titulo[0].text,
          image: randomItem(obra.data.series).imagen,
          link: `ilustraciones/${obra.id}`,
      }: null),
      ...randomStuff.map(random => ({
        id: random.id,
        type: 'random-stuff',
        title: '',
        image: random.data.imagen,
        link: random.data.link.url
      })),
      ...murales.map(mural => mural.data.series.length ? {
        id: mural.id,
        type: 'mural',
        title: mural.data.titulo[0].text,
        image: randomItem(mural.data.series).imagen,
        link: `murales/${mural.id}`,
      }: null),
    ]);
    state.home = [ ...state.home.filter(item => item !== null) ];
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
    
    if (index !== -1) {
      state.obras[index].detail = detail;
      return;
    }

    state.obras.push(detail);
    
  },

  setWorkshop(state, workshop) {
    state.workshop = workshop;
  },

  setIlustracion(state, detail) {
    const index = state.ilustraciones.findIndex(({ id }) => id === detail.id );

    if (index !== -1) {
      state.ilustraciones[index].detail = detail;
      return;
    }

    state.ilustraciones.push(detail);
  },

  setMural(state, detail) {
    const index = state.murales.findIndex(({ id }) => id === detail.id );

    if (index !== -1) {
      state.murales[index].detail = detail;
      return;
    }

    state.murales.push(detail);
  },

  showNavigation(state) {
    state.navigation.showing = true;
  },

  hideNavigation(state) {
    state.navigation.showing = false;
  },

  resetStore(state) {
    state = initialStore;
  }

}

export default mutations