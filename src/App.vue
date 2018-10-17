<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .fll{
    float: left;
  }
  .clear:after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }
  .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #c50206;
    padding: 10px;

    .top-left {
      float: left;
      height: 20px;
      width: 20px;
      margin-right: -20px;
    }

    .top-title {
      color: #fff;
      font-size: 18px;
    }

    .top-change{
      color: #fff;
      font-size: 18px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .link{
    text-decoration: none;
    color: #000;
  }
</style>
