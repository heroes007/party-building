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
    margin-top: 40px;
    font-size: 20px;
  }
  .content-box{
    padding: 10px;
    border-bottom: 10px solid #eee;
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
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
    }

    .person-essay{
      text-align: left;
      margin-left: 20px;

      .essay-state{
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        margin-top: 4px;

        .time-img{
          height: 14px;
        }
        .state-time{
          margin: 0 4px;
        }
        .whether-img{
          height: 14px;
        }
        .state-whether{
          margin: 0 4px;
        }
      }
    }
    .right-img{
      height: 26px;
    }
  }
  .box-review{
    text-align: left;
    margin-top: 16px;
    font-size: 17px;
  }
  .box-btn{
    float: right;
    display: flex;
    align-items: center;
    margin-top: 10px;

    .btn-img{
      height: 14px;
    }
    .btn-title{
      margin-left: 8px;
      font-size: 16px;
    }
  }
  .publish{
    position: fixed;
    right: 20px;
    bottom: 60px;

    .publish-img{
      height: 68px;
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
      height: 180px;
      width: 100%;
      background-color: #eee;
      z-index:999;


      .box-input{
        width: 340px;
        height: 110px;
        margin-top: 10px;
        border: 0;
        resize: none;
        outline: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 8px;
      }
      .write-box-btn{
        box-sizing: border-box;
      }
      .box-sure{
        float: left;
        margin: 10px 20px;
        height: 26px;
        width: 36px;
        background-color: #ef473a;
        border: 0;
        color: #fff;
        border-radius: 4px;
      }
      .box-false{
        float: right;
        margin: 10px 20px;
        height: 26px;
        width: 36px;
        border: 0;
        border-radius: 4px;
        background-color: #eee;
      }
    }
  }
</style>
