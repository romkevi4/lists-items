<script setup lang="ts">
  import { defineProps } from 'vue'

  import ItemRight from '@/components/ItemRight.vue'

  // import { useGlobalStore } from '../../store/store'
  import { IList } from '../../models'

  interface PropsListRight {
    list: IList
  }

  // const store = useGlobalStore()
  defineProps<PropsListRight>()
</script>

<template>
  <div v-if="list.active" class="list-right">
    <div class="list-right__box">
      <h3 class="list-right__title">{{ list.name }}</h3>
      <button type="button" class="list-right__btn-sort">Перемешать</button>
    </div>

    <div class="list-right__items">
      <item-right
        v-for="(item, index) in list.items"
        :key="index"
        :item="item"
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