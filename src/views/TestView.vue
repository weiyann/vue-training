<script setup>
import LifeCycle from "@/components/LifeCycle.vue";
import { ref } from "vue";
const visible = ref(true);
const hide = () => {
  visible.value = false;
};
const show = () => {
  visible.value = true;
};
</script>

<template>
  <LifeCycle v-if="visible"></LifeCycle>
  <button @click="hide">隱藏</button>
  <button @click="show">重新顯示</button>
</template>

<style scoped></style>
