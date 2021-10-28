<template>
  <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">
    <!--                <h3 class="card-title">{{item.title}}</h3>-->
    <!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
    <!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()" class="btn btn-secondary">Check Out</button>
      <button v-else @click="item.checkIn()" class="btn btn-secondary">Check In</button>
      <button @click="item.remove()" class="btn btn-warning">Remove Me</button>
      <button @click="addToCart(item)" class="btn btn-danger">Add To Cart</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album
  },
  props: {
    item: Object,
    removeFunction: Function,
    addToCart: Function
  },
  // methods: {
  //   addFunction() {
  //     this.cart.push
  //   }
  // },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>