<template>
    <div>
        <div class="jiafang">
            <ul>
                <li class="li1">
                    <div>注册开发者账号</div>
                </li>
                <li class="li2">
                    <input placeholder=" 用户名(即个性后缀，注册后无法修改)"/>
                </li>
                <li class="li3">
                    <div class="li3_1">
                        <input type="text" class="li3_1_1"/>
                        <input type="button" class="li3_1_2"/>
                    </div>
                </li>
                <li class="li4">
                    <input placeholder=" 输入手机验证码"/>
                </li>
                <li class="li5">
                    <input placeholder=" 请输入密码"/>
                </li>
                <li class="li6">
                    <input placeholder=" 请确认项目"/>
                </li>
                <li class="li7">
                    <div>
                        <input type="checkbox"/>
                        <div>我同意遵守<a href="#">《码市用户服务协议》</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.jiafang{
    width: 360px;
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 30px auto;
}
.jiafang ul{
    list-style: none;
}
.jiafang ul li{
    display: block;
    width: 320px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
}
.jiafang ul li input{
    width: 320px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-indent: 5px;
    outline: none;
}
.jiafang ul .li1{
    width: 320px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
    text-align: center;
    font-size: 23px;
}
.jiafang ul .li7{
    width: 320px;
    height: 40px;
    float: left;
    
}
.jiafang ul .li7 input{
    width: 14px;
    height: 14px;
    float: left;
    margin-top: 3px;
}
.jiafang ul .li7 div div{
    font-size: 14px;
}
.jiafang ul .li3_1{
    width: 320px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.jiafang ul .li3_1 input{
    height: 40px;
}
.jiafang ul .li3_1 .li3_1_1{
    width: 200px;
    border-radius: 5px 0px 0px 5px;
    float: left;
    border-right: 0px solid #fff;
}
.jiafang ul .li3_1 .li3_1_2{
    width: 119px;
    float: left;
    border-right: 0px solid #fff;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    cursor: pointer;
}
</style>