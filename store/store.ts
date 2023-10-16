import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    lists: [],
    items: []
  }),
  actions: {

  }
})