<template>
  <div class="home">
    <h1 class="introduce">Welcome to my online store. You can find so many unique item from my favorite collections.</h1>
    <h1 class="introduce">You can find so many unique item from my favorite collections.</h1>
    <div>
      <img class="home_pic" src="/images/home.png">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src//import ShoppingCart from './ShoppingCart.vue';
export default {
  name: 'Ηοme',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; },
  },
  components: {
    //ShoppingCart,
  },
  
}
</script>

<style>
  .introduce{
    color: white;
    font-size: 30px;
    font-family: Snell Roundhand, cursive
  }
  .home_pic{
    padding: 15px;
    width: 800px;
  }
</style>
