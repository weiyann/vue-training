<script setup>
import { RouterView } from "vue-router";
defineProps(["props"]);

const emit = defineEmits(["change"]);
const updateSubtitle = () => {
  emit("change");
};
</script>

<template>
  <main>
    <!-- 方法一 -->
    <!-- <button @click="$emit('change')">改變副標題</button> -->

    <!-- 方法二 -->
    <button @click="updateSubtitle">改變副標題</button>
    <div>{{ props }}</div>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background-color: #ddd;
}
</style>
