<template>
  <div id="app">
    <nav>
      <h1>WT Chat</h1>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  nav{
    width: 100%;
    background: #333333;
    text-align: left;
  }
  nav h1{
    margin: 0;
    color: #ffffff;
    padding: 10px;
  }
  body{
    margin: 0;
    background: #f2f2f2;
  }
</style>
