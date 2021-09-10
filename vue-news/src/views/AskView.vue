<template>
  <div>
      <h1>ASK PAGE</h1>
                          <!-- v-vind 약어 : -->
      <div v-for="user in asks" :key="user.id">
        {{ user.time_ago}}
      </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {

  data(){
    return {
      asks: []
    }
  },

  created() {
    var view = this;

    fetchAskList()
    .then(function(res) {
      // console.log(res);
      view.asks = res.data;
    })

    .catch(function(error){
      console.log(error);
    })
  }
}
</script>

<style>

</style>