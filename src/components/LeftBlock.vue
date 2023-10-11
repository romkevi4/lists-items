<script setup lang="ts">
  import ListLeft from './ListLeft.vue'
</script>

<template>
  <div class="left-block">
    <list-left />
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
