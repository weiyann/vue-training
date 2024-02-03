<script setup>
import { onMounted, ref } from "vue";
const courses = ref([]);

// 組件掛載後獲取課程資料
onMounted(async () => {
  const response = await fetch("http://localhost:3002/course");
  const data = await response.json();
  courses.value = data.rows;
  console.log(courses.value);
});
</script>

<template>
  <h3>課程列表</h3>
  <ul v-for="course in courses" :key="course.course_id">
    <li>課程名稱：{{ course.name }}</li>
    <li>教練名稱：{{ course.coach_name }}</li>
    <li>課程價格：{{ course.price.toLocaleString() }}</li>
  </ul>
</template>

<style scoped></style>
