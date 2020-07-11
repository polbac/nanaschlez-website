
import { getShop, getObra, fetchWorkshop, getObras, getBio, getIlustraciones, getMurales, getRandomStuff, fetchObraById, fetchIlustracionById, fetchMuralById } from '../respository/prismic'

const actions = {

    async fetchSelf({commit}) {
        let obra
        try {
            obra = await getObra('obra');
        } catch(err) {
            console.log('err', err)
        }
        commit('setObraList', obra)
    },

    async fetchCommitment({commit}) {
        let obra
        try {
            obra = await getObra('pedido');
        } catch(err) {
            console.log('err', err)
        }
        commit('setPedidoList', obra)
    },

    async fetchBooks({commit}) {
        let obra
        try {
            obra = await getObra('books');
        } catch(err) {
            console.log('err', err)
        }
        commit('setBooksList', obra)
    },

    async fetchShop({commit}) {
        let shop
        try {
            shop = await getShop();
        } catch(err) {
            console.log('err', err)
        }
        commit('setShop', shop)
    },

    async fetchObras({commit}) {
        let obras

        try {
            obras = await getObras();
        } catch(err) {
            console.log('err', err)
        }

        commit('setWorkList', obras)
    },

    async fetchIlustraciones({commit}) {
        let ilustraciones

        try {
            ilustraciones = await getIlustraciones();
        } catch(err) {
            console.log('err', err)
        }

        commit('setWorkList', ilustraciones)
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