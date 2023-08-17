<template>
  <div class="scheduler-side-navigation-bar-tooltip-container">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M560.231-267.692 347.692-480.231l212.539-213.308 22.231 22.231-190.308 191.077 190.308 190.308-22.231 22.231Z"/></svg> -->
    <div class="square"></div>
    <div class="label">{{ props.tooltip }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  tooltip: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
div.scheduler-side-navigation-bar-tooltip-container {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
}
div.scheduler-side-navigation-bar-tooltip-container > svg {
  width: 24px;
  height: 24px;
}
div.scheduler-side-navigation-bar-tooltip-container > div.square {
  width: 10px;
  height: 10px;
  background: #F7F7F7;
  border: 1px solid #AAA;
  transform: rotate(45deg);
  z-index: 2;
}
div.scheduler-side-navigation-bar-tooltip-container > div.label {
  font-size: 12px;
  background-color: #F7F7F7;
  border: 1px solid #AAA;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
  z-index: 3;
  margin-left: -8px;
  border-left: 0;
}
</style>