<script setup lang="ts">
import { FwbCard, FwbHeading, FwbCheckbox } from "flowbite-vue";
import { ref, onMounted, watch } from "vue";

interface Task {
  title: string;
  isDone: boolean;
}

const todos = ref<Task[]>([]);

watch(
  todos,
  (newTodoValue) => {
    localStorage.setItem("todos", JSON.stringify(newTodoValue));
  },
  { deep: true }
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>
<template>
  <fwb-card class="p-5 max-w- w-full hover:bg-white">
    <FwbHeading class="mb-8">Completed</FwbHeading>

    <div class="flex flex-col gap-2">
      <div
        v-for="task in todos"
        :class="`todo-item ${task.isDone && 'done'}`"
        class="flex gap-2"
      >
        <FwbCheckbox v-model="task.isDone" disabled />
        {{ task.title }}
      </div>
    </div>
  </fwb-card>
</template>
