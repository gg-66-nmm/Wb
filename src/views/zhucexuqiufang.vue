<template>
    <div>
        <el-container>
        <el-aside width="200px">注册需求方类型
          <p @click="go()">返回身份选择</p> 
          </el-aside>
        <el-main>
          <router-link to="/zhucexuqiufanggeren">
            <div class="shenfen shenfen1">
                <img src="../assets/jiafang.svg"/>
                <div>
                    <h3>个人需求方</h3>
                    <div>适用于没有企业资质得个人需求方</div>
                </div>
            </div>
          </router-link>
          <router-link to="/zhucexuqiufangqiye">
            <div class="shenfen shenfen2">
                <img src="../assets/yifang1.svg"/>
                <div>
                    <h3>企业需求方</h3>
                    <div>适用于已注册企业资质得需求方</div>
                </div>
            </div>
          </router-link>
        </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
      methods:{
        go(){
          this.$router.push('/zhuce');
        }
      }  
    }
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
}
.el-aside p{
  font-size: 14px;
  color: #ccc;
  margin-top: -150px;
  cursor: pointer;
}

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
    position: relative;
  }
  
  .el-container {
    margin-bottom: 40px;
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
      top: 25px;
      left: 570px;
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
  cursor: pointer;
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