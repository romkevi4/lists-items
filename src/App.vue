<script setup lang="ts">
  import LeftBlock from './components/LeftBlock.vue'
  import RightBlock from './components/RightBlock.vue'
</script>

<template>
  <div class="container">
    <left-block />
    <right-block />
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    padding: 3rem;
    width: 85%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
