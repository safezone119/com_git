<template>
  <div class="inputBox shadow">
    
    <input type="text" v-model="userTodoInput" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {

  data: function(){
    return{
      userTodoInput: ""
    }
  },
  methods: {
    addTodo: function(){

      if(this.userTodoInput !== ""){
        // console.log(this.userTodoInput);
        var obj = {completed:false, item: this.userTodoInput };

        //로컬스토리지 저장 로직
        //stringify(obj)  obj 객체를 String으로 변환해줌
        //obj로 확인 했을 때 -- key : 동사무소 가기 value: [object Object]
        //stringify 변환 시 -- key : 동사무소 가기   value: {"completed: false , item: 동사무소가기 }
        
        localStorage.setItem(this.userTodoInput, JSON.stringify(obj));
        this.clearInput();
      }
    },
    //input 초기화
    clearInput: function(){
      this.userTodoInput = '';  
    }

  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: .9rem;
}
.addContainer{
  cursor: pointer;
  float: right;
  background: linear-gradient(to right, #6478FB,#8763FB);
  display: block;
  width: 3rem;
  border-radius: 0px 5px 5px 0px;
}
.addBtn{
  color: white;
  vertical-align: middle;
}

</style>