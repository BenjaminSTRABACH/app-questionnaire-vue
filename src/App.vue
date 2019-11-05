<template>
  <div id="app">
    <router-link to="/home"> Home </router-link>
    <router-link to="/question"> Question </router-link>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
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
