<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="not_found" v-if="!this.$root.$data.inCart.length">Shopping Cart Is Empty</h1>
  </div>
  <div style="text-align:center;">
    <table class="table">
      <tbody>
        <tr v-for="(item, index) in cart" v-bind:key="item.id">
          <td class="card-title">{{ item.name }}</td>
          <td class="card-text">{{ item.price | dollars }}</td>
          <td>
            <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </template>
  
  <script>
  export default {
  name: 'shoppingCart',
  computed: {
    /* snip */
    cart() {
      return this.$root.$data.inCart.map((cartItem) => {
        return this.$root.$data.forSale.state.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.id;
        });
      });
    },
  },
  methods: {
    removeFromCart(index) {
      this.$root.$data.inCart.splice(index,1);
    },
  },
};
  </script>

  <style>
    .card-title .card-text
    {
      color: white;
      font-size: 20px;
      font-family: Snell Roundhand, cursive
    }

    .not_found
    {
      color: white;
      font-family: Snell Roundhand, cursive
    }

    .table {
    margin-left:auto; 
    margin-right:auto;
  }

  td
  {
    color: white;
    font-size: 25px;
    font-family: Snell Roundhand, cursive
  }

  </style>