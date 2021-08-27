<template>
  <div id="app">
    <Header title="True Music Index"></Header>
    <router-view/>
  </div>
</template>

<script>

  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: lightgreen;
    height: 100vh;
  }
</style>
