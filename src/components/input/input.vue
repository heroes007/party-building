<template>
  <el-upload
    class="avatar-uploader"
    action="http://upload-z1.qiniup.com"
    :data = 'upload'
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img :src="imageUrl ? imageUrl : inputImg" class="avatar">
  </el-upload>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imageUrl: '',
        upload:{token:""}
      };
    },
    props:{
      inputImg:''
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = res.url;
        this.$emit('childrenUrl',this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      getupload(){
        axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
          this.upload.token = res.data.data
        })
      }
    },
    created(){
      this.getupload()
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;

  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
