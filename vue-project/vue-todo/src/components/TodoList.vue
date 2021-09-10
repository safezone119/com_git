<template>
<!-- input박스에서 저장한 값들을 뿌려줌 -->
  <div>
    <ul>
      <!-- 로컬스토리지에 저장된 개수만큼 반복해서 찍어냄 -->
      <!-- v-for="(할일 text, index 순서) in inputItems" for문 내장 인덱스를 넘김 -->
      <li v-for="(inputItem, index) in inputItems" v-bind:key="inputItem.item" class="shadow">
        
          <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: inputItem.completed }" 
                                           v-on:click="toggleComplete(inputItem, index)"></i>
        
          <span v-bind:class="{textCompleted: inputItem.completed }">{{ inputItem.item }}</span>

        <!-- li 인덱스를 removeTodo 메소드에 넘겨서 삭제할 li를 찾음 -->
          <span class="removeBtn" v-on:click="removeTodo(inputItem,index)">
            <i class="fas fa-trash-alt"></i>
          </span>

      </li>
    </ul>
  </div>
</template>

<script>
export default {

    data: function(){
      return {
        inputItems: [] //로컬스토리지 텍스트 담을 배열
      }
    },
    methods : { 
        removeTodo: function(inputItem,index){
            console.log(inputItem,index);

            //로컬 스토리지 영역 inputItem 삭제
            localStorage.removeItem(inputItem);

            //script영역 (view)영역 데이터 삭제
            //splice 자바스크립트 배열 api 특정 index에서 숫자를 통해 지울 수 있음 지우고 새로운 배열 반환 
            this.inputItems.splice(index, 1);

        },
        //체크
        toggleComplete: function(inputItem){
          //completed 설정
          inputItem.completed = !inputItem.completed;
          //로컬스토리지에 completed 된 데이터 삭제 후
          //다시 갱신해줌
          localStorage.removeItem(inputItem.item);
          localStorage.setItem(inputItem.item, JSON.stringify(inputItem));

        }
    },

    //인스턴스가 생성되자마자 호출되는 라이프 사이클 훅
    created: function(){

      //로컬스토리지에 저장된 input text 접근
      if(localStorage.length > 0 ){
        for(var i = 0; i < localStorage.length; i++){
          
          // console.log(localStorage.key(i));
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            //parse 메소드는 string 객체를 json 객체로 변환시킴.
            //parse 이전
            //{"completes":false,"item":"가"}
            //parse 이후
            // {completes: false, item: 'dsfsdfsdf'}
            //   completes: false
            //   item: "dsfsdfsdf"
            // 확인 -> console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));

            // localStorage.getItem(localStorage.key(i));
            this.inputItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //inputItems 배열에 push
            
          }    
        }
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
</style>