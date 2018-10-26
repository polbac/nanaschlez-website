import { getBio, getCategories } from '../respository/prismic'

const actions = {

    async fetchBio({commit}) {
        const bio = await getBio();
        commit('setBio', bio)
    },

    async fetchCategories({commit}) {
        const categories = await getCategories();
        commit('setCategories', categories)
    }
};

export default actions;