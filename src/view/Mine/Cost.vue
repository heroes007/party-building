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
    margin-top: 40px;

    .content-title{
      padding: 6px;
      font-size: 20px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }
  }
  .pay{
    padding: 14px;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .pay-left{
      display: flex;

      .left-img{
        height: 36px;
        margin-right: 10px;
      }
    }
    .pay-right{
      height: 20px;
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
      height: 300px;
      margin-top: 200px;
    }
  }
</style>
