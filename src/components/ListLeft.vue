<script setup lang="ts">
  import { ref, defineProps, onMounted } from 'vue'

  import ItemLeft from '@/components/ItemLeft.vue'

  import { MIN_ITEM, MAX_ITEM } from '@/utils/constants'
  import { setNumberOfItems } from '@/utils/initialData'

  import iconArrow from '@/assets/icons/icon-arrow-right.svg'

  interface PropsListLeft {
    listNumber: number
  }

  defineProps<PropsListLeft>()

  const isOpen = ref<boolean>(false)
  const itemsNumber = ref<number | null>(null)

  const toggleAccordion = () => isOpen.value = !isOpen.value

  onMounted(() => {
      itemsNumber.value = setNumberOfItems(MIN_ITEM, MAX_ITEM)
  })

</script>

<template>
  <div class="list-left">
    <div class="list-left__header">
      <img
        @click="toggleAccordion"
        :src="iconArrow"
        alt="icon-arrow"
        class="list-left__icon-arrow"
        :class="{'list-left__icon-arrow_position_down': isOpen}"
      >
      <input type="checkbox" class="list-left__input-checkbox">
      <h3 class="list-left__title">{{ `List ${listNumber}` }}</h3>
    </div>

    <div v-if="isOpen" class="list-left__items">
      <item-left
        v-for="index in itemsNumber"
        :key="index"
        :itemNumber="index"
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

  .list-left:hover,
  .list-left__input-checkbox:hover,
  .list-left__input-color:hover {
    cursor: pointer;
  }
</style>
