<script setup lang="ts">
  import { ref } from 'vue'

  import iconArrow from '@/assets/icons/icon-arrow-right.svg'

  const isOpen = ref<boolean>(false)

  const toggleAccordion = () => isOpen.value = !isOpen.value

</script>

<template>
  <div class="list-left">
    <div class="list-left__header">
      <img
        @click="toggleAccordion"
        :src="iconArrow"
        alt="icon-arrow"
        class="list-left__icon-arrow"
        :class="{'list-left__icon-arrow_position_down' : isOpen}"
      >
      <input type="checkbox" class="list-left__input-checkbox">
      <h3 class="list-left__title">List 1</h3>
    </div>

    <div v-if="isOpen" class="list-left__items">
      <div class="list-left__item">
        <div class="list-left__box">
          <input type="checkbox" class="list-left__input-checkbox">
          <p class="list-left__item-name">Item 1</p>
        </div>

        <div class="list-left__box">
          <input type="text" placeholder="10" class="list-left__input-number">
          <input type="color" class="list-left__input-color">
        </div>
      </div>
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
    padding-left: 3rem;
    width: 80%;
    display: flex;
  }

  .list-left__item {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-left__box {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .list-left__item-name {
    margin: 0;
  }

  .list-left__input-number {
    margin-right: .5rem;
    padding: 0;
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
  }

  .list-left__input-color {
    padding: 0;
    width: 1rem;
    height: 1rem;
    appearance: none;
    border: none;
    background-color: transparent;
  }

  .list-left__input-color::-webkit-color-swatch-wrapper {
    padding: 0;
    width: 1rem;
    height: 1rem;
    border: none;
  }

  .list-left__input-color::-webkit-color-swatch {
    border: none;
  }

  .list-left:hover,
  .list-left__input-checkbox:hover,
  .list-left__input-color:hover {
    cursor: pointer;
  }
</style>
