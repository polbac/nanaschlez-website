const mutations = {
    
    setBio(state, bio) {
      state.bio = bio;
      console.log('bio', bio);
    },

    setCategories(state, categories) {
      state.categories = categories;
      console.log('categories', categories);
    },

  }
  
  export default mutations
  