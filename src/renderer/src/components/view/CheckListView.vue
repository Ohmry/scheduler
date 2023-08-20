<template>
  <main>
    <ViewTitle title="체크리스트"></ViewTitle>
    <section class="checklist-view-container">
      <ul id="checklist-group">
        <CheckListItem v-for="(item) in data.list" :subject="item.subject"></CheckListItem>
      </ul>
    </section>
    <section class="checklist-input-container">
      <input id="checklist-input-box" type="text"/>
      <button id="checklist-input-button-add">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M464.615-464.615H240v-30.77h224.615V-720h30.77v224.615H720v30.77H495.385V-240h-30.77v-224.615Z"/></svg>
      </button>
      <button id="checklist-input-button-detail">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479.899-218.461q-10.322 0-17.572-7.351t-7.25-17.673q0-10.323 7.351-17.957 7.35-7.635 17.673-7.635 10.322 0 17.572 7.589t7.25 18.245q0 10.339-7.351 17.561-7.35 7.221-17.673 7.221Zm0-236.616q-10.322 0-17.572-7.351-7.25-7.35-7.25-17.673 0-10.322 7.351-17.572 7.35-7.25 17.673-7.25 10.322 0 17.572 7.351 7.25 7.35 7.25 17.673 0 10.322-7.351 17.572-7.35 7.25-17.673 7.25Zm0-235.846q-10.322 0-17.572-7.589t-7.25-18.245q0-10.339 7.351-17.561 7.35-7.221 17.673-7.221 10.322 0 17.572 7.351t7.25 17.673q0 10.323-7.351 17.957-7.35 7.635-17.673 7.635Z"/></svg>
      </button>
    </section>
  </main>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import ViewTitle from './common/ViewTitle.vue'
import CheckListItem from './checkList/CheckListItem.vue'

interface JobInfo {
  subject: string
}

const data = reactive({
  list: Array<JobInfo>()
})

onMounted(() => {
  const inputBox: HTMLInputElement = document.getElementById('checklist-input-box') as HTMLInputElement
  if (inputBox) {
    inputBox.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        e.preventDefault()
        data.list.push({
          subject: inputBox.value
        })
        inputBox.value = ''
      }
    })
  }
})

</script>
<style scoped>
main {
  padding: 20px;
}
section.checklist-view-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
}
ul#checklist-group {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
ul#checklist-group > li:not(:first-child) {
  margin: 10px 0 0 0;
}
section.checklist-input-container {
  position: fixed;
  bottom: 0;
  height: 50px;
  left: 50.667px;
  width: calc(100% - 90.667px);
  border-top: 1px solid #AAA;
  background-color: #F9F9F9;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
section.checklist-input-container > input[type=text] {
  /* width: calc(100% - 21.334px); */
  flex: 1;
  height: 30px;
  border-radius: 5px;
  outline: 0;
  border: 1px solid #AAA;
  padding: 3px 10px;
}
button#checklist-input-button-add, 
button#checklist-input-button-detail {
  background-color: transparent;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin: 0 0 0 10px;
  padding: 3px;
}
button#checklist-input-button-add > svg, 
button#checklist-input-button-detail > svg {
  fill: #000;
}
</style>