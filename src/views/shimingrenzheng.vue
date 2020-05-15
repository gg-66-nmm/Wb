<template>
    <div>
        <top></top>
        <el-container>
            <el-header>实名认证</el-header>
            <el-main>
                <el-form :model="ruleForm" label-width="80px" ref="ruleForm" :rules="rules">
                    <el-form-item prop="name" label="姓名">
                        <el-input placeholder="姓名" size="small" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="zjh" label="证件号">
                        <el-input placeholder="证件号" size="small" v-model="ruleForm.zjh"></el-input>
                    </el-form-item>
                    <div style="width:200px;heidht:100px;margin-left:80px;">
                        <el-upload
                            class="upload-demo"
                            action
                            multiple
                            :limit="3"
                            :http-request="filez"
                            >
                                <el-button style="height:30px;width:480px;
                                border:0px solid red;
                                height:40px;font-size:16px; 
                                background-color:rgb(255,128,128);
                                color:#fff;" 
                                type="primary">上传身份证正面</el-button>
                                
                        </el-upload>
                        <el-upload
                            class="upload-demo"
                            action
                            multiple
                            :limit="3"
                            :http-request="filef"
                            >
                                <el-button style="margin-top:20px;height:30px;width:480px;
                                border:0px solid red;
                                height:40px;font-size:16px; 
                                background-color:rgb(255,128,128);
                                color:#fff;" 
                                type="primary">上传身份证反面</el-button>
                                
                        </el-upload>
                    </div>
                    <el-button type="danger" style="colro:#000;
                    background-color:rgb(255,128,128);
                    border:0px solid red;margin-left:80px;
                    margin-top:20px;
                    width:200px;" @click="renzheng()">认 证</el-button>
                </el-form>
            </el-main>
        </el-container>
        <foot></foot>
    </div>
</template>

<script>
import top from '@/components/head'
import foot from '@/components/weiba'
    export default {
        components:{
            top,foot
        },
        data(){
            return{
                ruleForm:{
                    naem:'',
                    zjh:'',
                },
                rules:{
                    name: [
                        { required: true, message: '请如实填写姓名', trigger: 'blur' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' },
                    ],
                    zjh: [
                        { required: true, message: '请如实填写证件号', trigger: 'blur' },
                        { min: 18, max: 18, message: '长度为18', trigger: 'blur' },
                    ]
                } ,
                filelistz:{},
                filelistf:{},
            };
        },
        methods:{
            filez(wj){
                console.log(wj);
                this.filelistz=wj.file;
            },
            filef(wj){
                console.log(wj);
                this.filelistf=wj.file;
            },
            renzheng(){
                if(this.ruleForm.name!=''&&this.ruleForm.zjh!=''){
                    let realNameVo =new FormData();
                        realNameVo.append("id_card_front",this.filelistz);
                        realNameVo.append("id_card_opposite",this.filelistf);
                        realNameVo.append("id_number",this.ruleForm.zjh);
                        realNameVo.append("real_name",this.ruleForm.name);
                    this.$http.post('/zk/real/name',realNameVo).then(
                        (res)=>{
                            console.log(res);
                        }
                    )
                }
            }
        }
    }
</script>

<style scoped>
.el-header, .el-footer {
    background-color: white;
    color: rgb(255, 128, 128);
    text-align: center;
    line-height: 60px;
    width: 600px;
    margin: auto;
    /* box-shadow: 0px 10px 5px #888888; */
    font-size: 20px;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    width: 600px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: auto;
    /* height: 560px; */
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    /* height: 560px; */
  }
</style>