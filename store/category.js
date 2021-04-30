import api from '@/assets/api/api.js'
export default {
  namespaced: true,
  state() {
    return {
      categoiesData: []
    }
  },
  mutations: {
    updateCategory (state, categoies) {
      state.categoiesData = Object.freeze(categoies)
    }
  },
  actions: {
    async getLoadCategory ({ commit }) {
      try {
        const category = await api.fetchApi('api/product-category')
        commit('updateCategory', category)
      } catch (e) {
        console.log('Ошибка в экшане getLoadCategory')
        throw e
      }
    }
  }
}
