<template>
    <div>
      <top></top>
        <el-container>
          <el-header style="font-size:25px;">我 的 项 目</el-header>
          <div style="width:100%;heifht:300px;margin-left:100px;">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
              <el-tab-pane label="待完成项目" style="margin-top:20px;">
                <div class="zhanshi" style="width:80%;height:300px;float:left;">
                    <div class="zhanshi1"></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="项目进行中" style="margin-top:20px;">
                <div class="zhanshi" style="width:80%;height:300px;float:left;">
                    <div class="zhanshi1"></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成项目" style="margin-top:20px;">
                <div class="zhanshi" style="width:80%;height:300px;float:left;">
                    <div class="zhanshi1"></div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
            <!-- <el-header style="font-size:25px;">我 的 项 目</el-header>
            <div style="width:100%;heifht:300px">
                <div style="width:20%;height:300px;float:left;">
                    <ul style="list-style:none;">
                        <li>待完成项目</li>
                        <li>进行中项目</li>
                        <li>完成作品展示</li>
                    </ul>
                </div>
                <div class="zhanshi" style="width:80%;height:300px;float:left;">
                    <div class="zhanshi1"></div>
                </div>
            </div> -->
            <!-- <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main> -->
        </el-container>
        <foot></foot>
    </div>
</template>

<script>
import top from '@/components/head'
import foot from '@/components/weiba'
    export default {
      data(){
        return{
           tabPosition: 'left'
        }
        
      },
        components:{
            top,foot
        },
        
    }
</script>

<style scoped>
.zhanshi{
    width:80%;
    height:200px;
}
.el-container div ul li{
    cursor: pointer;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top: 20px;
    text-align: center;
    border:1px solid #ccc;
    font-size: 20px;
    /* color: rgb(255,128,128); */
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
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
    text-align: center;
    line-height: 160px;
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