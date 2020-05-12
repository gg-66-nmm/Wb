<template>
    <div>
        <top></top>
        <el-main>
            <h3>邮箱重新设置密码</h3>
            <el-form class="kuang" :model="emailForm" :rules="rules">
                <el-form-item prop="email">
                    <el-input type="email" placeholder="电子邮箱" v-model="emailForm.email"  autocomplete="off"> </el-input> 
                </el-form-item>                            
                <el-button type="primary" class="psw" @click="gologin">发送重置邮件</el-button>
                <!-- <a href="login" class="back">返回登录</a> -->
                <router-link to="login">返回登录</router-link>
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
                }else{
                    callback();
                }
            };
            return{
                emailForm:{
                    email:'',
                },
                rules:{
                    email:[
                        {validator:verifimail,trigger:'blur'}
                        ]
                },
            }
        },
       
        methods:{
            gologin(){
                this.$axios
                .post('/api/v2/api-docs',{
                    email:this.findpsw.email,
                })
                .then(successResponse=>{
                    if(successResponse.data.code===200){
                        this.$message('已发送重置信息，请注意查收');
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
      margin-top: 20px;
      height:35px;
      width:298px;
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