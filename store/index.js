import Vuex from 'vuex'
import Vue from 'vue'
// import shop from '@/api/shop'
import firebase from '@/plugins/firebase'
// import { resolve } from 'core-js/fn/promise'


Vue.use(Vuex)


// const createStore = () => {
  // return new Vuex.Store({
    export const state=()=>({  //data
      products: [],
      categories: [],
      cart: [],
cardProduct:[],
      user: '',
      status: '',
      error: '',
})

export const getters={  
  availableProducts(state) {
  return state.products.filter(product => product.stock > 0)
},

getSite: (state) => (id) => {
  return state.products.find(product => product.id === id)



},
aCategory: (state) => (id) => {
  // return state.categories.
  console.log("cgfvhgbhjnj",state.categories)
},
getfilterSite: (state) => (id) => {
  return state.products.filter(product => product.id !== id)
},
cartProducts(state) {
  return state.cart.map(cartItem => {
    const product = state.products.find(product => product.id === cartItem.pid)
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
}}
  

    export const actions={

      fetchProducts({ commit }) {
        return new Promise((resolve, reject) => {
        
          firebase.database().ref('/products').once('value').then((snapshot) => {
          
            commit('setProducts', snapshot.val())
          });
        })


      },
      fetchCategory({ commit }) {
        return new Promise((resolve, reject) => {
         
          firebase.database().ref('/categories').once('value').then((snapshot) => {
         
            commit('setCategories', snapshot.val())
          });
        })


      },
      
      // fetchCartItem({commit}){
        
     
      //        var usr=firebase.auth().currentUser
            
            
      //        firebase.database().ref("/usr"+usr.uid+"cart").once('value').then((snapshot)=>{
      //          if(snapshot.val() != null){
                

      //          commit('pushProductToCart',snapshot.val())

      //          }
      //        })
          
      // },

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
          
           var pid=product
          //  var quantity=product.quantity
           var newItem={product}
            var usr=firebase.auth().currentUser
            console.log(usr)
            if (usr){
              firebase.database().ref("/usr"+usr.uid+"cart").push(newItem)
               
            }
           
        }
        
      },
   

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
            alert('basarıyla gırıs yapıldı')
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
            alert('başarıyla çıkıs yaptınız')
            commit('setUser', null)
            commit('setStatus', 'success')
            commit('setError', null)
          })
          .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
          })
      },

      cardAction({commit},payload){
        const productCard={
          title:payload.title,
          imageUrl:payload.image,
          price:payload.price
        }
        firebase.database().ref('productCard').push(productCard).
        then((data)=>{
          console.log(data)
          commit('cardAction',productCard)
        })
        .catch((error)=>{
          console.log(error)
        })

    }}

  export const  mutations= {
      setProducts(state, products) {
        //update products
        state.products = products
      },

      setCategories(state,categories){
          state.categories=categories
      },
      pushProductToCart(state, productId) {
        state.cart.push({
          pid: productId,
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
      },

      cardMutation(state,payload){
        state.cartProducts=payload
      }


    }


  // })
// }
// export default createStore