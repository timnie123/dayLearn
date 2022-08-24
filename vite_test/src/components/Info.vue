<template>
  <div>this is info</div>
  <div>id is {{ id }}</div>
  <div @click="back">back</div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
export default {
  name: "Info",
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id

    return {
      id,
      back() {
        router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
