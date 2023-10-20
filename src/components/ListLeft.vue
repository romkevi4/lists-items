<script setup lang="ts">
  import { ref, defineProps } from 'vue'

  import ItemLeft from '@/components/ItemLeft.vue'

  import { useGlobalStore } from '../../store/store'
  import { IList } from '../../models'

  import iconArrow from '@/assets/icons/icon-arrow-right.svg'

  interface PropsListLeft {
    list: IList
  }

  const store = useGlobalStore()
  const props = defineProps<PropsListLeft>()

  const isOpen = ref<boolean>(props.list.opened)
  const isFullList = ref<boolean | null>(null)

  const toggleAccordion = (): void => {
    isOpen.value = !isOpen.value
    store.setOpenOfList(isOpen.value, props.list.name)
  }

  function handleInputListChecked(): void {
    const { allItemsActive, allItemsInactive } = determineActivityOfItems()

    if (allItemsActive || allItemsInactive) {
      store.toggleListCheckbox(props.list.name)
    } else {
      console.log('два')
      // console.log(props.list.active)
      // store.setActiveList(props.list.name)
      isFullList.value = null
      store.toggleActiveAllItems(props.list.name)
      console.log(`list.active:  ${props.list.active}`)
      console.log(`isFullList:  ${isFullList.value}`)
    }
  }

  function determineActivityOfItems(): {allItemsActive: boolean, allItemsInactive: boolean} {
    const allItemsActive = props.list.items.every(item => item.active)
    const allItemsInactive = props.list.items.every(item => !item.active)

    return {
      allItemsActive,
      allItemsInactive
    }
  }

  function checkItems() {
    const { allItemsActive, allItemsInactive } = determineActivityOfItems()

    if (!allItemsActive && !allItemsInactive) {
      // !props.list.active && store.toggleActiveList(props.list.name)
      isFullList.value = false
    } else if (allItemsActive) {
      isFullList.value = true
    } else if (allItemsInactive) {
      store.toggleActiveList(props.list.name)
      isFullList.value = null
    }
  }
</script>

<template>
  <div class="list-left">
    <div class="list-left__header">
      <img
        @click="toggleAccordion"
        :src="iconArrow"
        alt="icon-arrow"
        class="list-left__icon-arrow"
        :class="{'list-left__icon-arrow_position_down': list.opened}"
      >

      <input
        type="checkbox"
        :checked="list.active"
        @input="handleInputListChecked"
        class="list-left__input-checkbox"
        :class="{'list-left__input-checkbox_type_point': isFullList === false}"
      >

      <h3 class="list-left__title">{{ list.name }}</h3>
    </div>

    <div v-if="isOpen" class="list-left__items">
      <item-left
        v-for="(item, index) in list.items"
        :key="index"
        :item="item"
        :list="list"
        @check-list-items="checkItems"
      />
    </div>
  </div>
</template>

<style scoped>
  .list-left {
    padding: 0 0 .5rem 0;
    width: 100%;
  }

  .list-left:last-of-type {
    padding-bottom: 0;
  }

  .list-left__header {
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: start;
    transition: background-color .2s;
  }

  .list-left__header:hover {
    background-color: #DCDCDC;
    border-radius: .2rem;
  }

  .list-left__icon-arrow {
    width: 1rem;
    height: auto;
    transition: transform .2s;
  }

  .list-left__icon-arrow_position_down {
    transform: rotate(90deg);
  }

  .list-left__input-checkbox {
    margin: 0 .5rem 0;
    width: 1rem;
    height: 1rem;
    appearance: none;
    background: transparent;
    border: 1px solid gray;
    border-radius: .2rem;
  }

  .list-left__input-checkbox::before {
    content: '';
    display: block;
    font-size: .8rem;
    color: gray;
    text-align: center;
    line-height: 1rem;
  }

  .list-left__input-checkbox:checked::before {
    content: '\2713';
  }

  .list-left__input-checkbox_type_point:checked::before {
    content: '\2022';
  }

  .list-left__input-checkbox:hover {
    cursor: pointer;
  }

  .list-left__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: normal;
  }

  .list-left__items {
    padding: .5rem 0 0 3rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .list-left__icon-arrow:hover,
  .list-left__input-checkbox:hover {
    cursor: pointer;
  }
</style>
