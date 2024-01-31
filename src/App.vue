<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/template">Template</RouterLink>
    <RouterLink to="/execution">Execution</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
