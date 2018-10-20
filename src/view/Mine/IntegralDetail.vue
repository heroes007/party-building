<template>
    <div>
      <Header title="积分明细"></Header>
      <div class="content">
        <div class="detail" v-for="item in data">
          <div class="detail-content">
            <div class="content-title">{{item.typeName}}</div>
            <div class="content-time">{{item.timeFormat}}</div>
          </div>
          <div class="detail-score">+{{item.singleDesc}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "IntegralDetail",
    data(){
      return{
        data:[]
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/integral/integralList.do?page=1&rows=10').then(res => {
          console.log(res)
          this.data = res.rows
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
  }
  .detail{
    height: 1.6rem;
    padding: 0.4rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid #eee;
    display: flex;
    align-items: center;
    font-size: 0.4rem;
    justify-content: space-between;

    .detail-content{
      text-align: left;

      .content-time{
        margin-top: 0.2rem;
        font-size: 0.32rem;
      }
    }
    .detail-score{
      color: red;
    }
  }
</style>
