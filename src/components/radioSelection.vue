<template>
  <div class="radio-box">
    <p class="questText">{{radioTitle}}</p>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        radio: '',
        radioTitle: "下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度"
      };
    }
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