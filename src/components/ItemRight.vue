<script setup lang="ts">
  import { defineProps } from 'vue'
  import { IItem } from '../../models'

  interface PropsItemRight {
    item: IItem
  }

  defineProps<PropsItemRight>()
</script>

<template>
  <div class="item-right">
    <div
      v-for="index in item.amount"
      :key="index"
      class="item-right__element"
      :style="{backgroundColor: item.color}">
    </div>
  </div>
</template>

<style scoped>
  .item-right {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    row-gap: .2rem;
  }

  .item-right:first-of-type {
    padding-top: 0;
  }

  .item-right__element {
    margin-right: .2rem;
    width: 1rem;
    height: 1rem;
    border-radius: .2rem;
  }

  .item-right__element:last-of-type {
    margin-right: 0;
  }
</style>
