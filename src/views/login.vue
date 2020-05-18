<template>
    <div>
        <top :email="ruleForm.email"></top>
        <el-main>
            <h3>欢迎登录长安城下最优秀的码农</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="kuang">
                <el-form-item prop="email">
                    <el-input v-model="ruleForm.email" placeholder="输入邮箱" ref="email" autocomplete="off"></el-input>
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
                    callback(new Error('*请输入邮箱'))
                }else if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)){
                    callback(new Error('*邮箱格式不正确'))
                }
                else{
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
                isLogin:false,
                name:123,
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
               
                checked:false,
            }
        },
        methods:{
            jump(){
                const self=this;
                if(this.ruleForm.email===''||this.ruleForm.password===''){
                    this.$message.error("邮箱或密码不能为空")
                }else{
                    // this.$axios.post('/api/login',{
                    //     email:this.ruleForm.email,
                    //     password:this.ruleForm.password,
                    // }).then(res=>{
                    //     console.log(res)
                        
                    //     if(res.data.code===200){
                    //         /* //当记住密码时向localStorage里面存储id跟密码
                    //         if(this.checked==true){
                    //             this.setlocalStorage({this.ruleForm.username})
                    //         }else{
                    //             this.clearlocalStorage();
                    //         }     */   
                    //         self.isLogin=true;
                    //         localStorage.setItem('message',JSON.stringify(this.ruleForm));
                    //         self.$router.push({path:'/'}) 
                    //     }
                    // })
                    // .catch(failResponse=>{
                    //     new Error(failResponse)

                    // })
                    this.$axios.post('/zk/enroll',{
                        user_email:this.ruleForm.email,
                        user_password:this.ruleForm.password,
                    }).then(res=>{
                        console.log(res)
                        if(res.data.code===200){
                            self.isLogin=true;                            
                            sessionStorage.setItem('message',JSON.stringify(this.ruleForm.email));
                            self.$router.push({path:'/'}) 
                        } 
                    })
                }
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
h3{
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 20px;
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