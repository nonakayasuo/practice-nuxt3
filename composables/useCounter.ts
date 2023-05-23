import { ref, computed } from "vue";

export const useCounter = (initialCount: number) => {
  // データの宣言
  const count = ref(initialCount);

  // 計算プロパティの作成
  const doubledCount = computed(() => count.value * 2);

  // メソッドの作成
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    doubledCount,
    increment,
    decrement,
  };
};
