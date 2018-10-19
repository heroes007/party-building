<template>
  <div>
    <Header title="掌上组织生活"></Header>
    <div class="content">
      <router-link to="/index/sammary/person" class="btn link">个人总结</router-link>
      <router-link to="/index/sammary/public" class="btn link">民主评议</router-link>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "Sammary",
    components:{
      Header
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn{
    height: 48px;
    width: 180px;
    background-color: #ef473a;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
