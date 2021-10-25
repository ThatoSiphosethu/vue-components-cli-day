<template>
 <div>
  <header>{{cart.length}} In Cart
  <button v-on:click="cart">View Cart</button>
    <button v-on:click="HelloWorld">Home</button>
  </header>
   <div v-if="page === 'Cart'">
     <h1>Cart</h1>
   </div>

 </div>
</template>

<script>
export default {
  name: "Cart",
  data () {
    return {
      media: [],
      cart: null,
    }
  }
}
</script>

<style scoped>

</style>