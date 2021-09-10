<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 명"></TodoInput> -->
      <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
      <!-- v-bind: 내려보낼 프롭스 속성 이름 =“ 현재 위치의 컴포넌트 데이터 속성” -->
      <!-- TodoList 로 propsdata 내릴때 inputItems 배열을 같이 내림 -->
      <TodoList v-bind:propsdata="inputItems" 
                v-on:removeItem="removeOneItem" 
                v-on:toggleItem="toggleOneItem">
      </TodoList>
      <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
// 컴포넌트 (구성요소) 등록
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    
    data() {
      return {
        inputItems: [] //로컬스토리지 텍스트 담을 배열
      }
  },
  methods: {
    addOneItem(todoItem) {

        const obj = {completed:false, item:todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.inputItems.push(obj);
      },
    removeOneItem(inputItem, index){

        //로컬 스토리지 영역 inputItem 삭제
        localStorage.removeItem(inputItem.item);
        this.inputItems.splice(index, 1);
      },
    toggleOneItem(inputItem, index){
        //completed 설정
        this.inputItems[index].completed = !inputItem.completed;//inputItems 배열에서 [해당요소]에 접근하여 completed접근
        //로컬스토리지에 completed 된 데이터 삭제 후
        //다시 갱신해줌
        localStorage.removeItem(inputItem.item);
        localStorage.setItem(inputItem.item, JSON.stringify(inputItem));
      
      },
    clearAllItems(){

        localStorage.clear();
        this.inputItems = [];
      }


    },


    created(){

      //로컬스토리지에 저장된 input text 접근
      if(localStorage.length > 0 ){
        for(let i = 0; i < localStorage.length; i++){      
          // console.log(localStorage.key(i));
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.inputItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //inputItems 배열에 push
            
          }    
        }
      }
    },
    components: {
      // '컴포넌트 이름' : '컴포넌트 내용'
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
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
