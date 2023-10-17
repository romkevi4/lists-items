<script setup lang="ts">
  import { defineProps } from 'vue'
  import { IItem } from '../../models'

  interface PropsItemLeft {
    item: IItem
  }

  defineProps<PropsItemLeft>()
</script>

<template>
  <div class="item-left">
    <div class="item-left__box">
      <input type="checkbox" class="item-left__input-checkbox">
      <p class="item-left__name">{{ item.name }}</p>
    </div>

    <div class="item-left__box">
      <input
        type="text"
        placeholder="--"
        :value="item.amount"
        class="item-left__input-number"
      >
      <input
        type="color"
        :value="item.color"
        class="item-left__input-color"
      >
    </div>
  </div>
</template>

<style scoped>
  .item-left {
    padding-top: .5rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-left:first-of-type {
    padding-top: 0;
  }

  .item-left__box {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .item-left__input-checkbox {
    margin: 0 .5rem 0;
    width: 1rem;
    height: 1rem;
    appearance: none;
    background: transparent;
    border: 1px solid gray;
    border-radius: .2rem;
  }

  .item-left__input-checkbox::before {
    content: '';
    display: block;
    font-size: .8rem;
    color: gray;
    text-align: center;
    line-height: 1rem;
  }

  .item-left__input-checkbox:checked::before {
    content: '\2713';
  }

  .item-left__input-checkbox:hover {
    cursor: pointer;
  }

  .item-left__name {
    margin: 0;
  }

  .item-left__input-number {
    margin-right: .5rem;
    padding: 0;
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
  }

  .item-left__input-color {
    padding: 0;
    width: 1rem;
    height: 1rem;
    appearance: none;
    border: none;
    background-color: transparent;
  }

  .item-left__input-color::-webkit-color-swatch-wrapper {
    padding: 0;
    width: 1rem;
    height: 1rem;
    border: none;
  }

  .item-left__input-color::-webkit-color-swatch {
    border: none;
  }
</style>
