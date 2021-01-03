import Vuex from 'vuex'
import Vue from 'vue'
// import shop from '@/api/shop'
import firebase from '@/plugins/firebase'

// import { resolve } from 'core-js/fn/promise'

Vue.use(Vuex)


const createStore = () => {
  return new Vuex.Store({
    state: {
      //data
      products: [],
      categories: [],
      cart: [],

      user: '',
      status: '',
      error: '',


    },

    getters: {//computed properties
      availableProducts(state) {
        return state.products.filter(product => product.stock > 0)
      },
      aCategory: (state) => (id) => {
        return state.categories.filter(category => category.id === id)
      },
      getSite: (state) => (id) => {
        return state.products.find(product => product.id === id)
        // // console.log(product)
        // if (!product) {

        //   database.ref('/products/' + id).once('value').then((snapshot) => {
        //     //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        //     // ...
        //   console.log(snapshot.val())

        //     return snapshot.val()
        //   });


        // }
        // return product


      },
      getfilterSite: (state) => (id) => {
        return state.products.filter(product => product.id !== id)
      },
      cartProducts(state) {
        return state.cart.map(cartItem => {
          const product = state.products.find(product => product.id === cartItem.id)
          return {
            title: product.title,
            price: product.price,
            image: product.image,
            product: product.renk,
            quantity: cartItem.quantity

          }

        })
      },

      cartTotal(state, getters) {

        return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)


      },
      sepet(state, getters) {
        return getters.cartProducts.reduce((urun_sayisi, product) => urun_sayisi + product.quantity, 0)
      },

      toplam_tutar(state, getters) {
        let toplam = 500
        getters.cartProducts.forEach(product => {
          toplam -= product.price * product.quantity
        });
        if (toplam < 500 & toplam > 0) {
          return "Ücretsiz kargo hakkı kazanmanıza ₺" + toplam + " kaldı!"

          toplam
        }
        else {
          return "Kargo bedava"
        }

      },
      status(state) {
        return state.status
      },
      user(state) {
        return state.user
      },
      error(state) {
        return state.error
      }
    },
    actions: {

      fetchProducts({ commit }) {
        return new Promise((resolve, reject) => {
          //make the call
          //run setProducts mutation 
          // shop.getProducts(products => {
          //   commit('setProducts', products)
          //   resolve()
          // })

          firebase.database().ref('/products').once('value').then((snapshot) => {
            //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
            commit('setProducts', snapshot.val())
          });
        })


      },
      fetchCategory({ commit }) {
        return new Promise((resolve, reject) => {
          //make the call
          //run setProducts mutation 
          // shop.getProducts(products => {
          //   commit('setProducts', products)
          //   resolve()
          // })

          firebase.database().ref('/categories').once('value').then((snapshot) => {
            //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
            commit('setCategories', snapshot.val())
          });
        })


      },
      
      

      addProductToCart(context, product) {
        if (product.stock > 0) {
          const cartItem = context.state.cart.find(item => item.id === product.id)

          if (!cartItem) {
            context.commit('pushProductToCart', product.id)
            // console.log("1")
          }
          else {
            context.commit('incrementItemQuantity', cartItem)
            // console.log("2")

          }
          context.commit('decrementProductStock', product)
          // console.log("3")

        }

      },
      // postUser({commit},payload){
      //   firebase.database().ref('/users').once('value').then((snapshot) => {
      //     //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      //     // ...
      //     commit('setUsers', snapshot.val())
      //   });
      // },

      signupAction({ commit }, payload) {
      
        commit('setStatus', 'loading')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((response) => {
            alert('success')
            commit('setUser', response.user.uid)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
          })
      }
      ,
      signInAction({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).
          then((response) => {
            commit('setUser', response.user.uid)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
          })

      },
      signOutAction ( {commit}) {
        firebase.auth().signOut()
          .then((response) => {
            commit('setUser', null)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
          })
      }




    },


    mutations: {
      setProducts(state, products) {
        //update products
        state.products = products
      },

      setCategories(state,categories){
          state.categories=categories
      },
      pushProductToCart(state, productId) {
        state.cart.push({
          id: productId,
          quantity: 1
        })

      },

      incrementItemQuantity(state, cartItem) {
        cartItem.quantity++
      },
      decrementProductStock(state, product) {
        product.stock--
      },
      removeProductFromCart(state, id) {
        let index = state.cart.findIndex(product => product.id);
        console.log(index)
        state.cart.splice(index, 1);
      },

      setUser(state, payload) {
        state.user = payload
      },
      removeUser(state) {
        state.user = null
      },
      setStatus(state, payload) {
        state.status = payload
      },
      setError(state, payload) {
        state.error = payload
      }


    }


  })
}
export default createStore