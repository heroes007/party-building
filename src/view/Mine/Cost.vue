<template>
    <div>
      <Header title="党费缴纳"></Header>
      <div class="content">
        <div class="content-title">请选择支付方式</div>
        <div class="pay" @click="wx">
          <div class="pay-left">
            <img class="left-img" src="../../assets/wx.png" alt="">
            <div class="left-title">微信</div>
          </div>
          <img class="pay-right" src="../../assets/right.png" alt="">
        </div>
        <div class="pay" @click="ali">
          <div class="pay-left">
            <img class="left-img" src="../../assets/ali.png" alt="">
            <div class="left-title">支付宝</div>
          </div>
          <img class="pay-right" src="../../assets/right.png" alt="">
        </div>
      </div>
      <div class="pay-content" v-if="wxPay" @click="wx">
        <img class="pay-img" src="../../assets/pay-wx.png" alt="">
      </div>
      <div class="pay-content" v-if="aliPay" @click="ali">
        <img class="pay-img" src="../../assets/pay-ali.png" alt="">
      </div>
    </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "cost",
    data(){
      return{
        wxPay: false,
        aliPay: false
      }
    },
    methods:{
      wx(){
        this.wxPay = !this.wxPay
      },
      ali(){
        this.aliPay = !this.aliPay
      }
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="scss">
  .content{
    margin-top: 0.8rem;

    .content-title{
      padding: 0.12rem;
      font-size: 0.4rem;
      text-align: left;
      border-bottom: 0.02rem solid #ccc;
    }
  }
  .pay{
    padding: 0.28rem;
    display: flex;
    font-size: 0.4rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.02rem solid #ccc;

    .pay-left{
      display: flex;

      .left-img{
        height: 0.72rem;
        margin-right: 0.2rem;
      }
    }
    .pay-right{
      height: 0.4rem;
    }
  }
  .pay-content{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 998;

    .pay-img{
      height: 6rem;
      margin-top: 4rem;
    }
  }
</style>
