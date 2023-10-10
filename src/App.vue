<script setup lang="ts">
  import AppLeftBlock from './components/AppLeftBlock.vue'
  import AppRightBlock from './components/AppRightBlock.vue'
</script>

<template>
  <div class="container">
    <app-left-block />
    <app-right-block />
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    padding: 3rem;
    width: 85%;
    height: 85%;
    border: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
