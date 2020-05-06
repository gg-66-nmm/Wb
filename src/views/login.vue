<template>
    <div>
        <top></top>
        <el-main>
            <h3>登录码市</h3>
            <div class="kuang">
                <input type="text" placeholder="手机号/邮箱/用户名" >
                <input type="text" placeholder="输入密码" >
                <div class="row">
                    <input type="checkbox" id="remmber" class="left cur">
                    <label for="remmber" class="left cur">记住密码</label>
                    <div class="findpsw right cur"><a href="findpsw">找回密码</a></div>
                </div>                
                <input type="button" id="login" class="login" value="登录" @click="jump">
            </div>            
        </el-main>
        <foot></foot>
    </div>
</template>

<script>
import top from '../components/head'
import foot from '../components/footer'
    export default {
        components:{
           top ,
           foot
        },
        methods:{
            jump(){
                location.href="../App.vue";
            }
        }
    }
    
</script>

<style scoped>
a{
    text-decoration: none;
    color:rgb(255,128,128)
}
a:hover{
    color: #ff8080;
}
    .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    height: 420px;
    font-size: 14px;
    margin-top: 50px;
  }
  .left{
      float: left;
  }
  .right{
      float:right;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .findpsw{
      margin-left: 160px;
  }
  .cur{
      
      cursor: pointer;
  }
  .kuang{
      width: 300px;
      margin: auto;
      overflow: hidden;
  }
  .kuang input{
      float: left;
      margin-top: 20px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #ccc;
      text-indent: 1em;
      height:35px;
      width:290px;
  }
  .row{
      margin-top: 10px;
      float: left;
  }
  .row input{
      width: 14px;
      height: 14px;
      margin-top: 3px;
      overflow: hidden;
      border: 1px solid #ff8080;
  }
  .kuang .login{
      background-color: #ff8080;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
  }
  
</style>