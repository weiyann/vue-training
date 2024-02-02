<script setup>
import { RouterView } from "vue-router";
defineProps(["props"]);
</script>

<template>
  <main>
    <div>{{ props }}</div>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background-color: #ddd;
}
</style>
