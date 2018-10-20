<template>
  <div>
    <div class="top">
      <img class="top-left" src="../../assets/左.png" @click="back" alt="">
      <div class="top-title">掌上组织生活</div>
    </div>
    <div class="mobile-img">
      <img src="../../assets/timg.jpg" alt="">
    </div>
    <div class="mobile-content">
      <router-link :to="{path:'/index/news', query:{type:'8', title:'政治学习'}}" class="content-essay link">
        <img class="essay-img" src="../../assets/icon1.png" alt="">
        <div class="essay-title">政治学习</div>
      </router-link>
      <router-link :to="{path:'/index/loading', query:{title:'思想汇报'}}" class="content-essay link">
        <img class="essay-img" src="../../assets/icon2.png" alt="">
        <div class="essay-title">思想汇报</div>
      </router-link>
      <router-link :to="{path:'/index/loading', query:{title:'心得总结'}}" class="content-essay link">
        <img class="essay-img" src="../../assets/icon3.png" alt="">
        <div class="essay-title">心得总结</div>
      </router-link>
      <router-link to="/index/sammary" class="content-essay link">
        <img class="essay-img" src="../../assets/icon4.png" alt="">
        <div class="essay-title">民主评议</div>
      </router-link>
      <router-link to="/index/map" class="content-essay link">
        <img class="essay-img" src="../../assets/icon5.png" alt="">
        <div class="essay-title">流动党员找组织</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mobile"
  }
</script>

<style scoped lang="scss">
  .mobile-img{
    width: 100%;

    img{
      width: 100%;
    }
  }
  .mobile-content{
    display: flex;
    flex-wrap: wrap;

    .content-essay{
      width: 1.6rem;
      margin: 0.4rem;

      .essay-img{
        width: 1.6rem;
      }
      .essay-title{
        font-size: 0.32rem;
      }
    }
  }
</style>
