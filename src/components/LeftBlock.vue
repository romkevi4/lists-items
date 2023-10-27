<script setup lang="ts">
  import { useGlobalStore } from '../../store/store'
  import ListLeft from './ListLeft.vue'

  const store = useGlobalStore()
</script>

<template>
  <div class="left-block">
    <list-left
      v-for="(list, index) in store.currentLists"
      :key="index"
      :list="list"
    />
  </div>
</template>

<style scoped>
  .left-block {
    padding: 1rem .5rem;
    width: 45%;
    height: 100%;
    border: 1px solid gray;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
</style>
