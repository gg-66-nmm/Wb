<template>
    <div>
        <top></top>
        <el-main>
            <h3>邮箱重新设置密码</h3>
            <div class="kuang">
                <input type="text" placeholder="电子邮箱" >              
                <input type="button" class="psw" value="发送重置邮件" @click="gologin">
                <a href="login" class="back">返回登录</a>
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
            gologin(){
                
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
      margin-bottom: 15px;
  }
  .kuang .psw{
      background-color: #ff8080;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
  }
</style>