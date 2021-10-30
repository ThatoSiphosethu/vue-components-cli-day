<template>
  <div id="app">
    <v-content>
      <Search/>
    </v-content>

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
import Search from "./components/Search";
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
    Search,
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
.application {
  background-color: #a4508b !important;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%) !important;
}

</style>