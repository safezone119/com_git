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
    addTodo: function(){

      if(this.userTodoInput !== ""){
        // 변경 전 
        //this.$emit('addTodoItem', this.userTodoInput);
        // 변경 후

        //version 1

        //$store 를 통해 vuex 접근 , commit store.js에 있는 mutation ->addOneItem 을 동작시키기위해
        this.$store.commit('addOneItem', this.userTodoInput); 
        //addOneItem(state, 인자값 ) this.userTodoInput 넘김

        //version2
        // const text = this.userTodoInput.trim(); //trim으로 유저가 입력한 공백값을 없앰
        // this.$store.commit('addOneItem', text);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    //input 초기화
    clearInput: function(){
      this.userTodoInput = '';  
    }
  },
  components: {
    Modal: Modal
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