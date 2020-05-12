import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import zhuce from '@/views/zhuce'
import zhuceyi from '@/views/zhuceyi'
import zhucexuqiufang from '@/views/zhucexuqiufang'
import zhucexuqiufanggeren from '@/views/zhucexuqiufanggeren'
import zhucexuqiufangqiye from '@/views/zhucexuqiufangqiye'
import ChangePsw from '@/views/ChangePsw'
import Cxy from '@/views/Cxy'





Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/changepsw',
            name: 'ChangePsw',
            component: ChangePsw
        },
        {
            path: '/cxy',
            name: 'Cxy',
            component: Cxy
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