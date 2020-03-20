<template>
  <div class="about">
    <div class="row">
      <item
        v-for="item in this.$root.$data.forSale.state.forSale"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import item from '../components/item.vue';
//import ShoppingCart from './ShoppingCart.vue';
export default {
  name: 'About',
  computed: {
    
  },
  components: {
    item,
    //ShoppingCart,
  },  
}
</script>

