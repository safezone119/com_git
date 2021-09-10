<template>
  <div id="app">
      <div class="container">
        <div class="col-md-6 offset-md-3">
          <h1 class="texr-center md-4">Todo 어플리케이션</h1>
          <!-- v-model 양방향 데이터 바인딩을 지원하는 속성 -->
          <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo">
        </div>
      </div>
      <div class="list-group">
          
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      userInput: '',
      // todoList === 사용자 input 값을 가지고 있을 배열
      //사용자가 엔터를 누르면 입력 값을 배열에 추가한 후 userInput 초기화
      todoList: []
    };
  },
  //엔터 입력 시 실행할 메소드
  methods: {
    addNewTodo(){

      this.todoList.push(this.userInput); //사용자 입력 값을 todoList 배열에 추가
      this.userInput = ''
    }
  },
  components:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
