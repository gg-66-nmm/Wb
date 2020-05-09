<template>
    <div>
        <top></top>
        <el-main>
            <h3>登录码市</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="kuang">
                <el-form-item prop="email">
                    <el-input v-model="ruleForm.email" placeholder="手机号/邮箱/用户名" ref="email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="输入密码" v-model="ruleForm.password" show-password></el-input>
                </el-form-item>
                <div class="row">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                    <router-link to="changepsw" class="findpsw cur" @click="clear">找回密码</router-link>
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
                    email:'',
                    password:'',
                    username:'',
                    code:'',      
                },
                rules:{
                    email:[
                        {validator:verifiname,trigger:'blur'}
                    ],
                    password:[
                        {validator:verifipass,trigger:'blur'}
                    ],
                },
               
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
                const self=this;
                this.$axios.post('/aa/login',{
                    email:this.ruleForm.email,
                    password:this.ruleForm.password,
                }).then(res=>{
                    console.log(res)
                    
                    if(res.data.code==200){
                        /* //当记住密码时向localStorage里面存储id跟密码
                        if(this.checked==true){
                            this.setlocalStorage({this.ruleForm.username})
                        }else{
                            this.clearlocalStorage();
                        }     */                  
                        self.$router.replace({path:'./'}) 
                    }
                })
                .catch(failResponse=>{
                    new Error(failResponse)
                })
                /* console.log(this.ruleForm.username)
                console.log(this.ruleForm.password) */
            },/* 
            //保存localStorage
                setlocalStorage(c_email,c_pwd){
                localStorage.siteName=c_name
                localStorage.sitePassword=c_pwd
            },
            //获取localStorage
            getlocalStorage(){
                this.ruleForm.email=localStorage.getItem(localStorage.key(1))
                this.ruleForm.password=localStorage.getItem(localStorage.key(2))
            },*/
            //忘记密码，清空密码
            clear:function(){
                //this.setlocalStorage('','')
            }
        }, 
        mounted(){
            // this.getlocalStorage()
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