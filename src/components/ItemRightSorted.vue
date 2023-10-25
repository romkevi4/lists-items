<script setup lang="ts">
  import { defineProps } from 'vue'

  import { useGlobalStore } from '../../store/store'
  import { IItem, IList } from '../../models'

  interface PropsItemRightSorted {
    item: IItem,
    list: IList
  }

  const store = useGlobalStore()
  const props = defineProps<PropsItemRightSorted>()

  function changeAmountOfItem() {
    store.setAmountOfRightItemSorted(props.list.name, props.item.name)
  }
</script>

<template>
  <div v-if="item.amount > 0" class="item-right-sorted">
    <div
      v-for="index in item.amount"
      :key="index"
      :style="{backgroundColor: item.color}"
      @click="changeAmountOfItem()"
      class="item-right-sorted__element">
    </div>
  </div>
</template>

<style scoped>
  .item-right-sorted {
    padding-top: .6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    row-gap: .2rem;
  }

  .item-right-sorted:first-of-type {
    padding-top: 0;
  }

  .item-right-sorted__element {
    margin-right: .2rem;
    width: 1rem;
    height: 1rem;
    border-radius: .2rem;
  }

  .item-right-sorted__element:last-of-type {
    margin-right: 0;
  }

  .item-right-sorted__element:hover {
    cursor: pointer;
  }
</style>
