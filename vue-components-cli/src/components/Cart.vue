<template>
 <div class="">

   <h3>{{cart.length}} In Cart</h3>
<!--   <p v-for="item in CartItems"-->
<!--   :key="item.libraryItem.title">{{item.libraryItem.title}}</p>-->
<!--   <button @click="CartItems.checkOut()">Checkout</button>-->
<!--   <div>-->
<!--     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" @click="Cart">View Cart</button>-->
<!--     <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">-->
<!--       <div class="modal-dialog modal-lg">-->
<!--         <div class="modal-content">-->
<!--           <ul class="list-group" v-for="(item) in cart"-->
<!--               :item="item"-->
<!--               :removeFunction="(item) => item.removeItem(item)"-->
<!--               :key="item.id"-->
<!--               :forlater="i">-->
<!--             <li class="list-group-item">{{item.title}}</li>-->

<!--           </ul>-->
<!--         </div>-->
<!--       </div>-->
<!--     </div>-->
<!--   </div>-->
   <div>
     <b-button v-b-modal.modal-1>Open Cart</b-button>

     <b-modal id="modal-1" title="Cart">
<!--       <p class="my-4">Hello from modal!</p>-->
       <div class="modal-content">
                    <ul class="list-group" v-for="(item) in cart"
                        :item="item"
                        :removeFunction="(item) => item.removeItem(item)"
                        :checkout="(item => item.checkout())"
                        :key="item.libraryItem.id">
<!--                        :forlater="i">-->
                      <li class="list-group-item">{{item.libraryItem.title}}
                      <b-button v-if="item.libraryItem.isAvailable()" @click="item.checkOut()">Checkout</b-button>
                      <b-button v-else @click="item.remove">Remove</b-button>
                      </li>
                    </ul>
                  </div>
     </b-modal>
   </div>
 </div>
</template>

<script>

export default {
  name: "Cart",
  props: {
    cart: Array,
    removeItem: Function,
    checkOut: Function

  }
}
</script>

<style scoped>

</style>