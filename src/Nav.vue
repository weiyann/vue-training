<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/template">Template</RouterLink>
    <RouterLink to="/execution">Execution</RouterLink>
    <RouterLink to="/event-handling">EventHandling</RouterLink>
    <RouterLink to="/reactive">Reactive</RouterLink>
    <RouterLink to="/form">Form</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 12px;
}
</style>
