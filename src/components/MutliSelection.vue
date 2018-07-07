<template>
  <div class="checkbox-box">
    <p class="questText">{{checkBoxData.quesTitle}}</p>
    <el-checkbox-group v-model="checkBoxData.checkList" @change="radioChange">
      <el-checkbox v-for="item in checkBoxData.quesData" :key="item.id" :label="item.id">{{item.option}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // checkList: []
      };
    },
    props: ['checkBoxData'],
    mounted: function () {
      console.log(this.checkBoxData);
    },
    methods: {
      radioChange: function () {
        console.log(1111);
        this.$emit('transferAnswerData', this.checkBoxData.checkList);
      }
    }
  }
</script>
<style lang="scss">
  .checkbox-box {
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: green;
      border-color: green;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: green;
    }
    .el-checkbox__inner:hover {
      border-color: green;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: #dcdfe6;
    }
  }
</style>

<style lang="scss" scoped>
  .checkbox-box {
    .questText {
      margin: 46px 20px 12px 20px;
    }
    .el-checkbox {
      margin: 14px;
      border: 1px solid #D3D3D3;
      padding: 20px;
    }
  }
</style>