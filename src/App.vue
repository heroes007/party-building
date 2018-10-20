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
    padding: 0.2rem;

    .top-left {
      float: left;
      height: 0.4rem;
      width: 0.4rem;
      margin-right: -0.4rem;
    }

    .top-title {
      color: #fff;
      font-size: 0.36rem;
    }

    .top-change{
      color: #fff;
      font-size: 0.36rem;
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
    }
  }
  .link{
    text-decoration: none;
    color: #000;
  }
</style>
