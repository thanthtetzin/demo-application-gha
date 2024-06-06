<script setup lang="ts">
import { FwbCard, FwbHeading, FwbCheckbox } from "flowbite-vue";
import { ref, onMounted } from "vue";

import { getCompleted, type Task } from "../services/todo";

const todos = ref<Task[]>([]);

onMounted(async () => {
  todos.value = await getCompleted();
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
        <div>
          {{ task.title }}
        </div>
        <p>
          <b>Completed:</b>
          {{
            new Intl.DateTimeFormat("default", { dateStyle: "short" }).format(
              new Date(task.updatedAt!)
            )
          }}
        </p>
      </div>
    </div>
  </fwb-card>
</template>
