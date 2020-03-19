import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale:[
        {id:1, name: 'Pink Sweater Dress', price: 35, image:'/Users/wanluanlee/Documents/vue/american-web/public/images/dress1.jpg'
    },
    {
      id:2, name: 'Black Lace Dress', price: 49, image:'/Users/wanluanlee/Documents/vue/american-web/public/images/dress2.jpg'
    },
    {
      id:3, name: 'Orange T-shirt Dress', price: 35, image:'public/images/dress2.jpg'
    },
    {id:4, name: 'Pink Polo Shirt', price: 25, image:'public/images/polo1.jpg'
    },
    {
      id:5, name: 'Dirty Pink Polo Shirt', price: 25, image:'public/images/polo2.jpg'
    },
    {
      id:6, name: 'Casual Jacket', price: 49, image:'public/images/jacket.jpg'
    },
      ],
      inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },
  },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },
  },
});