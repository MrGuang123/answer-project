<template>
  <div class="answer-content">
    <div class="answer-box">
      <span class="typeCont">{{quesTypeText}}</span>
      <radioSelection v-if="quesType == 'single_choice'" :radioData="questionData" v-on:transferAnswerData="getAnswerData"></radioSelection>
      <MutliSelection v-if="quesType == 'multiple_choice'" :checkBoxData="questionData" v-on:transferAnswerData="getAnswerData"></MutliSelection>
      <div class="btn">
        <button @click="nextQuestion">下一题</button>
        <button @click="commitAnswer">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import radioSelection from '../../components/radioSelection.vue'
  import MutliSelection from '../../components/MutliSelection.vue'

  export default {
    mounted: function () {
      // this.questionData = {
      //   quesData: [{
      //     'id': 0,
      //     'option': '桉树',
      //   }, {
      //     'id': 1,
      //     'option': '啥的',
      //   }],
      //   quesTitle: '阿斯顿发送到发送到',
      // }
      this.questionData = {
        quesData: [{
          'id': 0,
          'option': '多选1'
        }, {
          'id': 1,
          'option': '多选2'
        }, {
          'id': 2,
          'option': '多选3'
        }, {
          'id': 3,
          'option': '多选4'
        }],
        quesTitle: '阿打算发送范围',
        checkList:[]
      }
      this.quesType = "multiple_choice";
      this.quesTypeText = '多选题';
    },
    data() {
      return {
        quesType: '',
        quesTypeText: '',
        questionData: '',
        answerData: ''
      }
    },
    methods: {
      getAnswerData(val) {
        this.answerData = val;
        console.log("**val**" + val);
      },
      commitAnswer: function () {
        console.log("***commitAnswer***" + this.answerData);
      },
      nextQuestion: function () {
        this.questionData = {
          quesData: [{
            'id': 0,
            'option': '发送',
          }, {
            'id': 1,
            'option': '过任务',
          }, {
            'id': 2,
            'option': '撒地方',
          }],
          quesTitle: '可是地方告诉你',
          radio:''
        }
        // this.questionData = {
        //   quesData: [{
        //     'id': 0,
        //     'option': '阿萨德'
        //   }, {
        //     'id': 1,
        //     'option': 'asdfa'
        //   }, {
        //     'id': 2,
        //     'option': '桉树'
        //   }, {
        //     'id': 3,
        //     'option': '电费'
        //   }],
        //   quesTitle: '发生的发生',
        //   checkList:[]
        // }
        this.quesType = "single_choice";
      this.quesTypeText = '单选题';
      }
    },
    components: {
      radioSelection,
      MutliSelection
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