<script setup lang="ts">
  import ItemRight from '@/components/ItemRight.vue'

</script>

<template>
  <div class="list-right">
    <div class="list-right__box">
      <h3></h3>
      <button type="button" class="list-right__btn-sort">Перемешать</button>
    </div>

    <div class="list-right__items">
      <item-right />
    </div>
  </div>
</template>

<style scoped>
  .list-right {
    padding: 0 0 .5rem 0;
    width: 100%;
    border: 1px solid gray;
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
</style>