<template>
    <div>
        <el-container>
            <el-header>{{id}}</el-header>
            <el-main>
                <span style="color:#999;">类型 : {{leixing}}</span>
                <span style="color:#999;"> &nbsp;&nbsp;预算 : ￥{{yusuan}}</span>
                <el-button style="margin-left:500px;color:#fff;background-color:rgb(255,128,128);">参与项目</el-button>
                <span style="margin-left:40px;font-size:20px;">项目描述</span>
                <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
                placeholder="请输入内容"
                v-model="jianjie">
                </el-input>
                <span>项目文档</span>
                <p>{{xiangmuwendang}}</p>
                <!-- <div style="width:650px;height:300px;border:1px solid #ccc;border-radius:5px;padding:10px;">{{jianjie}}</div> -->
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:"项目名称",
                leixing:"其他",
                yusuan:"222",
                jianjie:"hgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
                xiangmuwendang:"",
            }
        },
        created:{
            go(){
                this.$http.post('/api/')
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    width: 700px;
    margin: auto;
    line-height: 60px;
    font-size: 20px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
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