<template>
<div>
    <el-container>
        <div class="cxy" @click="go()">
            <h3>长 安 城 下 最 耀 眼 的 码 农</h3>
            <ul>
                <li v-for="(item,index) in message" :key="index" @click="xiangqing(index)">
                    <el-avatar class="left" :size="size" :src="item.user_avatar"></el-avatar>
                    <h5>{{item.user_name}}</h5>
                    <p >
                        <span>最擅长：{{item.prog_job_skill}}</span>
                        <span> {{item.prog_job_post}}</span>
                    </p>
                    <p >
                        <span>城市：{{item.prog_area}}</span> 
                        <span>{{item.prog_workday}}{{item.prog_hours}}</span>
                    </p>
                </li>
                
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
                email:'',
                message:[],
            }
        },
        created(){
            this.$axios.post('/zk/excellent')
            .then(res=>{
                console.log(res.data.data.showExcellent)
                this.message=res.data.data.showExcellent;
            })
        },
        methods:{
            xiangqing(bb){
                this.$router.push("/cuyxinxi?into="+this.message[bb].user_email);
                // console.log(this.message[bb].user_email)
            },
            // go(){
            //     this.email=this.$route.query.info;
            //         this.$router.push('/cuyxinxi?info='+this.email);
            //     }
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