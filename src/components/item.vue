<template>
    <div class="col-md-3">
      <div class="card">
        <img :src="image" :alt="name" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">{{ name }}</h4>
          <div class="card-text">${{ price }}</div>
          <div class="row justify-content-end">
            <button class="btn" @click="addToCart(id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    export default {
      name: 'item',
      props: ['id', 'name', 'price', 'image'],
      methods: {
    addToCart(id) {
      console.log(name);
      this.$root.$data.inCart.push(id);
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

.btn {
  background-color: white;
  color: black;
  border-radius: 12px;
  padding: 5px;
}



</style>

