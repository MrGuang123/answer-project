<template>
  <div class="radio-box">
    <p class="questText">{{radioData.quesTitle}}</p>
    <el-radio-group v-model="radio">
      <el-radio v-for="item in radioData.quesData" :label="item.id" @change="radioChange">{{item.option}}</el-radio>
    </el-radio-group>
  </div>

</template>
<script>
  import demo from '../assets/js/demo.js'
  export default {
    data() {
      return {
        radio: '',
      };
    },
    props: ['radioData'],
    methods: {
      radioChange: function () {
        console.log(this.radio);
        this.$emit('transferAnswerData', this.radio);
      }
    },
    mounted() {}
  }
</script>
<style>
  .radio-box .el-radio__input.is-checked .el-radio__inner {
    border-color: green;
    background: green;
  }

  .el-radio__input.is-checked+.el-radio__label {
    color: green;
  }
</style>

<style scoped>
  .questText {
    margin: 46px 20px 12px 20px;
  }

  .el-radio-group {
    display: flex;
    flex-direction: column;
  }

  .el-radio {
    margin: 14px;
    border: 1px solid #D3D3D3;
    padding: 20px;
  }
</style>