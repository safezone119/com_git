<template>
<!-- input박스에서 저장한 값들을 뿌려줌 -->
  <div>
    <transition-group name="list" tag="ul">
      <!-- 로컬스토리지에 저장된 개수만큼 반복해서 찍어냄 -->
      <!-- v-for="(할일 text, index 순서) in inputItems" for문 내장 인덱스를 넘김 -->
      <li v-for="(inputItem, index) in this.$store.state.inputItems" v-bind:key="inputItem.item" class="shadow">
        
          <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: inputItem.completed }" 
                                           v-on:click="toggleComplete(inputItem, index)"></i>
        
          <span v-bind:class="{textCompleted: inputItem.completed }">{{ inputItem.item }}</span>

        <!-- li 인덱스를 removeTodo 메소드에 넘겨서 삭제할 li를 찾음 -->
          <span class="removeBtn" v-on:click="removeTodo(inputItem,index)">
            <i class="fas fa-trash-alt"></i>
          </span>

      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
    props: ['propsdata'], //v-bind 데이터 받기 //props데이터 안에 inputItems 배열이 있음
    
    methods : { 
        removeTodo: function(inputItem, index){
          //removeItem 이벤트 발생시켜서 inputItem,index 인자 값을 보냄
            this.$emit('removeItem', inputItem, index);
        },
        //체크
        toggleComplete: function(inputItem, index){

            this.$emit('toggleItem', inputItem, index)
        }
    }

}
</script>

<style scoped>

ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted{
    color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color: #5f5f5f;
}
/* 리스트아이템 트랜지션 효과 */

.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>