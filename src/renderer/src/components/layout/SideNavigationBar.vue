<template>
  <nav class="scheduler-side-nav-bar" id="scheduler-side-nav-bar">
    <ViewIconCheckList></ViewIconCheckList>
    <div class="scheduler-side-nav-bar-tooltip">체크리스트</div>
    <ViewIconKanban></ViewIconKanban>
    <div class="scheduler-side-nav-bar-tooltip">칸반보드</div>
    <ViewIconTimeline></ViewIconTimeline>
    <div class="scheduler-side-nav-bar-tooltip">타임라인</div>
  </nav>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import ViewIconCheckList from './sideNavigationBar/ViewIconCheckList.vue'
import ViewIconKanban from './sideNavigationBar/ViewIconKanban.vue'
import ViewIconTimeline from './sideNavigationBar/ViewIconTimeline.vue'

onMounted(() => {
  const container = document.getElementById('scheduler-side-nav-bar')
  if (container) {
    container.querySelectorAll('svg').forEach(icon => {
      const iconElement = icon.getBoundingClientRect()
      if (icon.nextElementSibling) {
        const iconTooltip: HTMLElement = icon.nextElementSibling as HTMLElement
        const iconTooltipElement = iconTooltip.getBoundingClientRect()
        iconTooltip.style.top = (iconElement.y - (iconTooltipElement.height / 2) + 5) + 'px'
        iconTooltip.style.left = (iconElement.x + iconElement.width) + 'px'
      }
    })
  }
})
</script>
<style>
nav.scheduler-side-nav-bar {
  width: 40px;
  padding: 5px 9.333px 5px 10px;
  /* background-color: var(--primary-color); */
  background-color: #F7F7F7;
  border-right: 1px solid #AAA;
  height: calc(100vh - 41px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
nav.scheduler-side-nav-bar > svg {
  width: 40px;
  height: 40px;
  padding: 5px 0 10px 0;
  fill: #919191;
}
nav.scheduler-side-nav-bar > svg:hover {
  fill: #000;
  cursor: pointer;
}
div.scheduler-side-nav-bar-tooltip {
  position: absolute;
  z-index: 2;
  opacity: 0;
  font-size: 0.75em;
}
nav.scheduler-side-nav-bar > svg:hover + div.scheduler-side-nav-bar-tooltip {
  opacity: 1;
  transition: opacity 0.25s 0.5s;
}
</style>
