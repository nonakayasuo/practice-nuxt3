<script setup lang="ts">
import { DatePicker as VDatePicker } from 'v-calendar'
import 'v-calendar/style.css'

const DatePickerValue = defineModel<Date | null>({ required: true })

const attrs = [
	{
		key: 'today',
		highlight: {
			color: 'blue',
			fillMode: 'outline',
			class: '!bg-gray-100 dark:!bg-gray-500',
		},
		dates: new Date(),
	},
]
</script>

<template>
	<VDatePicker
		v-model="DatePickerValue"
		:attributes="attrs"
	>
		<template #default="{ inputValue, inputEvents }">
			<input :value="inputValue" type="text" v-on="inputEvents" />
		</template>
	</VDatePicker>
</template>
