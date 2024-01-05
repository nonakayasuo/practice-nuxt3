<script lang="ts" setup>

const dateModeValue = shallowRef(new Date('2024-01-01'))
const dateTimeModeValue = shallowRef(new Date('2024-01-01'))
const dateTimeRangeValue = shallowRef({ start: new Date('2024-01-01'), end: new Date('2024-01-31') })
const datePickerValue = shallowRef(new Date('2024-01-01'))
const customDatePickerValue = shallowRef(new Date('2024-01-01'))
</script>

<template>
  <section class="border border-blue-500 m-2.5 p-4">
    <h1 class="font-bold text-lg">コンポーネント基礎</h1>
    <OneSection />
    <OneSection />
    <PartsTheSupplement />
  </section>
  <section class="border border-red-500 m-2.5 p-4">
    <div>
      <DateMode v-model="dateModeValue"/>
    </div>
  </section>
  <section class="border border-red-500 m-2.5 p-4">
    <div>
      <DateTimeMode v-model="dateTimeModeValue"/>
    </div>
  </section>
  <section class="border border-red-500 m-2.5 p-4">
    <div>
      <DateRange v-model="dateTimeRangeValue"  mode="dateTime"/>
    </div>
  </section>
  <section class="border border-red-500 m-2.5 p-4">
    <div>
      <DatePicker v-model="datePickerValue"/>
    </div>
  </section>
  <section class="border border-red-500 m-2.5 p-4">
    <div>
      <CustomDatePicker v-model="customDatePickerValue"/>
    </div>
  </section>
</template>
