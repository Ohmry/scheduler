<template>
  <ElectronViteTitleBar icon="src/assets/icon.svg" title="Scheduler" :menu="menu"></ElectronViteTitleBar>
  <main class="scheduler-main-container">
    <SideNavigationBar></SideNavigationBar>
    <router-view></router-view>
  </main>
</template>
<script setup lang="ts">
import { ElectronViteTitleBar } from '@ohmry/electron-vite-title-bar-typescript'
import '@ohmry/electron-vite-title-bar-typescript/dist/style.css'
import menu from '@renderer/resources/menu'
import SideNavigationBar from './components/layout/SideNavigationBar.vue'
</script>
<style>
main.scheduler-main-container {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>
