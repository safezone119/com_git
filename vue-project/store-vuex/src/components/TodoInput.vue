<template>
  <div class="inputBox shadow">
    
    <input type="text" v-model="userTodoInput" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
        <!-- slot === 특정 컴포넌트의 일부 ui를 재 사용할 수 있는 기능 -->
        <h3 slot="header">
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
        <p slot="body">
          입력해주세요
        </p>
        <p slot="footer"> 
          카피라이트

        </p>
    </Modal>

  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {

  data: function(){
    return{
      userTodoInput: "",
      showModal: false
    }
  },
  methods: {
    addTodo(){

      if(this.userTodoInput !== ""){
        // console.log(this.userTodoInput);
        this.$emit('addTodoItem', this.userTodoInput);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    //input 초기화
    clearInput(){
      this.userTodoInput = '';  
    }
  },
  components: {
    Modal
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

.closeModalBtn{

  color: #42b983;
}


</style>