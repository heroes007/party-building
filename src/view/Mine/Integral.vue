<template>
  <div>
    <Header title="个人量化积分"></Header>
    <div class="content">
      <div class="content-scores">
        <div class="scores">{{totalScore}}</div>
      </div>
      <router-link to="/mine/integral/detail" class="content-link link">
        <div class="link-left">
          <img class="left-img" src="../../assets/lxjf.png" alt="">
          <div class="left-title">积分明细</div>
        </div>
        <img class="link-right" src="../../assets/right.png" alt="">
      </router-link>
      <div class="rule-title">
        <div class="rule-title-name">积分规则</div>
        <img class="rule-title-img" src="../../assets/wenhao.png" alt="">
      </div>
      <div class="rule-content" v-for="(item, index) in rules">
        <div class="content-title">{{item.rule}}</div>
        <div class="content-num">{{item.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "integray",
    data(){
      return{
        totalScore:'',
        rules:[
          {rule:'登陆APP', score:5},
          {rule:'完善个人信息', score:2},
          {rule:'查看积分', score:1},
          {rule:'按时交纳党费', score:10},
          {rule:'查看通知', score:2},
          {rule:'了解学院工作动态', score:5},
          {rule:'上交思想汇报经审核通过', score:5},
          {rule:'主动学习相关文件', score:10},
          {rule:'认真撰写心得总结并上交，经审核通过', score:5},
          {rule:'提交个人总结，并参与评议', score:2},
          {rule:'积极参与互动', score:5},
          {rule:'学习党建知识', score:5},
          {rule:'学习党史', score:10},
          {rule:'创先争优事迹', score:10},
          {rule:'学党章，学习近平总书记系列讲话', score:10},
          {rule:'用镜头记录两学一做过程中令人感动的人和事', score:3},
          {rule:'关注并积极参与特色活动', score:5},
          {rule:'制度化、常态化建设', score:5},
        ]
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          this.totalScore = res.data.totalScore
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .content{
    margin-top: 0.8rem;

    .content-scores{
      height: 2.88rem;
      background-image: url('../../assets/jifen.png');
      background-size: 100% 100%;

      .scores{
        font-size: 0.48rem;
        color: #fff;
        display: inline-block;
        margin-top: 1.2rem;
      }
    }

    .content-link{
      height: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.36rem;
      padding: 0.2rem;
      margin-top: 0.08rem;
      box-sizing: border-box;
      border-top: 0.02rem solid #eee;

      .link-left{
        display: flex;
        align-items: center;
      }
      .left-img{
        height: 0.56rem;
      }
      .left-title{
        margin-left: 0.02rem;
      }
      .link-right{
        height: 0.04rem;
      }
    }
  }
  .rule-title{
    background-color: #eee;
    font-size: 0.36rem;
    height: 0.48rem;
    padding: 0.2rem;

    .rule-title-name{
      float: left;
    }

    .rule-title-img{
      float: right;
      height: 0.44rem;
    }
  }
  .rule-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 0.6rem;
    padding: 0.2rem;
    border-bottom: 0.02rem solid #eee;
    font-size: 0.32rem;
    color: #999;
  }
</style>
