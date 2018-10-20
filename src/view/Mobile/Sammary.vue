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
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn{
    height: 0.96rem;
    width: 3.6rem;
    background-color: #ef473a;
    color: #fff;
    border: 0;
    border-radius: 0.08rem;
    font-size: 0.32rem;
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
