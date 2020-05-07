<template>
    <div>
        <div class="jiafang">
            <ul>
                <li class="li1">
                    <div>注册企业需求方</div>
                </li>
                <li class="li0">
                    <input placeholder=" 输入企业名称"  @focus="huoqujiaodian0()" @blur="shiqujiaodian0()" ref="input0"/>
                </li>
                <li class="li2">
                    <input placeholder=" 用户名(即个性后缀，注册后无法修改)"  @focus="huoqujiaodian()" @blur="shiqujiaodian()" ref="input1"/>
                </li>
                <li class="li3">
                    <div class="li3_1">
                        <input type="text" class="li3_1_1" placeholder=" 邮箱"  @focus="huoqujiaodian2()" @blur="shiqujiaodian2()" ref="input2"/>
                        <div class="li3_1_2">发送验证码</div>
                    </div>
                </li>
                <li class="li4">
                    <input placeholder=" 输入验证码"  @focus="huoqujiaodian3()" @blur="shiqujiaodian3()" ref="input3"/>
                </li>
                <li class="li5">
                    <input placeholder=" 请输入密码" @focus="huoqujiaodian4()" @blur="shiqujiaodian4()" ref="input4"/>
                </li>
                <li class="li6">
                    <input placeholder=" 请确认密码" @focus="huoqujiaodian5()" @blur="shiqujiaodian5()" ref="input5"/>
                </li>
                <li class="li7">
                    <div id="checked">
                        <input type="checkbox" @click="dianjixuanzhong($event)" ref="checked" />
                        <div>我同意遵守<a href="#">《码市用户服务协议》</a></div>
                    </div>
                </li>
                <li class="li8">
                    <input type="button" value="注 册" @click="dianjiqueren()" @mousemove="shubiaoyinru()" @mouseout="shubiaoyichu()" ref="zhuce"/>
                </li>
                <li class="li9">
                    <router-link to="/zhucexuqiufang"><input type="button" value="返回选择需求方类型"/></router-link>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                aa:'用户名不能为空',
                bb:'输入正确邮箱',
                cc:'请输入验证码',
                dd:'请输入密码',
                ee:'请确认密码',
                ff:'请输入企业名称',
                change:false
            }
        },
        methods:{
            dianjixuanzhong(e){
                var change=this.change;
                change=e.target.checked;
                //console.log(change);
                this.$data.change=change;
            },
            dianjiqueren(){
                var datachange=this.change;
                //var ischecked=this.$refs.checked;
                var idchecked=document.querySelector('#checked');
                console.log(idchecked);
                if (!datachange) {
                    console.log(1);
                    idchecked.style.background='red';
                    //ischecked.style.background='red';
                }else {
                    console.log(2);
                    idchecked.style.background='white';
                    //ischecked.style.background='red';
                }
                console.log(this.change);
            },

            shubiaoyinru(){
                this.$refs.zhuce.style.background="red";
            },
            shubiaoyichu(){
                this.$refs.zhuce.style.background="rgb(255,128,128)";
            },

            huoqujiaodian0(){
                this.$refs.input0.placeholder=" ";
            },
            shiqujiaodian0(){
                let ff=this.ff;
                if (this.$refs.value=" ") {
                    this.$refs.input0.placeholder=ff;
                }
            },

            huoqujiaodian(){
                this.$refs.input1.placeholder=" ";
            },
            shiqujiaodian(){
                let aa=this.aa;
                if (this.$refs.value=" ") {
                    this.$refs.input1.placeholder=aa;
                }
            },

            huoqujiaodian2(){
                this.$refs.input2.placeholder=" ";
            },
            shiqujiaodian2(){
                let bb=this.bb;
                if (this.$refs.value=" ") {
                    this.$refs.input2.placeholder=bb;
                }
            },

            huoqujiaodian3(){
                this.$refs.input3.placeholder=" ";
            },
            shiqujiaodian3(){
                let cc=this.cc;
                if (this.$refs.value=" ") {
                    this.$refs.input3.placeholder=cc;
                }
            },

            huoqujiaodian4(){
                this.$refs.input4.placeholder=" ";
            },
            shiqujiaodian4(){
                let dd=this.dd;
                if (this.$refs.value=" ") {
                    this.$refs.input4.placeholder=dd;
                }
            },

            huoqujiaodian5(){
                this.$refs.input5.placeholder=" ";
            },
            shiqujiaodian5(){
                let ee=this.ee;
                if (this.$refs.value=" ") {
                    this.$refs.input5.placeholder=ee;
                }
            }
        }
    }
</script>

<style scoped>
.jiafang{
    width: 360px;
    height: 570px;
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
    /* cursor: pointer; */
}
.jiafang ul li input{
    width: 320px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-indent: 5px;
    outline: none;
    cursor: pointer
}
.jiafang ul .li1{
    width: 320px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
    text-align: center;
    font-size: 23px;
    cursor: pointer
}
.jiafang ul .li7{
    width: 320px;
    height: 40px;
    float: left;
    cursor: pointer
}
.jiafang ul .li7 input{
    width: 14px;
    height: 14px;
    float: left;
    margin-top: 3px;
    cursor: pointer
}
.jiafang ul .li7 div div{
    font-size: 14px;
    cursor: pointer
}
.jiafang ul .li3_1{
    width: 320px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer
    /* border: 1px solid #ccc; */
}
.jiafang ul .li3_1 input{
    height: 40px;
    cursor: pointer
}
.jiafang ul .li3_1 .li3_1_1{
    width: 200px;
    border-radius: 5px 0px 0px 5px;
    float: left;
    cursor: pointer;
    border-right: 0px solid #fff;
}
.jiafang ul .li3_1 .li3_1_2{
    width: 117px;
    height: 40px;
    float: left;
    border: 1px solid #ccc;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    /* background-color: red; */
    color: rgb(255, 128, 128);
    line-height: 40px;
    text-align: center;
    font-size: 14px;
}
.jiafang ul .li8 input{
    background-color: rgb(255, 128, 128);
    color: #fff;
    cursor: pointer
}
.jiafang ul .li7 div a{
    text-decoration: none;
    cursor: pointer;
}
.jiafang ul .li9 input{
    border: 0px solid #ccc;
    margin-top: 30px;
    cursor: pointer;
}
</style>