<script setup lang="ts">
  import { ref, defineProps } from 'vue'

  import { useGlobalStore } from '../../store/store'
  import { IList } from '../../models'

  interface PropsItemRightMixed {
    list: IList
  }

  const store = useGlobalStore()
  const props = defineProps<PropsItemRightMixed>()

  const amountOfItems = ref<number>(0)
  const colorsOfItems = ref<string[]>([])
  const randomColorsArr = ref<string[]>(mixColorsOfItems())

  function getDataOfItems() {
    props.list.items.forEach((item) => {
      for (let i = 0; i <= item.amount; i++) {
        colorsOfItems.value.push(item.color)
      }

      amountOfItems.value = amountOfItems.value + item.amount
    })
  }

  function mixColorsOfItems(): string[] {
    getDataOfItems()
    const randomColorsArr = [...colorsOfItems.value]

    for (let i = randomColorsArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomColorsArr[i], randomColorsArr[j]] = [randomColorsArr[j], randomColorsArr[i]];
    }

    return  randomColorsArr
  }

  function changeAmountOfItem() {
    // store.setAmountOfRightItem(props.list.name, props.item.name)
  }
</script>

<template>
  <div class="item-right-mixed">
    <div
      v-for="index in amountOfItems"
      :key="index"
      :style="{backgroundColor: randomColorsArr[index]}"
      @click="changeAmountOfItem()"
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
