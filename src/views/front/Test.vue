<template>
  <div>
    {{user.player}}, {{user.age}} <br/>
    <button type="button" @click="user.updatePlayer">click me</button>
    <button @click.prevent="changeName">透過$patch修改值</button>
    <button @click.prevent="resetName">透過$reset重置值</button>
  </div>
  <!-- <h1>ref響應式</h1>
  <button @click.prevent="addNum">+1</button>
  <p>{{num}}</p>
  <h1>reactive響應式</h1>
  <button @click.prevent="changeName">更改</button>
  <p>{{user.name}}</p> -->
</template>

<script>
// import { ref, reactive, watchEffect } from 'vue'
// import { mapState } from 'pinia'
import userStore from '@/store/user'
export default {
  setup () {
    const user = userStore()
    function changeName () {
      user.$patch({
        player: 'Wade'
      })
    }
    function resetName () {
      user.$reset()
    }
    return {
      user, changeName, resetName
    }
    //   // ref
    //   // const num = ref(0)
    //   // function addNum () {
    //   //   num.value += 1
    //   // }
    //   // watch(num, (newVal, oldVal) => {
    //   //   console.log('新', newVal, ',舊', oldVal)
    //   // })

    //   // reactive
    //   // const user = reactive({
    //   //   name: 'Melo',
    //   //   age: 20
    //   // })
    //   // function changeName () {
    //   //   user.name = 'James'
    //   // }
    //   // 監聽深層物件內容要用箭頭函式開頭
    //   // watch(() => user.name, (newVal, oldVal) => {
    //   //   console.log('新', newVal, ',舊', oldVal)
    //   // })

    //   // 多值監聽
    //   // watch([num, user], ([num, user], [num, user]) => {

    //   // })

  //   // watchEffect
  //   // watchEffect(() => {
  //   //   console.log(num.value)
  //   //   console.log(user.name)
  //   // })
  //   // return { num, addNum, user, changeName }
  }
}
</script>

<style>

</style>
