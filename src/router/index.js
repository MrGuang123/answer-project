import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/index'
const Answer = r =>
  require.ensure([], () => r(require('@/views/answer/answer')), 'answer')
const Manage = r =>
  require.ensure([], () => r(require('@/views/manage/manage')), 'manage')
const Result = r =>
  require.ensure([], () => r(require('@/views/result/result')), 'result')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Index,
      children: []
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
