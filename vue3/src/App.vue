<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import CompositionDemo from './components/CompositionDemo.vue'
import TeleportDemo from './components/TeleportDemo.vue'

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
  <CompositionDemo text="demo"/>
  <TeleportDemo/>
</template>

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
