import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale:[
        {id:1, name: 'Pink Sweater Dress', price: 35, image:'/images/dress1.jpg'
    },
    {
      id:2, name: 'Black Lace Dress', price: 49, image:'/images/dress2.jpg'
    },
    {
      id:3, name: 'Orange T-shirt Dress', price: 35, image:'/images/dress3.jpg'
    },
      ],
      inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(id) { this.$root.$data.cart.push(id); },
  },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },
  },
});