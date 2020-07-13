
import { initialStore } from './index';

const mapItem = item => {
  let back = new Date();
  back.setDate(back.getDate() - 99999999);
  back = back.getTime()
  switch(item.type) {
    case 'ilustraciones':
      return {
        id: item.id,
        tags: item.tags,
        title: item.data.titulo[0].text,
        image: item.data.series[0].imagen.url + '&width=600',
        images: imageList(item),
        link: `/ilustraciones/${item.id}`,
        type: 'ilustraciones',
        date: item.data.date ? new Date(item.data.date).getTime() : back,
      }
      
  case 'art':
      return {
        id: item.id,
        tags: item.tags,
        title: item.data.titulo[0].text,
        image: item.data.imagenes[0].imagen.url,
        images: imageList(item),
        link: `/obras/${item.id}`,
        type: 'art',
        date: item.data.date ? new Date(item.data.date).getTime() : back,
      }
    case 'obras':
        return {
          id: item.id,
          tags: item.tags,
          title: item.data.titulo[0].text,
          image: item.data.imagenes1[0].imagen.url,
          images: imageList(item),
          link: `/obras/${item.id}`,
          type: 'art',
          date: item.data.date ? new Date(item.data.date).getTime() : back,
        }

  case 'mural':
    return {
      id: item.id,
      tags: item.tags,
      title: item.data.titulo[0].text,
      image: item.data.imagenes[0].imagen.url,
      images: imageList(item),
      link: `/murales/${item.id}`,
      type: 'art',
      date: item.data.date ? new Date(item.data.date).getTime() : back,
    }

    return null;
  }
}

const thumbnail = path => {
  if (path.indexOf('&w=') === -1) {
    return path + '&width=600'
  }
  if (path.indexOf('w=') !== -1) {
    const width = /w=([^&]*)/
    const height = /h=([^&]*)/
    const w = width.exec(path)[1]
    const h = height.exec(path)[1]
    return path
      .replace(/(w=)[^\&]+/, '$1' + Math.floor(w/2))
      .replace(/(h=)[^\&]+/, '$1' + Math.floor(h/2));
    
  }
  return path
}
const imageList = list => {
  const l = (list.data.series || 
    list.data.imagenes ||
    list.data.imagenes1).map(im => ({
      ...im,
      imagen: {
        ...im.imagen,
        url: thumbnail(im.imagen.url)
      }
    }))
  return l
}

const mutations = {
  

  setBio(state, bio) {
    state.bio = bio;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  setRandomStuff(state, randomStuff) {
    state.randomStuff = randomStuff;
  },

  setWorkList(state, items) {
    let back = new Date();
    back.setDate(back.getDate() - 99999999);
    back = back.getTime()

    state.items = items.results.map(mapItem)
      .filter(function (el) {
      return el != null;
    }).sort((a, b) => {
      return b.date - a.date;
    })
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

  setShop(state, shop) {
    state.shop = shop;
  },

  hideNavigation(state) {
    state.navigation.showing = false;
  },

  resetStore(state) {
    state = initialStore;
  }

}

export default mutations