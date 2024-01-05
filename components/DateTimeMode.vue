<script lang="ts" setup>
import { DatePicker as VDatePicker } from 'v-calendar'
import 'v-calendar/style.css'

const dateTimeModeValue = defineModel<Date | undefined>({ required: true })
</script>

<template>
  <VDatePicker v-model="dateTimeModeValue" mode="dateTime" />
</template>