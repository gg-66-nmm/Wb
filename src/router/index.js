import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Findpsw from '@/views/Findpsw'
import zhuce from '@/views/zhuce'
import zhuceyi from '@/views/zhuceyi'
import zhucexuqiufang from '@/views/zhucexuqiufang'
import zhucexuqiufanggeren from '@/views/zhucexuqiufanggeren'
import zhucexuqiufangqiye from '@/views/zhucexuqiufangqiye'
import gerenxinxi from '@/views/gerenxinxi'
import shimingrenzheng from '@/views/shimingrenzheng'
import wodexiangmu from '@/views/wodexiangmu'
import fabuxuqiu from '@/views/fabuxuqiu'
import cuyxinxi from '@/views/cuyxinxi'








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
            path: '/cuyxinxi',
            name: 'cuyxinxi',
            component: cuyxinxi
        },
        {
            path: '/findpsw',
            name: 'Findpsw',
            component: Findpsw
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
        },
        {
            path: '/gerenxinxi',
            name: 'gerenxinxi',
            component: gerenxinxi
        },
        {
            path: '/shimingrenzheng',
            name: 'shimingrenzheng',
            component: shimingrenzheng
        },
        {
            path: '/wodexiangmu',
            name: 'wodexiang',
            component: wodexiangmu
        },
        {
            path: '/fabuxuqiu',
            name: 'fabuxuqiu',
            component: fabuxuqiu
        }
    ]
})