<template>
    <div>
        <div class="bg"></div>
        <el-container>
            <el-menu  class="el-menu-demo" mode="horizontal" >
                <div class="left logo">
                    <router-link to="/" class="decoration"><img src="../assets/logo.png" style="height:50px;width:75px" ></router-link>                    
                </div>                
                <el-menu-item index="1"><router-link to="/" class="decoration">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/cxy" class="decoration">程序员</router-link></el-menu-item>
                <el-input placeholder="搜索你感兴趣的程序员" v-model="searchData">
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
                <el-menu-item index="3"><router-link to="fabuxuqiu" class="decoration">发布需求</router-link></el-menu-item>
                <el-menu-item index="4">
                    <span class="decoration" @click="go()">请求签约</span>
                    <!-- <router-link to="gerenxinxi" class="decoration">请求签约</router-link> -->
                    </el-menu-item>
                <el-dropdown class="right">
                    <div class="head">
                        <el-avatar  :src="circleUrl"></el-avatar>
                        <span >{{username}}</span>
                        
                    </div>
                    <el-dropdown-menu class="el-dropdown-menu" slot="dropdown">
                        <el-dropdown-item><router-link class="menu-item" to="cuyxinxi"><i class="el-icon-user"></i>个人中心</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link class="menu-item" to="shimingrenzheng"><i class="el-icon-s-custom"></i>实名认证</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link class="menu-item" to="wodexiangmu"><i class="el-icon-s-unfold"></i>我的项目</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link class="menu-item" to=""><i class="el-icon-circle-close"></i>退出登录</router-link></el-dropdown-item>
                    </el-dropdown-menu>
                    
                </el-dropdown>
                
                <div class="zhuce">
                    <router-link to="zhuce" class="decoration">注册</router-link>
                </div>
                <div class="zhuce">
                    <router-link to="login" class="decoration">登录</router-link>
                </div>
                
            </el-menu>
        </el-container>
        <div class="line"></div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return {
                    circleUrl:'',
                    username:'hhh',
                    searchData:'',
                    activeIndex:2,
                    bb:'',
                
            }
        },
        created(){
            /* console.log(this.$route);
            this.bb = this.$route.params.info;
            console.log(this.bb) */
        },
        methods:{
            go(){
                this.$http.post('/api/realName/realname').then(res=>{
                    console.log(res);
                    if (code==200) {
                        this.$router.replace({path:'/gerenxinxi'})
                    }
                }) 
            },
           search(){

           },
           /* handleSelect(key, keyPath) {
                console.log(key, keyPath);
            } */
        },
        // props:['messageInfo'],
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.bg{
    width:100%;
    height: 60px;
    background-color:#E9EEF3;
    position: absolute; 
    box-shadow: 0 0 5px 5px #ccc;
}
.logo{
    width: 200px;
    text-align: center;
}
.el-menu-item{
    padding: 0 20px;
}
.line{
    width: 100%;
}
.el-container{
    text-align: center;
}
.el-menu-demo{
    height: 60px;
    margin: auto;
    background-color: #E9EEF3;
}
.el-input{
    width: 320px;
    margin-top: 12px;
}
.decoration{
    text-decoration: none;
}
.zhuce .decoration:hover{
    color: #fff;
    background-color: rgb(255,128,128);
}
  .left{
      float:left;
  }
  .right{
      float:right;
  }
 .logo img{
      margin-top: 5px;
  }
  .head{
      margin: 12px 20px;      
      
  }
  .head .el-avatar{
      vertical-align:middle;
      display: inline-block;
  }
  .zhuce{
      width: 70px;
      height: 40px;
      float:right;
      margin: 12px 12px;
  }
  .zhuce .decoration{
      color: #ff8080;
      background-color: #e7e1e1;
      display: inline-block;
      text-align: center;
      width: 70px;
      line-height: 35px;
      font-size: 12px;
      margin-left: 15px;
      border: 1px solid rgb(255,128,128);
      border-radius: 5px;
  }
  .menu-item{
      text-decoration: none;
      color: #000;
      display: inline-block;
      padding: 10px 20px;
  }
  
</style>