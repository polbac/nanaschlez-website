
import { getBio, fetchObraById } from '../respository/prismic'

const actions = {

    async fetchBio({commit}) {
        const bio = await getBio();
        commit('setBio', bio)
    },

    async fetchCategories({commit}) {
        const categories = await getCategories();
        commit('setCategories', categories)
    },
    async fetchObraById({ commit }, { id }) {
        const detail = await fetchObraById(id);
        commit('setObra', detail)
    }
};

export default actions;