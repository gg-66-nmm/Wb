<template>
    <div>
        <top></top>
        <div class="xuanxk" @click="go()">
            <ul>
                <li  v-for="(item,index) in xinxi" :key="index">
                   <span class="title"> {{item.title}}</span>
                    <span class="info" v-for="(aa,index) in xinxi[index].info" :key="index">{{aa}}</span>
                </li>
                <li>
                    <div class="fangshi">                        
                        <label class="fs">工作方式</label>
                        <el-radio v-model="radio" label="1">远程</el-radio>
                        <el-radio v-model="radio" label="2">驻场</el-radio>
                        <el-select v-model="value" placeholder="工作状态" size="small">
                            <el-option label="兼职" value="兼职"></el-option>
                            <el-option label="长期" value="长期"></el-option>
                        </el-select>                
                    </div>
                </li>
            </ul>
            
            
        </div>
        <div class="content">
            <ul>
                
                
                <li>
                    <router-link to="/xuqiuxiangqing">
                        <el-avatar class="left" src="../assets/logo.png"></el-avatar>
                        <div class="left">
                            <p>
                                <span class="content_title">油封科技</span>
                                <label>北京</label>
                                <label>其他</label>
                                <label>8年</label>
                            </p>
                            <p>
                                <span class="content_main">技能：</span>
                                <label>java</label>
                                <label>java</label>
                                <label>java</label>
                            </p>
                            <p>
                                <span class="content_main">作品：</span>
                                <label>网络攻击地图</label>
                                <label>网络攻击地图</label>
                                <label>网络攻击地图</label>
                            </p>
                            <p class="huise">工作时间：<span>工作日09:00-23:00、周末08:00-23:00</span></p>
                        </div>
                        <div class="right qianyue">
                            <p><span>100</span>元/天</p>
                            <p><el-button type="danger" plain>康康他</el-button></p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <el-avatar class="left" src="../assets/logo.png"></el-avatar>
                    <div class="left">
                        <p>
                            <span class="content_title">油封科技</span>
                            <label>北京</label>
                            <label>其他</label>
                            <label>8年</label>
                        </p>
                        <p>
                            <span class="content_main">技能：</span>
                            <label>java</label>
                            <label>java</label>
                            <label>java</label>
                        </p>
                        <p>
                            <span class="content_main">作品：</span>
                            <label>网络攻击地图</label>
                            <label>网络攻击地图</label>
                            <label>网络攻击地图</label>
                        </p>
                        <p class="huise">工作时间：<span>工作日09:00-23:00、周末08:00-23:00</span></p>
                    </div>
                    <div class="right qianyue">
                        <p><span>100</span>元/天</p>
                        <p><el-button type="danger" plain>康康他</el-button></p>
                    </div>
                </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="100    "></el-pagination>
        </div>
        
    </div>
</template>

<script>
import top from '@/components/head'
    export default {
        components:{
            top
        },
        data(){
            return {
                value:'',
                radio:1,
                email:'',
                xinxi:[
                    {
                        title:"角色",
                        info:["产品经理","设计师","前端","移动端","小程序","后端","游戏","测试","DBA","运维"]
                    },
                    {
                        title:"城市",
                        info:["北京","上海","广州","深圳","杭州","成都","武汉","西安","南京","武汉","重庆",
                        "长沙","厦门","郑州","天津","兰州","乌鲁木齐","大连"],
                    },
                    {
                        title:"行业",
                        info:["电子商务","社交","人工智能","媒体门户","各种软件","消费生活","金融","医疗健康","企业服务","数字娱乐","在线教育"]
                    }
                ]
            }
        },
        methods:{
            go(){

            }
            // console.log(this.xinxi[0].info)
        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    font-size: 13px;
}
h1{
    font-size: 20px;
}
.left{
    float:left;
}
.right{
    float: right;
}
.huise{
    color: rgb(151, 151, 151);
}
.xuanxk{
    width: 1000px;
    padding: 20px 0;
    margin:25px auto;
    /* box-shadow: 0px 5px 3px 1px #ccc; */
    box-shadow: 0px -1px 3px 2px #ccc;
}
.xuanxk ul li .title{
    width: 80px;
    margin: 10px;
}
.xuanxk ul li .info{
    color: rgb(128, 128, 128);
    padding: 5px 10px;
}
.xuanxk ul li .info:hover{
    color: #ff8080;
    cursor: pointer;
}
ul {
    /* display: flex; */
    list-style: none;
}
ul li{
    margin: 15px 15px;
}
.fangshi{
    margin: 10px;
}
.fangshi .fs{
    margin-right:15px;
}
.el-radio{
    color: rgb(128, 128, 128);
    padding: 0 10px;
    }
.el-select{
    margin-left: 50px;
}
.content{
    width: 1000px;
    margin: auto;
}
.content ul li{
    width: 100%;
    margin: 10px 0;
    padding: 20px 0;
    box-shadow: -1px 4px 9px 1px #ccc;
    margin-bottom: 15px;
    padding-bottom: 35px;
    overflow: hidden;
}
.content ul li p{
    margin-top: 20px;
}
.content ul li p label{
    height: 21px;
    padding: 0 10px;
    color: rgb(110, 110, 110);
    background-color: #ccc;
    border-radius: 5px;
}
.el-avatar{
    width: 100px;
    height: 100px;
    margin: 20px;
}
.content_title{
    font-size:21px;
    font-weight:700;
    padding-right:20px;

}
.content_main{
    font-size: 16px;
    font-weight: 500;
}
.qianyue{
    width: 250px;
    height: 100%;
    margin-top: 15px;
    text-align: center;
    border-left:1px solid #000;
}
.qianyue .el-button{
    width: 80px;
    height: 35px;
    margin-top: 20px;
}
.qianyue p{
    color:#ff8080;
}
.qianyue span{
    font-size: 32px;

}
</style>