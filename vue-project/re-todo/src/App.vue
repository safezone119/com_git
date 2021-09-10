<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 명"></TodoInput> -->
      <TodoInput></TodoInput>
      <!-- v-bind: 내려보낼 프롭스 속성 이름 =“ 현재 위치의 컴포넌트 데이터 속성” -->
      <!-- TodoList 로 propsdata 내릴때 inputItems 배열을 같이 내림 -->
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

export default {
    
    data: function() {
      return {
        inputItems: [] //로컬스토리지 텍스트 담을 배열
      }
  },
  // methods: { //mutations 돌연변이 (??)
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
