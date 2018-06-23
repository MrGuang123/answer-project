<template>
  <div class="index-control">
    <div class="inner">
      <h3>前端工程师能力评估</h3>
      <ul class="introduce">
        <li>客观题：20道</li>
        <li>完成时间：120分钟</li>
        <li>难度系数：✨✨✨</li>
        <li>总分：100分</li>
      </ul>
      <el-row class="btn-group">
        <el-button type="primary" @click="begin">开始答题</el-button>
        <el-button type="success">管理题目</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    begin() {
      this.$route.push({
        name: 'answer'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-control {
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  .inner {
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    h3 {
      font-size: 26px;
      padding-left: 20px;
      margin-bottom: 40px;
      line-height: 46px;
      background: linear-gradient(0deg, #e92322, #e92322);
      background-size: 10px 10px;
      background-repeat: no-repeat;
      background-position: 5px 18px;
    }
    .introduce {
      margin-bottom: 40px;
      li {
        line-height: 24px;
        padding-left: 10px;
      }
    }
    .btn-group {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
