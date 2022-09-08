<template>
  <div>my name is {{store.name}}</div>
  <div>my unreal age is {{store.getAge}}</div>
  <div>my real age is {{age}}</div>
  <div @click="store.addAge">add age</div>
</template>

<script setup lang="ts">
import {infoStore} from "../store/info";
import {storeToRefs} from "pinia";

const store = infoStore()

const {age} = storeToRefs(store)
</script>

<style scoped>

</style>
