<template>
<div>
    <el-container>
        <div class="cxy">
            <h3>长 安 城 下 最 耀 眼 的 码 农</h3>
            <ul>
                <li v-for="(item,index) in message" :key="index">
                    <el-avatar class="left" :size="size" :src="item.src"></el-avatar>
                    <h5>{{item.prog_company}}</h5>
                    <p >
                        <span>最擅长：{{item.prog_job_skill}}</span>
                        <span> {{item.prog_job_post}}</span>
                    </p>
                    <p >
                        <span>城市：{{item.prog_area}}</span> 
                        <span>{{item.prog_workday}}{{item.prog_hours}}</span>
                    </p>
                </li>
                <!-- <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >最擅长：java</p>
                    <p >城市：北京</p>
                </li> -->
            </ul>
        </div>
    </el-container>
</div>

    
</template>

<script>
    export default {
        data(){
            return{
                /* list:[
                    {}
                ] */
                size:'large',
                message:[],
            }
        },
        created(){
            this.$axios.post('/zk/excellent')
            .then(res=>{
                console.log(res.data.data.showExcellent)
                this.message=res.data.data.showExcellent;
            })
        }
    }
</script>

<style scoped>
.cxy{
    width: 1000px;
    margin: auto;
}
.cxy h3{
    text-align: center;
    margin: 20px 0;
    font-weight: 400;
}
.cxy p{
    font-size: 12px;
    color: #777777;
    margin: 10px;
}
span{
    margin-left: 15px;
}
h5{
    padding-left: 15px;
}
.left{
    float: left;
}
.cxy .el-avatar{
    width: 80px;
    height: 80px;
    margin: 0 20px;
}
.cxy ul{
    overflow: hidden;
}
.cxy ul li{
    padding: 20px;
    list-style: none;
    width: 440px;
    height: 80px;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 5px 0px #ccc;
    border-radius: 5px;
    float:left;
}
</style>