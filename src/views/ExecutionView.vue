<script setup>
let level = 0;
let topics = ["HTML", "CSS", "JavaScript", "Vue.js"];
let objects = { html: "HTML", css: "CSS", js: "JavaScript", vue: "Vue.js" };
</script>
<template>
  <h1>樣板語法的判斷式與迴圈</h1>
  <main>
    <div v-if="level === 3">大神</div>
    <div v-else-if="level === 2">資深</div>
    <div v-else-if="level === 1">中階</div>
    <div v-else>
      <div>入門</div>
      <!-- for 迴圈-陣列 -->
      <ul>
        <li v-for="name in topics">{{ name }}</li>
      </ul>

      <!-- for 迴圈-陣列索引 -->
      <ul>
        <li v-for="(name, index) in topics">{{ index }}-{{ name }}</li>
      </ul>

      <!-- for 迴圈-物件 -->
      <ul>
        <li v-for="(value, key) in objects">{{ key }}-{{ value }}</li>
      </ul>
    </div>
  </main>
</template>
<style scoped></style>
