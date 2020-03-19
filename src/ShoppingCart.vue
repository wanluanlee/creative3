<template>
    <div><p>cart</p>></div>
  </template>
  
  <script>
  export default {
    name: 'shoppingCart',
    computed: {
      inCart() { return this.$store.getters.inCart; },
      numInCart() { return this.inCart.length; },
      cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    },
  };
  </script>