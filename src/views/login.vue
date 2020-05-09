<template>
    <div>
        <top></top>
        <el-main>
            <h3>登录码市</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="kuang">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="手机号/邮箱/用户名" ref="username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="输入密码" v-model="ruleForm.password" show-password></el-input>
                </el-form-item>
                <div class="row">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                    <router-link to="findpsw" class="findpsw cur">找回密码</router-link>
                    <!-- <div class="findpsw right cur"><a href="findpsw">找回密码</a></div> -->
                </div>                
                <el-button type="primary"  @click="jump">登录</el-button>
            </el-form>            
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
        data(){
            var verifiname=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*请输入账号'))
                }else{
                    callback();
                }
            };
            var verifipass=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*请输入密码'))
                }else{
                    callback();
                }
            };
            return {
                ruleForm:{
                    username:'',
                    password:'',
                },
                rules:{
                    username:[
                        {validator:verifiname,trigger:'blur'}
                    ],
                    password:[
                        {validator:verifipass,trigger:'blur'}
                    ],
                },
               
                checked:true,
                uname:"*请输入账号",
                upsw:"*请输入密码",
                aa:"！账号或密码输入错误",
                checked:false,
            }
        },
        mounted(){
        },
        methods:{
            jump(){
                this.$axios
                .post('/api/v2/api-docs',{
                    username:this.Login.username,
                    password:this.Login.password,
                })
                .then(successResponse=>{
                    if(successResponse.data.code===200){
                        // if()
                        this.$router.replace({path:'./'})
                    }
                })
                .catch(failResponse=>{
                    new Error(failResponse)
                })
                /* console.log(this.ruleForm.username)
                console.log(this.ruleForm.password) */
            },
        },
        mounted(){
            
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
      margin-left: 140px;
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
      margin-bottom: 5px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #ccc;
      text-indent: 1em;
      height:35px;
      width:298px;
  }
  .el-input{
      outline: none;
      margin-top: 10px;
  }
  .el-checkbox{
      color: #ff8080;
  }
  .el-button{
      width: 298px;
      height: 35px;
      background-color: #ff8080;
      border: none;
      margin-top: 15px;
  }
  .el-button:hover{
      opacity: 0.9;
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
  .red{
      font-size: 12px;
      color: red;
      text-align: left;
      margin-top: 15px;
  }
  
</style>