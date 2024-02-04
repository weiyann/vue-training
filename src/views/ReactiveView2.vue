<script setup>
import { ref, reactive, watch } from "vue";

const num = ref(0);
const people2 = reactive({
  num: num,
});

setTimeout(() => {
  people2.num = 123; // 不用加value,将一个 ref 赋值给一个 reactive 属性时，该 ref 会被自动解包
}, 2000);

console.log(people2);
console.log(people2.num);
</script>

<template>
  <h2>{{ people2.num }}</h2>
</template>

<style scoped></style>
