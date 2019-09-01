
import { fetchWorkshop, getObras, getBio, getIlustraciones, getMurales, getRandomStuff, fetchObraById, fetchIlustracionById, fetchMuralById } from '../respository/prismic'

const actions = {

    async nuxtServerInit ({ dispatch }) {
        await dispatch({ type: 'fetchHome' });
    },

    async fetchHome({commit, state}) {

        if(state.home !== null){
            return null;
        }

        const obras = await getObras();
        obras.results.forEach(obra => commit('setObra', obra));

        const ilustraciones = await getIlustraciones();
        ilustraciones.results.forEach(ilustracion => commit('setIlustracion', ilustracion));

        const murales = await getMurales();
        murales.results.forEach(mural => commit('setMural', mural));

        const randomStuff = await getRandomStuff();
        randomStuff.results.forEach(randomStuff => commit('setRandomStuff', randomStuff));

        commit('setHome', { 
            obras: obras.results, 
            ilustraciones: ilustraciones.results,
            murales: murales.results,
            randomStuff: randomStuff.results,
        });
    },

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
    },

    async fetchIlustracionById({ commit }, { id }) {
        const detail = await fetchIlustracionById(id);
        commit('setIlustracion', detail)
    },

    async fetchMuralById({ commit }, { id }) {
        const detail = await fetchMuralById(id);
        commit('setMural', detail)
    },

    async fetchWorkshop({ commit }) {       
        const workshop = await fetchWorkshop();
        commit('setWorkshop', workshop)
    },

    resetStore({ commit }) {
        commit('resetStore')
    }
};

export default actions;