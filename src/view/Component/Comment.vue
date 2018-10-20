<template>
  <div>
    <Header title="党员云互动"></Header>
    <div class="content">
      <div class="content-box clear" v-for="item in data">
        <div class="box-person">
          <div class="person-left">
            <div class="person-img">
              <img class="person-image" :src="item.header" alt="">
            </div>
            <div class="person-essay">
              <div class="essay-name">{{item.username}}</div>
              <div class="essay-state">
                <img class="time-img" src="../../assets/时间.png" alt="">
                <div class="state-time">{{item.currentTime}}</div>
                <img class="whether-img" src="../../assets/声音.png" alt="">
                <div class="state-whether">公开</div>
              </div>
            </div>
          </div>
          <div class="person-right">
            <img class="right-img" src="../../assets/党员互动icon.png" alt="">
          </div>
        </div>
        <div class="box-review">{{item.content}}</div>
        <div class="box-btn" @click="reply(item)">
          <img class="btn-img" src="../../assets/回复.png" alt="">
          <div class="btn-title">回复</div>
        </div>
      </div>
    </div>
    <div class="publish">
      <img class="publish-img" src="../../assets/发布btn.png" alt="" @click="change">
    </div>
    <div class="write1" v-if="isShow" @click="change"></div>
    <div class="write" v-if="isShow">
      <div class="write-box">
        <textarea class="box-input" cols="20" v-model="formData.content"></textarea>
        <div class="write-box-btn">
          <button class="box-sure" @click="publish">发布</button>
          <button class="box-false" @click="change">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "Comment",
    data(){
      return{
        data:"",
        isShow:false,
        formData:{
          content:'',
          type:1
        }
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res => {
          this.data = res.rows
          console.log(res)
        })
      },
      change(){
        this.isShow = !this.isShow
      },
      publish(){
        if(this.formData.content){
          this.$axios.post('http://211.67.177.56:8080/hhdj/forum/saveForum.do',this.formData).then(res => {
            console.log(res)
          })
          this.formData.content = ''
          this.change()
        }else{
          console.log('不能为空')
        }
      },
      reply(item){
        this.$store.commit('addReply',item)
        this.$router.push({name:'reply'})
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
    font-size: 0.4rem;
  }
  .content-box{
    padding: 0.2rem;
    border-bottom: 0.2rem solid #eee;
  }
  .box-person{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .person-left{
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .person-img{

      .person-image{
        height: 0.64rem;
        width: 0.64rem;
        border-radius: 50%;
      }
    }

    .person-essay{
      text-align: left;
      margin-left: 0.4rem;

      .essay-state{
        display: flex;
        flex-direction: row;
        font-size: 0.28rem;
        align-items: center;
        margin-top: 0.08rem;

        .time-img{
          height: 0.28rem;
        }
        .state-time{
          margin: 0 0.08rem;
        }
        .whether-img{
          height: 0.28rem;
        }
        .state-whether{
          margin: 0 0.08rem;
        }
      }
    }
    .right-img{
      height: 0.52rem;
    }
  }
  .box-review{
    text-align: left;
    margin-top: 0.32rem;
    font-size: 0.34rem;
  }
  .box-btn{
    float: right;
    display: flex;
    align-items: center;
    margin-top: 0.2rem;

    .btn-img{
      height: 0.28rem;
    }
    .btn-title{
      margin-left: 0.16rem;
      font-size: 0.32rem;
    }
  }
  .publish{
    position: fixed;
    right: 0.4rem;
    bottom: 1.2rem;

    .publish-img{
      height: 1.36rem;
    }
  }
  .write1{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, .5);
  }
  .write{

    .write-box{
      position: fixed;
      bottom: 0;
      height: 3.6rem;
      width: 100%;
      background-color: #eee;
      z-index:999;


      .box-input{
        width: 6.8rem;
        height: 2.2rem;
        margin-top: 0.2rem;
        border: 0;
        resize: none;
        outline: none;
        font-size: 0.32rem;
        box-sizing: border-box;
        padding: 0 0.16rem;
      }
      .write-box-btn{
        box-sizing: border-box;
      }
      .box-sure{
        float: left;
        margin: 0.02rem 0.4rem;
        height: 0.52rem;
        width: 0.72rem;
        background-color: #ef473a;
        border: 0;
        color: #fff;
        border-radius: 0.08rem;
      }
      .box-false{
        float: right;
        margin: 0.2rem 0.4rem;
        height: 0.52rem;
        width: 0.72rem;
        border: 0;
        border-radius: 0.08rem;
        background-color: #eee;
      }
    }
  }
</style>
