<script setup lang="ts">
  import ListLeft from './ListLeft.vue'
  import { AMOUNT_OF_LISTS } from '@/utils/constants'
</script>

<template>
  <div class="left-block">
    <list-left
      v-for="index in AMOUNT_OF_LISTS"
      :key="index"
      :listNumber="index"
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
