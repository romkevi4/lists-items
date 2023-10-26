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
  const randomColorsArr = ref<string[]>([])

  function getDataOfItems() {
    props.list.items.forEach((item) => amountOfItems.value = amountOfItems.value + item.amount)
  }

  // function changeCurrentColorOfItems() {
  //
  // }

  function mixColorsOfItems(): void {
    randomColorsArr.value = [...colorsOfItems.value]

    for (let i = randomColorsArr.value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomColorsArr.value[i], randomColorsArr.value[j]] = [randomColorsArr.value[j], randomColorsArr.value[i]]
    }
  }

  function changeAmountOfItem(color: string, index: number) {
    // store.randomColorsOfItems.splice(index, 1)
    store.setAmountOfRightItemMixed(color, props.list.name)
  }

  onMounted(() => {
    getDataOfItems()
    // mixColorsOfItems()
    // store.mixColors()
  })
</script>

<template>
  <div class="item-right-mixed">
    <div
      v-for="(color, index) in store.randomColorsOfItems"
      :key="index"
      :style="{backgroundColor: color}"
      @click="changeAmountOfItem(color, index)"
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
