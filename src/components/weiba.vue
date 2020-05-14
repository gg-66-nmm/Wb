<template>
<div>
    <div style="width:100%;background-color:#ccc;">
    <div style="width:700px;margin:20px auto;">
        <span>友情链接</span>
        <ul>
            <li v-for="(item,index) in lianjie" :key="index">
                <a :href="item.url" target="_blank">{{item.name}}</a>
            </li>
        </ul>
        <span>帮助</span>
        <ul>
            <li @click="go()">如何发布需求？</li>
            <li @click="go1()">如何申请签约？</li>
            <li @click="go2()">如何成为最耀眼的码农？</li>
        </ul>
    </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                lianjie:[
                    {name:'程序员客栈',
                    url:'https://www.proginn.com/'},
                    {name:'码市',
                    url:'https://codemart.com/'},
                    {name:'猪八戒',
                    url:'https://xian.zbj.com/sem/index?pmcode=128434637&utm_source=baidu&utm_medium=SEM'}
                ]
            }
        },
        methods:{
            go(){
                this.$router.replace({path:'/fabuxuqiu'})
            },
             go1(){
                this.$router.replace({path:'/gerenxinxi'})
            },
             go2(){
                this.$router.replace({path:'/zhuce'})
            }
        }
    }
</script>

<style scoped>

a{
    text-decoration: none;
    color:#000;
}
span{
    font-size:14px;
    margin-left: 100px;
    font-weight: 800;
    margin-top:20px;
}
ul{
    margin-top:10px;
    list-style:none;
    margin-left: 100px;
    height: 20px;
}
ul li{
    width: 150px;
    height: 20px;
    /* border:1px solid red; */
    float:left;
    line-height: 20px;
    text-align: center;
    font-size: 10px;
    cursor: pointer;
}
</style>