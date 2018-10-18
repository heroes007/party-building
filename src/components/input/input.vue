<template>
  <div>
    <input class="inputFile" type="file" @change="getimg" @click="handleAvatar">
    <img :src="imageUrl ? imageUrl : inputImg" class="avatar">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imageUrl: '',
        baseUrl: ''
      };
    },
    props: {
      inputImg: ''
    },
    methods: {
      handleAvatar() {
        this.$emit('childrenUrl', this.baseUrl)
      },
      getimg(event) {
        this.imageUrl = event.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(this.imageUrl);
        reader.onload = function (e) {
          var imgcode = e.target.result;
          // console.log(imgcode);
          let File = imgcode.split(',')
          let formData = new FormData()
          // console.log(File[1])
          formData.append('myFile',File[1])
          // console.log(formData)
          axios.post('http://211.67.177.56:8080/hhdj/image/uploadBase64.do', formData ).then(res => {
            console.log(res)
          })

        }
      },
    }
  }
</script>

<style scoped>
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
