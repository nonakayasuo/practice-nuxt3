<script setup lang="ts">
import { ref } from "vue";
const name = ref("World");
</script>

<template>
  <div>
    <p>Hello, {{ name }}!</p>
  </div>
</template>
