<script setup>
import { RouterLink } from "vue-router";
defineProps(["color", "subtitle"]);
</script>

<template>
  <nav
    :style="{
      backgroundColor: color,
    }"
  >
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/template">Template</RouterLink>
    <RouterLink to="/execution">Execution</RouterLink>
    <RouterLink to="/event-handling">EventHandling</RouterLink>
    <RouterLink to="/reactive">Reactive</RouterLink>
    <RouterLink to="/form">Form</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
    <RouterLink to="/course">Course</RouterLink>
  </nav>
  <div>{{ subtitle }}</div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 12px;
}
nav a {
  text-decoration: none;
  color: blue;
}
</style>
