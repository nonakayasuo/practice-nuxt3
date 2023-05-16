<script lang="ts" setup>
const keyword = ref("");

const handleClick = () => {
  // ここに生成する処理をかく
};
</script>

<template>
  <h1>GPT-3 APP</h1>
  <div>
    <input type="text" v-model="keyword" />
  </div>
  <div>
    <button type="button" @click="handleClick">テキスト生成</button>
  </div>
</template>
