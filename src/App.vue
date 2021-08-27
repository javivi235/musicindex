<template>
  <div id="app">
    <Header title="True Music Index"></Header>
    <router-view style="min-height: 100vh;"/>
    <Footer/>
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
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
    height: 100vh + 200px;
    width: 100vw;
  }
</style>
