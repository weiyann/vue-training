<script setup>
import { ref } from "vue";
let line = "-------------------------------------------";
// 單行輸入框，預設為空字串
let content = ref("");
// 清空輸入框的函式
let clearContent = () => {
  content.value = "";
};
// 多選框，預設為空陣列
let skills = ref([]);

let color = ref(null);
let dropdownColor = ref("");
</script>

<template>
  <h2>表單輸入綁定</h2>
  <main>
    <h3>單行輸入框</h3>
    <input type="text" v-model="content" />
    <div>輸入的文字：{{ content }}</div>
    <button @click="clearContent">清空輸入框</button>
    <div>{{ line }}</div>

    <h3>多選框</h3>
    <label><input type="checkbox" value="HTML" v-model="skills" /> HTML</label>
    <label><input type="checkbox" value="CSS" v-model="skills" /> CSS</label>
    <label
      ><input type="checkbox" value="JavaScript" v-model="skills" />
      JavaScript</label
    >
    <label
      ><input type="checkbox" value="Vue.js" v-model="skills" /> Vue.js</label
    >
    <div>技能：</div>
    <!-- 用迴圈呈現畫面 -->
    <ul>
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
    <div>{{ line }}</div>

    <h3>單選框</h3>
    紅色<input type="radio" v-model="color" value="red" /> 綠色<input
      type="radio"
      v-model="color"
      value="green"
    />
    <div>
      選擇的顏色：<span :class="color">{{ color }}</span>
    </div>
    <div>{{ line }}</div>

    <h3>下拉式選單</h3>
    <select v-model="dropdownColor">
      <option value="">--請選擇顏色--</option>
      <option value="yellow">黃色</option>
      <option value="blue">藍色</option>
    </select>
    <div>
      選擇的顏色：<span :class="dropdownColor">{{ dropdownColor }}</span>
    </div>
  </main>
</template>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.blue {
  color: blue;
}
</style>
