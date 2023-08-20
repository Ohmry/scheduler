<template>
  <ElectronViteTitleBar icon="src/assets/icon.svg" title="Scheduler" :menu="menu" @onMenuClick="onMenuClick"></ElectronViteTitleBar>
  <main class="scheduler-main-container">
    <SideNavigationBar></SideNavigationBar>
    <section class="scheduler-content-container">
      <router-view ></router-view>
    </section>    
  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElectronViteTitleBar, ElectronViteTitleBarMenu } from '@ohmry/electron-vite-title-bar-typescript'
import '@ohmry/electron-vite-title-bar-typescript/dist/style.css'
import menu from '@renderer/resources/menu'
import SideNavigationBar from './components/layout/SideNavigationBar.vue'

const router = useRouter()

onMounted(() => {
  
})

const onMenuClick = (id: string, label: string): void => {
  if (id == 'menu-checklist-view') {
    router.push('checklist-view')
  } else if (id == 'menu-kanbanboard-view') {
    router.push('kanbanboard-view')
  } else if (id == 'menu-ganttchart-view') {
    router.push('ganttchart-view')
  }
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
body {
  overflow: hidden;
}
main.scheduler-main-container {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.scheduler-content-container {
  width: calc(100% - 50.667px);
  height: calc(100vh - 30.667px);
  overflow-y: auto;
}
</style>
