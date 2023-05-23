<script setup lang="ts">
import { useCounter } from "@/composables/useCounter";

const counter = useCounter(0);
</script>
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Doubled Count: {{ counter.doubledCount }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>
