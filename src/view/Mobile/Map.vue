<template>
  <div class="map">
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="this.back" alt="">
      <div class="top-title">流动党员找组织</div>
    </div>
    <div class="map-content">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Map",
    methods:{
      setMap(){
        var BMap = window.BMap
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        var opts = {offset: BMAP_ANCHOR_TOP_RIGHT}
        map.addControl(new BMap.NavigationControl(opts));
      }
    },
    mounted(){
      this.setMap()
    }
  }
</script>

<style scoped lang="scss">
  #container{
    margin-top: 42px;
    height: 93vh;
    width: 7.5rem;
  }
</style>
