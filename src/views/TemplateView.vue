<script setup>
let message = "Hello Vue";
let googleLink = "<a href='https://google.com'>Google</a>";
let name = "content";
let checked = false;
</script>
<template>
  <main>
    <!-- 嵌入純文字 -->
    <div>{{ message }}</div>

    <!-- 嵌入 HTML 語法 -->
    <div v-html="googleLink"></div>

    <!-- 嵌入屬性值 -->
    <div v-bind:class="name">嵌入屬性值</div>
    <div :class="name">嵌入屬性值-簡寫</div>

    <!-- 透過程式語句產生標籤內文 -->
    <div v-html="message.toUpperCase()"></div>
    <div>{{ message.toUpperCase() }}</div>

    <!-- 透過程式語句產生標籤屬性值 -->
    <div :class="checked ? 'light' : 'dark'">操作標籤的屬性</div>
  </main>
</template>
<style scoped>
main {
  background-color: #ddd;
}
.content {
  color: blue;
}
.light {
  color: #888888;
}
.dark {
  color: #262626;
}
</style>
