import api from '@/assets/api/api.js'
export default {
  namespaced: true,
  state() {
    return {
      productsData: []
    }
  },
  mutations: {
    updateProducts (state, products) {
      state.productsData = products
    },
    sortProduct(state, sort){
      if(sort === 1){
        state.productsData.sort((a,b) => b.price - a.price)
      }
      if(sort === 2){
        state.productsData.sort((a,b) => b.rating - a.rating)
      }
    }
  },
  actions: {
    async getLoadProducts ({ commit }, id) {
      try {
        const products = await api.fetchApi(`api/product?category=${id}`)
        commit('updateProducts', products)
      } catch (e) {
        console.log('Ошибка в экшане getLoadProducts')
        throw e
      }
    }
  }
}
