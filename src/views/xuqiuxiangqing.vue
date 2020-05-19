<template>
    <div>
      <top></top>
        <el-container>
            <el-header>{{msg.demand_name}}</el-header>
            <el-main>
                <span style="color:#999;">类型 : {{msg.demand_type}}</span>
                <span style="color:#999;"> &nbsp;&nbsp;预算 : ￥{{msg.demand_budget}}</span>
                <el-button style="margin-left:500px;color:#fff;background-color:rgb(255,128,128);">参与项目</el-button>
                <span style="margin-left:40px;font-size:20px;">项目描述</span>
                <el-input
                style="margin-top:20px"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
                placeholder="请输入内容"
                v-model="msg.demand_detail">
                </el-input>
                <span style="margin-top:20px;text-decoration:none;">项目文档</span>
                <a :href="msg.demand_file" style="margin-top:20px;text-decoration:none;">{{msg.demand_file}}</a>
                <!-- <div style="width:650px;height:300px;border:1px solid #ccc;border-radius:5px;padding:10px;">{{jianjie}}</div> -->
            </el-main>
        </el-container>
        <foot></foot>
    </div>
</template>

<script>
    import top from '../components/head'
import foot from '../components/weiba'
    export default {
      components:{
        top,
        foot
      },
        data(){
            return{
                bb:'',
                msg:''
            }
        },
        created(){
            this.bb=this.$route.query.info;
            this.$axios.post('/zk/demand/details',{"demand_id":this.bb})
            .then(res=>{
              this.msg=res.data.data.demand
            })
            .catch(err=>{
              throw Error(err)
            })
        },
        methods:{
        }
    }
</script>

<style scoped>
 .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    /* border:1px solid #ccc; */
    /* border-radius:10px; */
    color: #333;
    width: 700px;
    margin: auto;
    line-height: 60px;
    font-size: 20px;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    border-radius:5px;
border:1px solid #ccc;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    border-radius:5px;
border:1px solid #ccc;
    color: #333;
    width: 700px;
    margin: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>