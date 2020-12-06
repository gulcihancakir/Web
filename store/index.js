import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'

Vue.use(Vuex)


const createStore = () => {
    return new Vuex.Store({
    state :{
        //data
        products:[],
        categories:[]
     
    },

    getters:{//computed properties
      availableProducts(state){
            return state.products.filter(product => product.stock > 0)
      },
      aCategory: (state)=> (id) => {
        return state.categories.filter(category => category.id ===id)
      },
      getSite: (state)=> (id) => {
        return state.products.find(product => product.id === id)
      },
      getfilterSite:(state)=> (id) => {
        return state.products.filter(product => product.id !== id)
      },
     
    },
    actions:{
        
        fetchProducts({commit}){
            //make the call
            //run setProducts mutation 
            shop.getProducts(products =>{
                commit('setProducts',products)
            })

        },
        fetchCategories({commit}){
            //make the call
            //run setProducts mutation 
            shop.getCategories(categories =>{
                commit('setCategories',categories)
            })

        },
       

    },
    mutations:{
        setProducts(state,products){
            //update products
            state.products=products
        },
        
      setCategories(state,categories){
          state.categories=categories
      }
    }

})
}
export default createStore