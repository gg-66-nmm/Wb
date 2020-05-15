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
import gerenxinxi from '@/views/gerenxinxi'
import shimingrenzheng from '@/views/shimingrenzheng'
import wodexiangmu from '@/views/wodexiangmu'
import fabuxuqiu from '@/views/fabuxuqiu'
import cuyxinxi from '@/views/cuyxinxi'
import xiangmuxuqiu from '@/views/xiangmuxuqiu'
// import head from '@/components/head'
import weiba from '@/components/weiba'
import xuqiuxiangqing from '@/views/xuqiuxiangqing'
// import heda from '@/components/head'










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
            path: '/cuyxinxi',
            name: 'cuyxinxi',
            component: cuyxinxi
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
        },
        // {
        //     path: '/head',
        //     name: 'head',
        //     component: head
        // },
        {
            path: '/xiangmuxuqiu',
            name: 'xiangmuxuqiu',
            component: xiangmuxuqiu
        },
        {
            path: '/weiba',
            name: 'weiba',
            component: weiba
        },
        {
            path: '/xuqiuxiangqing',
            name: 'xuqiuxiangqing',
            component: xuqiuxiangqing
        }
    ]
})