const mutations = {
    
  setBio(state, bio) {
    state.bio = bio;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  showNavigation(state) {
    state.navigation.showing = true;
  },

  hideNavigation(state) {
    state.navigation.showing = false;
  },

}

export default mutations