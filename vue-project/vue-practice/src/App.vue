<template>
  <h1>hello{{  animal }}</h1>
  <h2></h2>

</template>

<script>

export default {
  name: 'App',
  components: {
    data(){
      return{
        animal: "aaaa"
      };
    }
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
