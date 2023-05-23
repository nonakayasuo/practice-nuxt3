<script lang="ts" setup>
import { ref } from "vue";
const keyword = ref("");
</script>

<template>
  <h1>GPT-3 APP</h1>
  <div>
    <input type="text" v-model="keyword" />
  </div>
  <div>
    <button type="button">テキスト生成</button>
  </div>
  <NuxtLink to="/count">Count Page</NuxtLink>
  <NuxtLink to="/checks">Check Page</NuxtLink>
</template>
