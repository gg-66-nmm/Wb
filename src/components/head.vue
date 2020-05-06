<template>
    <div>
        <el-container>
        <el-header>
            <div class="left">
                <h5>互联网软件外包平台</h5>
            </div>
            <div class="right">
                <a class="zhuce" href="">注册</a>
            </div>
        </el-header>
        </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
a{
    text-decoration: none;
    color:rgb(255,128,128)
}
a:hover{
    color: #fff;
    background-color: rgb(255,128,128);
}
.el-header{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
    box-shadow: 0 0 5px 5px #ccc;
  }
  .left{
      float:left;
  }
  .right{
      float:right;
  }
  .zhuce{
      display: inline-block;
      width: 70px;
      line-height: 35px;
      font-size: 12px;
      border: 1px solid rgb(255,128,128);
      border-radius: 5px;
  }
  
  
</style>