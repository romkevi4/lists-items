<script setup lang="ts">
  import { ref, defineProps, onMounted } from 'vue'

  import { useGlobalStore } from '../../store/store'
  import { IList } from '../../models'

  interface PropsItemRightMixed {
    list: IList
  }

  const store = useGlobalStore()
  const props = defineProps<PropsItemRightMixed>()

  const amountOfItems = ref<number>(0)
  const colorsOfItems = ref<string[]>(props.list.colors)

  function getDataOfItems() {
    props.list.items.forEach((item) => amountOfItems.value = amountOfItems.value + item.amount)
  }

  function changeAmountOfItem(color: string) {
    store.setAmountOfRightItem(color, props.list.name)
    store.removeColorInArrayWithColors(store.randomColors, color)
  }

  onMounted(() => {
    getDataOfItems()
    store.mixColorsOfItems(colorsOfItems.value)
  })
</script>

<template>
  <div class="item-right-mixed">
    <div
      v-for="(color, index) in store.randomColors"
      :key="index"
      :style="{backgroundColor: color}"
      @click="changeAmountOfItem(color)"
      class="item-right-mixed__element">
    </div>
  </div>
</template>

<style scoped>
  .item-right-mixed {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    row-gap: .2rem;
  }

  .item-right-mixed:first-of-type {
    padding-top: 0;
  }

  .item-right-mixed__element {
    margin-right: .2rem;
    width: 1rem;
    height: 1rem;
    border-radius: .2rem;
  }

  .item-right-mixed__element:last-of-type {
    margin-right: 0;
  }

  .item-right-mixed__element:hover {
    cursor: pointer;
  }
</style>
