<script setup>
// 載入ref函式
import { ref } from "vue";
let state = ref({
  title: "網站標題",
  className: "title",
});
let handler = () => {
  // state.value 就等於物件{title: "網站標題",className: "title"}

  state.value.title = "新的網站標題"; // 更改變數的value屬性
  state.value.className = "title highlight";
};
</script>

<template>
  <h1>響應式狀態</h1>
  <main>
    <div :class="state.className">{{ state.title }}</div>
    <button @click="handler">按鈕</button>
  </main>
</template>

<style scoped>
.title {
  font-weight: bold;
}
.highlight {
  color: red;
}
</style>
