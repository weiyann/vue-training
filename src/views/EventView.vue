<script setup>
const handler = () => {
  console.log("click");
};
const mouseoverHandler = () => {
  console.log("mouseover");
};
</script>

<template>
  <main>
    <button v-on:click.once="handler" @mouseover="mouseoverHandler">
      按鈕
    </button>
    <a href="https://google.com" @click.prevent="handler">Google</a>
  </main>
</template>

<style scoped></style>
