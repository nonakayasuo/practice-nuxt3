<script setup lang="ts">
type Example = {
  id: number;
  name: string;
};

const examples = shallowRef<Example>();

// shallowRef でラップされたデータに要素を追加
examples.value = { id: 1, name: "Example 1" };

// shallowRef の中身が変更されると反応する

watchEffect(() => {
  console.log("Detected a change in examples:", examples.value);
});

// この変更は検出されない
examples.value.id = 3;
examples.value.name = "Example 3";

// examples そのものの変更は検出される
examples.value = { id: 2, name: "Example 2" };
</script>
