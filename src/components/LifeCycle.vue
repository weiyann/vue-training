<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";
const bgColor = "bgColor";
const text = ref("主要的網站內容");
const changeText = () => {
  text.value = "新的網站內容";
};
// 製作一個 counter 計數器
const counter = ref(0);
let numberCounter;

// 組件掛載時設定計數器
onMounted(() => {
  console.log("組件掛載完成");
  numberCounter = setInterval(() => {
    counter.value++;
    console.log("數字：" + counter.value);
  }, 1000);
});
// 組件卸載時清除計數器
onUnmounted(() => {
  console.log("組件卸載完成");
  clearInterval(numberCounter);
});
// onUpdated(() => {
//   console.log("組件更新完成");
// });
</script>

<template>
  <div :class="bgColor">
    <div>計數器：{{ counter }}</div>
    <h2>{{ text }}</h2>
    <button @click="changeText">更改網站內容</button>
  </div>
</template>

<style scoped>
.bgColor {
  background-color: pink;
}
</style>
