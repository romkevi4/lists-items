<script setup lang="ts">
  import { ref, defineProps } from 'vue'

  import ItemRightSorted from '@/components/ItemRightSorted.vue'
  import ItemRightMixed from '@/components/ItemRightMixed.vue'

  import { IList } from '../../models'

  interface PropsListRight {
    list: IList
  }

  defineProps<PropsListRight>()

  const isSorted= ref<boolean>(true)

  const toggleSorting = () => isSorted.value = !isSorted.value
</script>

<template>
  <div v-if="list.opened" class="list-right">
    <div class="list-right__box">
      <h3 class="list-right__title">{{ list.name }}</h3>
      <button @click="toggleSorting" type="button" class="list-right__btn-sort">{{ isSorted ? 'Перемешать' : 'Сортировать'}}</button>
    </div>

    <div v-if="isSorted" class="list-right__items">
      <item-right-sorted
        v-for="(item, index) in list.items"
        :key="index"
        :item="item"
        :list="list"
      />
    </div>

    <div v-else class="list-right__items">
      <item-right-mixed
        :list="list"
      />
    </div>
  </div>

  <div v-else class="list-right">
    <div class="list-right__box">
      <h3 class="list-right__title">{{ list.name }}</h3>
    </div>
  </div>
</template>

<style scoped>
  .list-right {
    margin-bottom: 1rem;
    padding: .5rem;
    width: 100%;
    border: 1px solid gray;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .list-right:last-of-type {
    margin-bottom: 0;
  }

  .list-right__box {
    margin: 0;
    width: 100%;
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-right__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: normal;
  }

  .list-right__btn-sort {
    padding: .4rem .8rem;
    background-color: cornflowerblue;
    color: #fff;
    border: none;
    border-radius: .5rem;
    font-size: 1rem;
    font-weight: normal;
    opacity: 1;
    transition: opacity .2s;
  }

  .list-right__btn-sort:hover {
    cursor: pointer;
    opacity: .7;
  }

  .list-right__items {
    margin-top: .5rem;
    width: 100%;
  }

  .list-right__header {
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
</style>