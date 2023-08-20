<template>
  <div>
    {{ props.title }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
div {
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 10px 0;
}
</style>