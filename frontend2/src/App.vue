<template>
  <div id="app">
    <img src="./assets/logo.png"  width="50" height="50">
    <router-link to="/"> Home </router-link> | 
    <router-link to="/about"> about </router-link> | 
    <router-link to="/WriteForm" > write </router-link> | 
    <router-link to="/test" > testRoom </router-link> | 
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App' ,
  data(){
    return{
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
