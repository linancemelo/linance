import { defineStore } from 'pinia'

// 1.store名稱
// 2.屬性名稱
export default defineStore('user store', {
  // data
  state: () => {
    return {
      player: 'Melo',
      age: 37
    }
  },
  // computed
  getters: {
    getUserName: (state) => {
      return `我的名字叫:${state.player}`
    }
  },
  // methods , 可以用this
  actions: {
    updatePlayer () {
      this.player = 'James'
      this.age = 38
    }
  }
})
