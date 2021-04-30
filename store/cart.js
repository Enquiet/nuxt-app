export default {
  namespaced: true,
  state() {
    return {
      productsCard: [],
      cartActive: false
    }
  },
  mutations: {
    updateProductsCard (state, product) {
      state.productsCard.push({...product})
      if(state.productsCard.length === 0){
        localStorage.clear('product')
      }else{
        localStorage.setItem('product', JSON.stringify(state.productsCard))
      }
    },
    setStatusCatrActive(state, boolen){
      state.cartActive = boolen
    },
    deleteProductCart(state, id){
      state.productsCard = state.productsCard.filter(i => i.id !== id)
      localStorage.setItem('product', JSON.stringify( state.productsCard))
    },
    clearProductCart(state){
      state.productsCard = []
      localStorage.setItem('product', JSON.stringify( state.productsCard))
    }
  },
}
