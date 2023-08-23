<script setup lang="ts">
type Example = {
  id: number;
  name: string;
};

const examples = shallowRef<Example[]>([{ id: 1, name: "Example 1" }]);

// examplesの変更を監視
watchEffect(() => {
  console.log("Detected a change in examples:", examples.value);
});

// shallowRefを使っているため、以下のような変更は検出されない
examples.value[0].id = 2;
examples.value[0].name = "Updated Example";

// triggerRefを使用して手動で変更を通知
// 再度、コンソールに"Detected a change in examples:, examples.value" が表示されるようになる
triggerRef(examples);
</script>
