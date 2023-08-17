<template>
  <ElectronViteTitleBar icon="src/assets/icon.svg" title="Scheduler" :menu="menu" @onMenuClick="onMenuClick"></ElectronViteTitleBar>
  <main class="scheduler-main-container">
    <SideNavigationBar></SideNavigationBar>
    <router-view class="scheduler-content-container"></router-view>
  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { ElectronViteTitleBar, ElectronViteTitleBarMenu } from '@ohmry/electron-vite-title-bar-typescript'
import '@ohmry/electron-vite-title-bar-typescript/dist/style.css'
import menu from '@renderer/resources/menu'
import SideNavigationBar from './components/layout/SideNavigationBar.vue'

onMounted(() => {
  
})

const onMenuClick = (id: string, label: string): void => {
  console.log(id, label)
}
</script>
<style>
:root {
  /* --evtb-container-background-color: var(--primary-color);
  --evtb-container-border-bottom-color: var(--primary-color);
  --evtb-root-menu-item-background-color: var(--primary-color);
  --evtb-title-container-text-color: white;
  --evtb-root-menu-item-text-color: white; */
}
main.scheduler-main-container {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.scheduler-content-container {
  padding: 10px;
}
</style>
