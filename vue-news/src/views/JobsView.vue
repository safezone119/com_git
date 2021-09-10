<template>
  <div>
      <h1>JOB PAGE</h1>
      <div v-for="user in jobs" :key="user.id">
        {{ user.title }}
      </div>
  </div>
</template>

<script>
import { fetchJobList } from '../api/index.js'

export default {
 
 data(){
   return{
     jobs: []
   }
 },

 created() {

   var find = this;

   fetchJobList().then(function(result){
     find.jobs = result.data;
     console.log(result.data);
   })

   .catch(function(error){
     console.log(error);
   })
 }
}
</script>

<style>

</style>