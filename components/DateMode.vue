<script lang="ts" setup>
import { DatePicker as VDatePicker } from 'v-calendar'
import 'v-calendar/style.css'

const dateModeValue = defineModel<Date | undefined>({ required: true })
</script>

<template>
  <VDatePicker v-model="dateModeValue" mode="date" />
</template>