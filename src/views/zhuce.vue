<template>
    <div>
      <top></top>
        <el-container>
        <el-aside width="200px">你想成为？</el-aside>
        <el-main>
          <router-link to="/zhuceyi">
            <div class="shenfen shenfen1">
                <img src="../assets/jiafang.svg"/>
                <div>
                  <h3>开发者</h3>
                    <div>可在码市报名项目，赚取利益</div>
                </div>
            </div>
          </router-link>
          <router-link to="/zhucexuqiufang">
            <div class="shenfen shenfen2">
                <img src="../assets/yifang1.svg"/>
                <div>
                  <h3>需求方</h3>
                    <div>可在码市发布项目，实现需求</div>
                </div>
            </div>
          </router-link>
        </el-main>
        </el-container>
        <foot></foot>
    </div>
</template>

<script>
import top from '../components/head'
import foot from '../components/footer'
    export default {
        components:{
          top,
          foot,
        }
    }
</script>

<style scoped>

  .el-aside {
    background-color: white;
    color: rgb(255, 128, 128);
    text-align: center;
    line-height: 200px;
    font-size: 25px;
  }
  
  .el-main {
    background-color:white;
    color: rgb(255, 128, 128);
    text-align: center;
    line-height: 160px;
    height: 500px;
    position: relative;
  }
  
  .el-container {
    margin-bottom: 40px;
    margin-left: 200px;
    margin-top: 20px;

  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .shenfen {
      width: 550px;
      height: 150px;
      border: 1px solid wheat;
      border-radius: 6px;
 }
 .shenfen1{
        position: absolute;
      top: 25px;
      left: 10px;
 }
 .shenfen2{
        position: absolute;
      top: 200px;
      left: 10px;
 }

.shenfen img{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 40px;
    left: 40px;
}

.shenfen2 img{
    color: rgb(255, 128, 128);
}
.shenfen h3{
    margin-top: -20px
}
.shenfen div div{
    color: black;
    position: absolute;
    top: 10px;
    left: 170px;
    color: #555;
}
</style>