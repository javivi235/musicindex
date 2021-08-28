<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <Header title="True Music Index"></Header>
    <router-view style="min-height: 90vh;"/>
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
    text-align: center;
    background-color: #013220;
    height: 100vh + 100px;
    width: 100vw;
  }
</style>
