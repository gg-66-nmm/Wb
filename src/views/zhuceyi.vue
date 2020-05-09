<template>
    <div>
        <form>
        <div class="jiafang">
            <ul>
                <li class="li1">
                    <div>注册开发者账号</div>
                </li>
                <li class="li2">
                    <input v-model="shuju.name" placeholder=" 用户名(即个性后缀，注册后无法修改)"  @focus="huoqujiaodian()" @blur="shiqujiaodian()" ref="input1"/>
                </li>
                <li class="li3">
                    <div class="li3_1">
                        <input type="email" class="li3_1_1" placeholder=" 邮箱" v-model='shuju.email' @focus="huoqujiaodian2()" @blur="shiqujiaodian2()" ref="input2"/>
                        <div class="li3_1_2" @click="fasongyanzheng()">获取验证码</div>
                    </div>
                </li>
                <li class="li4">
                    <input placeholder=" 输入验证码" v-model="shuju.yanzhengma" @focus="huoqujiaodian3()" @blur="shiqujiaodian3()" ref="input3"/>
                </li>
                <li class="li5">
                    <input type="password" placeholder=" 请输入密码(6-24位数字、字母或字符组成)" v-model="shuju.psw" @focus="huoqujiaodian4()" @blur="shiqujiaodian4()" ref="input4"/>
                </li>
                <li class="li6">
                    <input type="password" placeholder=" 请确认密码" v-model="querenpsw" @focus="huoqujiaodian5()" @blur="shiqujiaodian5()" ref="input5"/>
                </li>
                <li class="li7">
                    <div id="checked">
                        <input type="checkbox"  @click="dianjixuanzhong($event)"  ref="checked"/>
                        <div>我同意遵守<a href="#">《码市用户服务协议》</a></div>
                    </div>
                </li>
                <li class="li8">
                    <input type="button" value="注 册" @click="dianjiqueren()" @mousemove="shubiaoyinru()" @mouseout="shubiaoyichu()" ref="zhuce"/>
                </li>
                <li class="li9">
                    <router-link to="/zhuce"><input type="button" value="注册需求方"/></router-link>
                    
                </li>
            </ul>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shuju:{
                    name:'',
                    email:'',
                    psw:'',
                    yanzhengma:''
                },

                aa:'用户名不能为空(长度大于3，小于10的字符串)',
                bb:'输入正确邮箱',
                cc:'请输入验证码',
                dd:'请输入密码',
                ee:'请确认密码',
                ddtishi:'密码格式不正确，请输入6-24位数字、字母或符号',
                change:false,
                kong:'',
                querenpsw:'',
                tishipswcuowu:'第二次确认密码不相符'
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

                if (this.shuju.name!=this.kong&&this.shuju.psw!=this.kong) {
                    this.$http.post('/api/register',{
                        code:this.shuju.yanzhengma,
                        email:this.shuju.email,
                        password:this.shuju.psw,
                        username:this.shuju.name
                    }).then(
                    (success)=>{
                        console.log(success);
                        this.$router.replace('/login');
                        // if (success.data.code==200) {
                        //     this.$router.replace({path:'/'})
                        // }
                        }
                    ).catch(()=>{

                    })
                }
            },

            shubiaoyinru(){
                this.$refs.zhuce.style.background="red";
            },
            shubiaoyichu(){
                this.$refs.zhuce.style.background="rgb(255,128,128)";
            },

            huoqujiaodian(){
                this.$refs.input1.placeholder=" ";
            },
            shiqujiaodian(){
                let aa=this.aa;
                if (this.$refs.input1.value=="") {
                    this.$refs.input1.placeholder=aa;
                }else if (!(this.shuju.name.length > 3)||!(this.shuju.name.length < 10)) {
                    console.log(19);
                    this.shuju.name=this.kong;
                    this.$refs.input1.placeholder=aa;
                }
            },

            huoqujiaodian2(){
                this.$refs.input2.placeholder=" ";
            },
            shiqujiaodian2(){
                console.log(this.shuju.email);
                let bb=this.bb;
                let zhengzhe=/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
                if (this.$refs.input2.value=="") {
                    this.$refs.input2.placeholder=bb;
                }else if (!zhengzhe.test(this.shuju.email)) {
                    console.log(3);
                    this.shuju.email=this.kong;
                    this.$refs.input2.placeholder='邮箱格式不正确';
                    
                }else{
                    this.$http.post('/api/emailVerify',{
                        email:this.shuju.email
                    }).then((success)=>{
                        console.log(success);
                        if (success.data.code==200) {
                            this.shuju.email=this.kong;
                            this.$refs.input2.placeholder='邮箱已被注册';
                        }
                    })
                }
                
            },
            fasongyanzheng(){
                this.$http.post('/api/sendEmail',{email:this.shuju.email}).then(
                    (success)=>{
                        console.log(success)
                        // if (success.data.code==200) {
                        //     this.$router.replace({path:'/'})
                        // }
                    }
                ).catch(()=>{

                })
            },

            huoqujiaodian3(){
                this.$refs.input3.placeholder="";
            },
            shiqujiaodian3(){
                let cc=this.cc;
                if (this.$refs.input3.value=="") {
                    this.$refs.input3.placeholder=cc;
                } 
            },

            huoqujiaodian4(){
                this.$refs.input4.placeholder="";
            },
            shiqujiaodian4(){
                console.log(this.shuju.psw);
                let pswlength=this.shuju.psw.length;
                let dd=this.dd;
                if (this.$refs.input4.value==" ") {
                    this.$refs.input4.placeholder=dd;
                }else if (!(pswlength > 5)||!(pswlength < 24)) {
                    this.shuju.psw=this.kong;
                    this.$refs.input4.placeholder=this.ddtishi;
                }
            },

            huoqujiaodian5(){
                this.$refs.input5.placeholder=" ";
            },
            shiqujiaodian5(){
                let ee=this.ee;
                if (this.$refs.input5.value=="") {
                    this.$refs.input5.placeholder=ee;
                }else if (!(this.querenpsw==this.shuju.psw)) {
                    console.log(0);
                    this.querenpsw=this.kong;
                    this.$refs.input5.placeholder=this.tishipswcuowu;
                }
            }
        }
    }
</script>

<style scoped>
.jiafang{
    width: 360px;
    height: 540px;
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