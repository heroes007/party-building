<template>
  <div>
    <Header title="党史上的今天"></Header>
    <div class="history" v-html="data"></div>
  </div>
</template>

<script>
  import Header from '../../components/top/top'
  import {getUrl} from '../../components/getUrl/getUrl'
  import cheerio from 'cheerio'

  export default {
    name: "History",
    data() {
      return {
        data: '',
        url: ''
      }
    },
    components: {
      Header
    },
    methods:{
      getData(){
        var url = getUrl()
        this.$axios.get(`/hhdj/proxy/proxy.do?url=${url}`).then(res => {
          const $ = cheerio.load(res)
          $("h1").remove();
          var content = $(".p1_02").html();
          this.data = content
        })
      },
    },
    created(){
      this.getData()
    }
  }
</script>

<style lang="scss">
  .history{
    margin-top: 0.8rem;
    padding: 0.2rem;
    font-size: 0.3rem;
    text-align: left;

    p{
      margin:0.2rem 0 0.4rem 0;
    }
  }
</style>
