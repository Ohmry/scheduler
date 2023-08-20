<template>
  <nav class="scheduler-side-nav-bar" id="scheduler-side-nav-bar">
    <router-link to="/checklist-view">
      <ViewIconCheckList to="/checklist-view"></ViewIconCheckList>
      <div class="scheduler-side-nav-bar-tooltip">체크리스트로 보기</div>
    </router-link>
    <router-link to="/kanbanboard-view">
      <ViewIconKanban></ViewIconKanban>
      <div class="scheduler-side-nav-bar-tooltip">칸반보드로 보기</div>
    </router-link>
    <router-link to="/ganttchart-view">
      <ViewIconGanttChart></ViewIconGanttChart>
      <div class="scheduler-side-nav-bar-tooltip">간트차트로 보기</div>
    </router-link>
    <router-link to="/setting-view" style="margin-top: auto">
      <ViewIconSetting></ViewIconSetting>
      <div class="scheduler-side-nav-bar-tooltip">설정</div>
    </router-link>
  </nav>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import ViewIconCheckList from './sideNavigationBar/ViewIconCheckList.vue'
import ViewIconKanban from './sideNavigationBar/ViewIconKanban.vue'
import ViewIconGanttChart from './sideNavigationBar/ViewIconGanttChart.vue'
import ViewIconSetting from './sideNavigationBar/ViewIconSetting.vue'

onMounted(() => {
  const container = document.getElementById('scheduler-side-nav-bar')
  if (container) {
    container.querySelectorAll('svg').forEach(icon => {
      const iconElement = icon.getBoundingClientRect()
      if (icon.nextElementSibling) {
        const iconTooltip: HTMLElement = icon.nextElementSibling as HTMLElement
        iconTooltip.style.top = (iconElement.y - 10 - (iconElement.height / 2)) + 'px'
        iconTooltip.style.left = (iconElement.x + iconElement.width + 5) + 'px'
      }
    })
  }
})
</script>
<style>
nav.scheduler-side-nav-bar {
  width: 50px;
  padding: 5px 0;
  background-color: #F7F7F7;
  border-right: 1px solid var(--primary-color);
  height: calc(100vh - 40.667px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
nav.scheduler-side-nav-bar > a {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  margin: 5px 0;
  cursor: default;
}
nav.scheduler-side-nav-bar > a > svg {
  width: 35px;
  height: 35px;
  fill: #919191;
}
nav.scheduler-side-nav-bar > a > svg:hover {
  fill: #000;
  cursor: pointer;
}
nav.scheduler-side-nav-bar > a.router-link-active {
  background-color: var(--primary-color);
}
nav.scheduler-side-nav-bar > a.router-link-active > svg {
  fill: #FFF;
}
div.scheduler-side-nav-bar-tooltip {
  position: absolute;
  z-index: 2;
  opacity: 0;
  font-size: 12px;
  background-color: #686868;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 5px;
  color: white;
  user-select: none;
  pointer-events: none;
}
div.scheduler-side-nav-bar-tooltip:after {
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  border: 8px solid transparent;
  border-left-width: 0;
  border-right-color: #686868;
  left: -6px;
}
nav.scheduler-side-nav-bar > a > svg:hover + div.scheduler-side-nav-bar-tooltip {
  opacity: 1;
  transition: opacity 0.25s 0.25s;
}
</style>
