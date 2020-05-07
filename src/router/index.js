import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/zhuce'
import zhuceyi from '@/views/zhuceyi'
import zhucexuqiufang from '@/views/zhucexuqiufang'
import zhucexuqiufanggeren from '@/views/zhucexuqiufanggeren'
import zhucexuqiufangqiye from '@/views/zhucexuqiufangqiye'





Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/zhuceyi',
      name: 'zhuceyi',
      component: zhuceyi
    },
    {
      path: '/zhucexuqiufang',
      name: 'zhucexuqiufang',
      component: zhucexuqiufang
    },
    {
      path: '/zhucexuqiufanggeren',
      name: 'zhucexuqiufanggeren',
      component: zhucexuqiufanggeren
    },
    {
      path: '/zhucexuqiufangqiye',
      name: 'zhucexuqiufangqiye',
      component: zhucexuqiufangqiye
    }
  ]
})
