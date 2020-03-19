<template>
  <div id="app">
    <div class="row mb-3">
      <div class="col-md-9">
        <router-link to="/cart">
          <div class="menu-item browse">
            <router-link to="/cart">Cart ({{ numInCart }})</router-link>
          </div>
        </router-link>
        <h1>My online store</h1>
      </div>
      <span class="avatar"><img src="./assets/home_pic.jpg" alt="" /></span>
      <div class="col-md-3">
      </div>
    </div>

    <div class="row">
      <item
        v-for="item in forSale"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>

    <!-- No more inCart -->
  </div>
</template>

<script>
import item from './components/item.vue';
//import ShoppingCart from './ShoppingCart.vue';
export default {
  name: 'App',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; },
  },
  components: {
    item,
    //ShoppingCart,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.avatar img {
      border-radius: 100%;
      display: block;
      width: 20em;
    }

    .avatar {
    border-radius: 100%;
    display: inline-block;
    margin: 0 0 2em 0;
    padding: 0.5em;
    border: solid 2px white;
  }

  .container
{
  display: flex;
  justify-content: space-around
}
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

.background
  {
    background-image: url('/Users/wanluanlee/Documents/vue/american-web/public/images/background.jpg');
  }
</style>
