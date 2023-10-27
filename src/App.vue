<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import LeftBlock from './components/LeftBlock.vue'
  import RightBlock from './components/RightBlock.vue'

  import { useGlobalStore } from '../store/store'
  import { IList } from '../models'
  import { setDataOfLists } from '@/utils/initialData'

  const store = useGlobalStore()
  const lists = ref<IList[]>(setDataOfLists())

  onMounted(() => {
    store.setCurrentLists(lists.value)
  })
</script>

<template>
  <div class="container">
    <left-block />
    <right-block />
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    padding: 3rem;
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
