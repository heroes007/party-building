<template>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="this.back" alt="">
      <div class="top-title">{{title}}</div>
    </div>
</template>

<script>
  export default {
    name: "top",
    props:{
      title:''
    }
  }
</script>

<style scoped>
</style>
