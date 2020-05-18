<template>
    <div>
        <top></top>
        <el-main>
            <h3>邮箱重新设置密码</h3>
            <el-form class="kuang" :model="emailForm" :rules="rules">
                <el-form-item prop="email">
                    <div class="box" style="margin-top: 15px;">
                        <el-input placeholder="请输入电子邮箱" v-model="emailForm.email">
                            <el-button slot="append" @click="code()">获取验证码</el-button>
                        </el-input>
                    </div>                   
                </el-form-item>                            
                <el-form-item prop="code">
                    <el-input type="text" placeholder="输入验证码" v-model="emailForm.code"  autocomplete="off"> </el-input> 
                </el-form-item>                            
                <el-form-item prop="password">
                    <el-input type="password" placeholder="输入新密码" v-model="emailForm.password"  autocomplete="off"> </el-input> 
                </el-form-item>                            
                <el-form-item prop="againpassword">
                    <el-input type="password"  placeholder="再次输入密码" v-model="emailForm.againpassword"  autocomplete="off"> </el-input> 
                </el-form-item>                            
                <el-button type="primary" class="psw" @click="gologin">重置密码</el-button>
                <!-- <a href="login" class="back">返回登录</a> -->
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
            var verifimail=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*邮箱不能为空'))
                }else if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)){
                    callback(new Error('*邮箱格式不正确'))
                }else{
                    callback();
                }
            };
            var verificode=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*验证码不能为空'))
                }else{
                    callback();
                }
            };
            var verifipass=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*密码不能为空'))
                }else{
                    callback();
                }
            };
            var verifiagainpass=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('*再次输入密码'))
                }else if(value!=this.emailForm.password){
                    callback(new Error('*两次输入密码不一致'));
                }
            };
            return{
                emailForm:{
                    email:'',
                    code:'',
                    password:'',
                    againpassword:''

                },
                rules:{
                    email:[
                        {validator:verifimail,trigger:'blur'}
                        ],
                    code:[
                        {validator:verificode,trigger:'blur'}
                        ],
                    password:[
                        {validator:verifipass,trigger:'blur'}
                        ],
                    againpassword:[
                        {validator:verifiagainpass,trigger:'blur'}
                        ],
                },
            }
        },
       
        methods:{
            code(){
                console.log(this.emailForm.email)
                this.$axios
                .post('/api/sendEmail',{email:this.emailForm.email})
                .then(res=>{
                    //console.log(res)
                    this.$message("验证码已发送到你的邮箱，请注意查收")
                })
                .catch(res=>{
                    //console.log(res)
                    this.$message.error(res)
                })
            },
            gologin(){
                this.$axios
                .post('/api/codeVerify',{
                    email:this.emailForm.email,
                    code:this.emailForm.code,
                })
                .then(res=>{
                    if(res.data.code===200){
                        //console.log(res)
                        this.$axios
                        .post('/api/changePassword',{
                             email:this.emailForm.email,
                            code:this.emailForm.code,
                            password:this.emailForm.password
                        })
                        .then(res=>{                             
                            this.$router.replace({path:'/login'})
                            this.$message('密码修改成功')
                        })
                    }
                })
                .catch(failResponse=>{
                    
                })
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
    /* margin-bottom: 15px; */
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
  .kuang{
      width: 300px;
      margin: auto;
      overflow: hidden;
  }
  .el-input,.el-button{
      float: left;
      height:35px;
      width:298px;
      margin: 5px 0;
  }
  .cur{      
      cursor: pointer;
  }
  .kuang .psw{
      background-color: #ff8080;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
  }
 .box .el-button{
      width: 50px;
      height: 28px;
      padding: 0;
      margin-left: -18px;
  }
</style>