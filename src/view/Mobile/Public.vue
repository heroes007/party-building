<template>
  <div>
    <Header title="民主评议"></Header>
    <div class="content">
      <div class="rule">
        <p class="title">评论须知</p>
        <p class="common">在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
        <p class="common ">1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
        <p class="common">2、参加“两学一做”学习教育情况；</p>
        <p class="common">3、参加党的组织生活、按要求交纳党费；</p>
        <p class="common">4、学习情况、业务能力提高情况；</p>
        <p class="common">5、关心集体、团结同志，发挥先锋模范作用情况；</p>
        <p class="common">6、联系群众、关心群众、服务群众情况；</p>
        <p class="common">7、遵守党章党规、法律法规和学校规章制度情况。</p>
      </div>
      <div class="choose">
        <select class="choose-select" v-model="id">
          <option value="">请选择</option>
          <option v-for="item in rows" :value="item.id">{{item.branch}}</option>
        </select>
        <router-link class="choose-link link" :to="{path:'/index/sammary/people', query:{select_branch:id,user_id:token,page:1,rows:20}}">下一步</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "public",
    data(){
      return{
        data:'',
        rows:'',
        id:'',
        token:''
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.token = this.$store.state.token
        this.$axios.get('/hhdj/branch/findAll.do').then(res => {
          this.rows = res.rows
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
    font-size: 0.36rem;
  }
  .rule{
    padding: 0.2rem;
    color: #666;

    .title{
      font-size: 0.32rem;
      font-weight: bold;
      margin: 0.2rem 0;
    }
    .common{
      margin: 0.2rem 0;
      text-align: left;
      font-size: 0.28rem;
      line-height: 0.44rem;
      }
  }
  .choose{
    margin-top: 0.72rem;
    display: flex;

    .choose-select{
      margin: 0 0.4rem;
      height: 0.8rem;
      width: 4rem;
      background-color: #c50206;
      color: #fff;
      border: 0;
      border-radius: 0.12rem;
      padding-left: 0.2rem;
    }
    .choose-link{
      height: 0.8rem;
      width: 2rem;
      background-color: #c50206;
      color: #fff;
      border: 0;
      border-radius: 0.12rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.28rem;
    }
  }
</style>
