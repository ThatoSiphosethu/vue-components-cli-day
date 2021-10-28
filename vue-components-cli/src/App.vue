<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <library :add-to-cart="(item) => cart.addItem(item)"></library>
    <cart
      :cart="cart"
    />
  </div>
</template>

<script>
import Library from "@/components/Library";
import CartModel from "./models/Cart";
import Cart from "./components/Cart";

export default {
  name: 'App',
  data(){
    return {

      cart: new CartModel(),
    }
  },
  components: {
    Cart,
    Library,
  }
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
</style>
