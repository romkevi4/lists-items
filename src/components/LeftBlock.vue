<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useGlobalStore } from '../../store/store'

  import ListLeft from './ListLeft.vue'

  import { setDataOfLists } from '@/utils/initialData'
  import { IList } from '../../models'

  const store = useGlobalStore()
  const lists = ref<IList[]>(setDataOfLists())

  onMounted(() => {
    store.setCurrentLists(lists.value)
  })
</script>

<template>
  <div class="left-block">
    <list-left
      v-for="(list, index) in store.currentLists"
      :key="index"
      :list="list"
    />
  </div>
</template>

<style scoped>
  .left-block {
    padding: 1rem .5rem;
    width: 45%;
    height: 100%;
    border: 1px solid gray;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
</style>
