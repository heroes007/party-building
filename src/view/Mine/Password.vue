<template>
    <div>
      <Header title="修改密码"></Header>
      <div class="content">
        <div class="content-password">
          <div class="content-title">旧密码:</div>
          <input class="content-input" type="password" v-model="oldpassword">
        </div>
        <div class="content-password">
          <div class="content-title">新密码:</div>
          <input class="content-input" type="password" v-model="newpassord">
        </div>
        <div class="content-password">
          <div class="content-title">新密码:</div>
          <input class="content-input" type="password" v-model="surepassword">
        </div>
        <button class="sure" @click="sure">确定</button>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/top/top'
  export default {
    name: "Password",
    data(){
      return{
        password:'',
        oldpassword:'',
        newpassord:'',
        surepassword:'',
        word:{
          newPwd:'',
          oldPwd:''
        }
      }
    },
    components:{
      Header
    },
    methods:{
      getData(){
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          console.log(res)
          this.password = res.data.password
        })
      },
      sure(){
        if(this.password == this.oldpassword){
          this.word.oldPwd = this.oldpassword
          if(this.newpassord == this.surepassword){
            this.word.newPwd = this.newpassord
            this.$axios.get(`/hhdj/user/updatePwd.do`,this.word).then(res => {
              console.log(res)
            })
          }
        }
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .content{
    margin-top: 100px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-password{
    height: 80px;
    width: 280px;

    .content-title{
      text-align: left;
      margin: 10px 0 10px 4px;
    }
    .content-input{
      width: 280px;
      height: 36px;
      border: 1px solid #999;
      border-radius: 6px;
    }
  }
  .sure{
    width: 280px;
    height: 46px;
    margin-top: 30px;
    border-radius: 6px;
    background-color: #ef473a;
    color: #fff;
    border: 0;
    font-size: 18px;
  }

</style>
