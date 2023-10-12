<script setup lang="ts">
  import ListRight from './ListRight.vue'
</script>

<template>
  <div class="right-block">
    <list-right />
  </div>
</template>

<style scoped>
  .right-block {
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
