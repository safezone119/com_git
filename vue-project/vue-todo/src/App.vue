<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// 컴포넌트 (구성요소) 등록
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
//ES5
// var my_cmp = {
//   template: '<div> my component </div>'
// };
// new Vue({
//   el: '',
//   components: {
//     '컴포넌트 이름' : '컴포넌트 내용'
//   }
// })

export default {
  components: {
    // '컴포넌트 이름' : '컴포넌트 내용'
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }

}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
