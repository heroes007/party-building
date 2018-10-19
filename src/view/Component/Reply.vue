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
    padding-top: 40px;
  }

  .comment-box {
    margin: 10px;
    background-color: #fff;
    padding: 10px;

    .box-person {
      display: flex;
      flex-direction: row;

      .person-left{

        .left-img{
          height: 40px;
          border-radius: 50%;
        }
      }
      .person-right{
        text-align: left;
        margin-left: 10px;

        .right-title{
          font-size: 22px;
        }
        .right-time{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 6px;

          .time-img{
            height: 14px;
          }
          .time-content{
            font-size: 14px;
            margin-left: 4px;
          }
        }
      }
    }
  }
  .reply-box{
    width: 100%;
    margin: 4px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  .comment-content{
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .hint{
    margin-top: 20px;
    font-size: 16px;
    color: #666;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 40px;
    display: flex;
    align-items: center;

    .bottom-input{
      border: 1px solid #c50206;
      border-radius: 4px;
      height: 26px;
      width: 300px;
      margin: 0 14px;
      padding: 0 6px;
      box-sizing: border-box;
    }
    .bottom-btn{
      height: 26px;
      width: 34px;
      border: 0;
      background-color: #c50206;
      color: #eee;
      border-radius: 4px;
    }
  }
</style>
