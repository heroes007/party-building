<template>
  <div>
    <Header title="个人量化积分"></Header>
    <div class="scores">100</div>
    <div class="content">
      <router-link to="">
        <img src="" alt="">
        <div>积分明细</div>
        <img src="" alt="">
      </router-link>
      <div class="rule-title">
        <div>积分规则</div>
        <img src="" alt="">
      </div>
      <div class="rule-content">
        <div class="content-title">登录app</div>
        <div class="content-num">5</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "integray",
    components:{
      Header
    }
  }
</script>

<style scoped>

</style>
