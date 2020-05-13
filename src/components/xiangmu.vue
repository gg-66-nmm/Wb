<template>
    <div>
         <div class="content">
            <ul>
                <li>
                    <el-row :gutter="20">
                        <el-col :span="18">
                            <div class="content_left">
                                <div class="content_name"><span class="item_id">NO.120</span>王超的项目</div>
                                <div class="content_xuqiu">类型：<span>web网站</span></div>
                                <div class="content_state">招募中</div>
                            </div>
                            
                        </el-col>
                        <el-col :span="6">
                            <div class="content_budget">￥19999.99</div>
                        </el-col>
                
                    </el-row>
                </li>
                <!--<li v-for="(item,index)in description" :key="key">
                    <el-row :gutter="20">
                         <el-col :span="18">
                            <div class="content_left">
                                <div class="content_name"><span class="item_id">NO.{{item.id}}</span>{{item.demandName}}</div>
                                <div class="content_xuqiu">类型：<span>{{item.demandType}}</span></div>
                                <div class="content_state">{{item.state}}</div>
                            </div>
                            
                        </el-col>
                        <el-col :span="6">
                            <div class="content_budget">￥{{item.demandBudget}}</div>
                        </el-col>
                    </el-row>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    font-size: 13px;
}
.el-col{
    padding: 0;
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
    .content{
    width: 980px;
    margin: auto;
}
.content ul li{
    list-style-type: none;
    width: 100%;
    margin: 30px 0;
    padding: 20px 0;
    box-shadow: 0px 3px 5px 0px #ccc;
    margin-bottom: 15px;
    padding-bottom: 35px;
}
.content_left{
    margin: 0 80px;
}
.content_left div{
    margin: 10px 0;
}
.content_name{
    font-size: 24px;

}
.item_id{
    font-size: 18px;
}
.content_xuqiu{
    font-size: 16px;    
}
.content_xuqiu span{
    font-size: 14px; 
    color: #999;   
}
.content_state{
    width: 80px;
    height: 30px;
    line-height: 30px;
    color: #ff8080;
    border: 1px solid #ff8080;
    border-radius: 5px;
    text-align: center;
}
.content_budget{
    color: #ff8008;
    margin-top: 15px;
    font-size: 21px;
}
/* .content ul li p{
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

} */
</style>