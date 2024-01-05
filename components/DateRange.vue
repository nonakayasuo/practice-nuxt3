<script lang="ts" setup>
type DateRange =  {
  start: Date | null;
  end: Date | null;
}

import { DatePicker as VDatePicker } from 'v-calendar'
import 'v-calendar/style.css'

const dateRangeValue = defineModel<DateRange>({ required: true })
</script>

<template>
 <VDatePicker v-model.range="dateRangeValue" mode="dateTime" />
</template>