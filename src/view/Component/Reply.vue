<template>
  <div class="reply">
    <Header title="党员云互动"></Header>
    <div class="content">
      <div class="comment-box">
        <div class="box-person">
          <div class="person-left">
            <img class="left-img" :src="data.header" alt="">
          </div>
          <div class="person-right">
            <div class="right-title">{{data.username}}</div>
            <div class="right-time">
              <img class="time-img" src="../../assets/时间.png" alt="">
              <div class="time-content">{{data.currentTime}}</div>
            </div>
          </div>
        </div>
        <div class="comment-content">{{data.content}}</div>
      </div>
    </div>
    <div class="reply-content">
      <div class="comment-box reply-box" v-for="item in reply">
        <div class="box-person">
          <div class="person-left">
            <img class="left-img" :src="item.header" alt="">
          </div>
          <div class="person-right">
            <div class="right-title">{{item.username}}</div>
            <div class="right-time">
              <img class="time-img" src="../../assets/时间.png" alt="">
              <div class="time-content">{{item.timeFormat}}</div>
            </div>
          </div>
        </div>
        <div class="comment-content">{{item.comment}}</div>
      </div>
    </div>
    <div class="hint">还没有数据</div>
    <div class="bottom">
      <input class="bottom-input" type="text" placeholder="评论内容" v-model="formData.comment">
      <button class="bottom-btn" @click="comment">评论</button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'

  export default {
    name: "Reply",
    data() {
      return {
        data: '',
        reply:'',
        paramsId: {
          page: 1,
          rows: 10,
          forum_id: ''
        },
        formData:{
          forum_id:'',
          comment:''
        }
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.data = this.$store.state.reply
        this.paramsId.forum_id = this.data.forumId
        this.$axios.get('/hhdj/forum/forumCommentList.do', this.paramsId).then(res => {
          this.reply =  res.rows
        })
      },
      comment(){
        this.formData.forum_id = this.data.forumId
        this.$axios.post('/hhdj/forum/addComment.do',this.formData).then(res =>{
          this.formData.comment = ''
          this.getData()
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .reply{
    background-color: #eee;
    height: 100vh;
  }
  .content {
    padding-top: 0.8rem;
  }

  .comment-box {
    margin: 0.2rem;
    background-color: #fff;
    padding: 0.2rem;

    .box-person {
      display: flex;
      flex-direction: row;

      .person-left{

        .left-img{
          height: 0.8rem;
          border-radius: 50%;
        }
      }
      .person-right{
        text-align: left;
        margin-left: 0.2rem;

        .right-title{
          font-size: 0.44rem;
        }
        .right-time{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 0.12rem;

          .time-img{
            height: 0.28rem;
          }
          .time-content{
            font-size: 0.28rem;
            margin-left: 0.08rem;
          }
        }
      }
    }
  }
  .reply-box{
    width: 100%;
    margin: 0.08rem 0;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .comment-content{
    font-size: 0.32rem;
    text-align: left;
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .hint{
    margin-top: 0.4rem;
    font-size: 0.32rem;
    color: #666;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 0.8rem;
    display: flex;
    align-items: center;

    .bottom-input{
      border: 0.02rem solid #c50206;
      border-radius: 0.08rem;
      height: 0.32rem;
      width: 6rem;
      margin: 0 0.28rem;
      padding: 0 0.12rem;
      box-sizing: border-box;
    }
    .bottom-btn{
      height: 0.52rem;
      width: 0.68rem;
      border: 0;
      background-color: #c50206;
      color: #eee;
      border-radius: 0.08rem;
    }
  }
</style>
