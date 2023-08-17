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
  
</style>