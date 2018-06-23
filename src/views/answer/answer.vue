<template>
  <div class="answer-content">
    <div class="answer-box">
      <span class="typeCont">{{questype}}</span>
      <radioSelection></radioSelection>
      <div class="btn">
        <button>下一题</button>
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import radioSelection from '../../components/radioSelection.vue'
  export default {
    data() {
      return {
        questype: '单选题'
      }
    },
    components: {
      radioSelection
    }
  }
</script>
<style>
</style>

<style scoped>
  .answer-box {
    width: 90%;
    height: 500px;
    /* box-shadow: 0px 0px 1px 1px #EEEEEE; */
    margin: 30px auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .typeCont {
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #EEEEEE;
    padding: 20px 0;
  }

  .btn {
    display: flex;
    flex-direction: row-reverse;
    margin: 20px;

  }

  .btn button {
    background-color: #FC6500;
    margin-left: 6px;
    padding: 10px 20px;
    color: white;
    border-radius: 6px;
  }
</style>