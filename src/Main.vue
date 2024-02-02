<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <Nav></Nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background-color: #ddd;
}
</style>
