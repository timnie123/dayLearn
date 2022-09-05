<template>
  <span>this is about</span>
  <span>cart num is {{cartStore.num}}</span><br>
  <span>cart doubleNum is {{cartStore.doubleNum}}</span>
</template>

<script>
import { cart } from "../store/cart";

export default {
  name: "About",
  setup() {
    const cartStore = cart()
    cartStore.increment()
    return {
      cartStore
    }
  }
}
</script>

<style scoped>

</style>
