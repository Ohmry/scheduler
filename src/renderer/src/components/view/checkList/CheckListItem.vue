<template>
  <li>
    <button ref="button" :class="{ completed: isCompleted }">
      <svg v-if="isCompleted" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M380.308-270.615 183.231-467.692l22.23-21.462 174.847 174.846 374-374.769 22.231 22.231-396.231 396.231Z"/></svg>
    </button>
    <span>{{ props.subject }}</span>
  </li>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isCompleted = ref<boolean>(false)

const props = defineProps<{
  subject: string
}>()
const button = ref()

onMounted(() => {
  const element: HTMLButtonElement = button.value
  element.addEventListener('click', () => {
    isCompleted.value = !isCompleted.value
  })
})
</script>
<style scoped>
li {
  padding: 10px;
  border: 1px solid #AAA;
  border-radius: 5px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 2px 3px #CCC;
  background-color: #F9F9F9;
}
li > button {
  border: 1px solid #AAA;
  border-radius: 5px;
  padding: 0;
  background-color: transparent;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
li > button.completed {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  fill: white;
}
li > button.completed + span {
  color: #AAA;
  text-decoration: line-through;
}
li > button > svg {
  width: 20px;
  height: 20px;
}
li > button:hover {
  cursor: pointer;
  border-color: var(--primary-color);
}
li > button:active {
  fill: var(--primary-color);
  border-color: var(--primary-color);
  background-color: #B6C0EB;
}
li > button:active > svg {
  fill: white;
}
</style>