<template>

  <div id="app">
      <router-view></router-view>
  </div>

</template>

<script>

    // 这就是首页
    // import Home from "@/components/home/home";

    export default {
        name: 'App',
        components: {

        }
    }
</script>

<style>
    body{
        margin: 0px;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        background-color: #F7F7F7;
        overflow-y: hidden;
    }
</style>
