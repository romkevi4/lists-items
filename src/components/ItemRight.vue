<script setup lang="ts">
  import ElementItem from '@/components/ElementItem.vue'
</script>

<template>
  <div class="item-right">
    <element-item />
  </div>
</template>

<style scoped>
  .item-right {
    padding-top: .5rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .item-right:first-of-type {
    padding-top: 0;
  }
</style>
