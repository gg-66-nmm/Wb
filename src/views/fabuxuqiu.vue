<template>
    <div>
        <el-container>
            <el-header style="font-size:20px;">发布需求</el-header>
                <el-main>
                    <el-form :model="ruleForm" label-width="80px" ref="ruleForm" :rules="rules">
                        <el-form-item label="项目名称"  prop="name">
                            <el-input placeholder="输入项目名称，1-20个字符以内" v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="项目类型" prop="leiixng">
                            <el-checkbox-group v-model="leixing">
                                <el-checkbox label="ios"></el-checkbox>
                                <el-checkbox label="Android"></el-checkbox>
                                <el-checkbox label="PC网站"></el-checkbox>
                            </el-checkbox-group>
                            <!-- <el-select v-model="leixing" style="width:480px" placeholder="请选择类型">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select> -->
                        </el-form-item>
                        <el-form-item label="项目预算">
                            <el-input placeholder="项目预算资金" v-model="ruleForm.zijin"></el-input>
                        </el-form-item>
                        <el-form-item label="项目介绍">
                            <el-input
                            type="textarea"
                            :autosize="{ minRows: 1.4, maxRows: 8}"
                            placeholder="请输入内容"
                            v-model="ruleForm.jieshao">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-upload
                            class="upload-demo"
                            action
                            multiple
                            :limit="3"
                            :http-request="fileaa"
                            >
                                <el-button size="small" style="width:480px;
                                border:0px solid red;
                                height:40px;font-size:16px; 
                                background-color:rgb(255,128,128);
                                color:#fff;" 
                                type="primary">上传文件</el-button>
                                
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox ref="fabu" checked v-model="ruleForm.radio">我已阅读与同意<span style="color:rgb(255,128,128);">《长安城下最耀眼的程序员项目发布协议》</span></el-checkbox>
                            <el-button type="danger"  style="width:480px;" @click="fabu()">立即发布</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ruleForm:{
                    name:'',
                    zijin:'',
                    jieshao:'',
                    radio:'',
                    
                },
                filelist:{},
                 options: [{
                    value: 'Android',
                    label: 'Android'
                }, {
                    value: 'ios',
                    label: 'ios'
                }, {
                    value: 'pc网站',
                    label: 'pc网站'
                }, {
                    value: '微信开发',
                    label: '微信开发'
                }, {
                    value: 'Html5',
                    label: 'Html5'
                }, {
                    value: '其他',
                    label: '其他'
                }],
                leixing: [],
                fileList: {},
                rules:{
                    name:[
                        { required: true, message: '项目名称必填', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                    ],
                    leiixng:[
                        { required: true, message: '类型不能为空', trigger: 'blur' },
                    ]
                },
            }
        },
        methods: {
            fileaa(wj){
                console.log(wj);
                this.filelist=wj.file;
            },
            fabu(){
                // console.log(this.$refs.fabu.checked);
                // console.log(aa)
                // if (this.$refs.fabu.checked) {
                    // this.$refs[aa].validata(valid=>{
                        let formdata =new FormData();
                        formdata.append("demandFile",this.filelist);
                        formdata.append("demandBudget",this.ruleForm.zijin);
                        formdata.append("demandDetail",this.ruleForm.jieshao);
                        formdata.append("demandName",this.ruleForm.name);
                        formdata.append("demandType",this.leixing);
                    // })
                    this.$http.post('/api/demand/demand',formdata).then(res=>{
                        console.log(res);
                    })
                // }
            },
        }
    }
</script>

<style scoped>

.el-header, .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    width: 600px;
    text-align: center;
    line-height: 160px;
    margin: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>