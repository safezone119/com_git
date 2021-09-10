<template>
  <div class="container">
    <h2 class="text-center mt-5">My Vue TodoApp</h2>

    <!-- input -->
    <div class="d-flex">
      <input v-model="task" type="text" class="form-control" placeholder="EnterText">
    
      <button @click="submitTask" class="btn button-warnig rounded-0">SUBMIT</button>
    </div>

    <!-- Task Table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <!-- -->
        <!-- v-for="(데이터, 별칭) in tasks 배열 요소의 별칭 또한
              반복되는 항목의 인덱스가 필요하므로 for 루프에 인덱스를 추가하여
              반복에 대한 고유 값을 key에 대입함 -->
        <tr v-for="(task, index) in tasks" :key="index">
          <td scope="row"> 
              <span :class="{'finished': task.status === 'finished'}">
                 {{ task.name }} 
              </span>
          </td>
          <td scope="row" style="width: 120px">
              <span @click="changeStatus(index)" class="pointer"
                    :class="{'text-danger': task.status === 'to-do',
                             'text-warning': task.status === 'in-progress',
                             'text-success': task.status === 'finished',
                    }"
              >
                {{ firstCharUpper(task.status) }}  
               </span>
             </td>
          <td scope="row">
            <div class="text-center" @click="editTask(index)">
              <span>수정</span>
            </div>
          </td>
          <td scope="row">
            <div class="text-center" @click="deleteTask(index)">
              <span>삭제</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data(){
  
    return {
      task: '',
      editedTask: null,
      availableSt: ['to-do', 'in-progress', 'finished'],

      tasks: [
        {
          name: 'aaaaaaaa',
          status: 'To-do'
        },
                {
          name: 'bbbbbbbbb',
          status: 'in-progress'
        }
      ]
    }
  },

  methods: {

    //데이터 push
    submitTask(){
      if(this.task.length === 0 ) return;

      if(this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: 'to-do'
        });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.tasks = ''; //초기화
    },

    //delete
    //splice(): 배열의 특정 인덱스에 있는 값을 변경 또는 삭제 (배열의 내용이 변경됨)
    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    //update
    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    changeStatus(index){

      let newIndex = this.availableSt.indexOf(this.tasks[index].status);
    
      if(++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableSt[newIndex];
    },
    //status 첫번째 글자 대문자 변환
    firstCharUpper(str){
      console.log(str.charAt(0));
      return str.charAt(0).toUpperCase()+str.slice(1);
      // return str.charAt(0).toUpperCase() + str.splice(1);
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .pointer{
    cursor: pointer;
  }
  .finished{
    text-decoration-line: line-through;
  }
</style>
