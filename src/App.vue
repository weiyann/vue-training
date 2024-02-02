<script setup>
import Nav from "./Nav.vue";
import Main from "./Main.vue";
import { ref } from "vue";

const subtitle = ref("這是網站的副標題");
const changeSubtitle = () => {
  subtitle.value = "這是新的副標題";
};
</script>

<template>
  <Nav color="yellow" :subtitle="subtitle"></Nav>

  <Main props="傳入的屬性" @change="changeSubtitle"></Main>
</template>

<style scoped></style>
