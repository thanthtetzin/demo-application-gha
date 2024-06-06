<script setup lang="ts">
import { FwbCard, FwbHeading, FwbInput, FwbButton, FwbCheckbox } from 'flowbite-vue';
import { ref, onMounted } from 'vue';

import { getTodos, addTodo, deleteTodo, updateTodo, type Task } from '../services/todo';

const todos = ref<Task[]>([]);
const text = ref('');

async function submit() {
	if (text.value.trim() === '') {
		return;
	}

	todos.value.unshift(
		await addTodo({
			title: text.value,
			isDone: false,
		})
	);

	text.value = '';
}

async function remove(todo: Task) {
	todos.value = todos.value.filter((x) => x !== todo);
	await deleteTodo(todo);
}

async function update(todo: Task) {
	updateTodo(todo);
}

onMounted(() => {
	getTodos().then((response) => (todos.value = response));
});
</script>
<template>
	<fwb-card class="p-5 max-w-md w-full hover:bg-white">
		<FwbHeading class="mb-8">My Todos</FwbHeading>

		<div class="mb-8">
			<form @submit.prevent="submit">
				<FwbInput
					type="text"
					placeholder="e.g. email your boss"
					v-model="text"
					label="What do you plan on doing? 🙂"
					class="mb-2"
				/>

				<FwbButton type="submit"> Add todo </FwbButton>
			</form>
		</div>

		<div v-if="todos.length === 0">
			<strong>No Todos Here 🎉</strong>
			<p>Either you are super productive or lazy to add tasks.</p>
		</div>

		<div class="flex flex-col gap-2">
			<div v-for="task in todos" :class="`todo-item ${task.isDone && 'done'}`" class="flex gap-2">
				<FwbCheckbox v-model="task.isDone" @change="update(task)" />
				<FwbInput class="grow" type="text" v-model="task.title">
					<template #suffix>
						<button class="delete" @click="remove(task)">Delete</button>
					</template>
				</FwbInput>
			</div>
		</div>
	</fwb-card>
</template>
