<template>
<div>
  <top></top>
    <el-container>
        <el-header>完 善 个 人 信 息 后 才 能 签 约</el-header>
        <el-main>
            <el-form :model="ruleForm" label-width="80px" ref="ruleForm" :rules="rules">
                <el-form-item label="昵称" prop="name">
                    <el-input placeholder="请输入昵称(3-10个字符)" size="small" v-model="ruleForm.name" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input placeholder="请输入邮箱" @focus="huoqujiaodian2()" @blur="shiqujiaodian2()" ref="input2" class="li3_1_1" size="small" v-model="ruleForm.email" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="状态"  prop="zhuangtai">
                    <el-input size="small" placeholder="您的工作状态" v-model="ruleForm.zhuangtai" class="input-with-select zhuangtai" style="width:200px">
                        <el-select v-model="ruleForm.zhuangtai" slot="prepend" placeholder="请选择">
                            <el-option label="自由职业" value="自由职业"></el-option>
                            <el-option label="兼职" value="兼职"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                 <el-form-item label="所在地" prop="dizhi1">
                    <el-input placeholder="你所在的省份" size="small" v-model="ruleForm.dizhi1" style="width:200px"></el-input>
                    <el-input placeholder="你所在的城市" size="small" v-model="ruleForm.dizhi2" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="日薪" prop="rixin">
                    <el-input placeholder="天/元(8小时)" size="small" v-model="ruleForm.rixin" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="工作日">
                     <el-time-picker
                        is-range
                        arrow-control
                        v-model="ruleForm.value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围"
                        size="small">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="周末">
                     <el-time-picker
                        is-range
                        arrow-control
                        v-model="ruleForm.value2"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围"
                        size="small">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="工作方式">
                    <el-radio-group v-model="ruleForm.fangshi">
                    <el-radio label="远程"></el-radio>
                    <el-radio label="驻场"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="职业方向"  prop="zhiyefangxiang">
                    <el-input size="small" placeholder="你擅长的领域" v-model="ruleForm.zhiyefangxiang" class="input-with-select zhuangtai" style="width:200px">
                        <el-select v-model="ruleForm.zhiyefangxiang" slot="prepend" placeholder="请选择">
                            <el-option label="前端工程师" value="前端工程师"></el-option>
                            <el-option label="后端工程师" value="后端工程师"></el-option>
                            <el-option label="移动工程师" value="移动工程师"></el-option>
                            <el-option label="DBA工程师" value="DBA工程师"></el-option>
                            <el-option label="项目经理" value="项目经理"></el-option>
                            <el-option label="产品经理" value="产品经理"></el-option>
                            <el-option label="运维" value="运维"></el-option>
                            <el-option label="测试" value="测试"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item label="具体擅长" prop="jutizhiye">
                    <el-checkbox-group v-model="ruleForm.jutizhiye">
                        <el-checkbox-button label="java" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="php" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="c++" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="python" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="android" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="ios" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="前端" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="UI设计" name="jutizhiye"></el-checkbox-button>
                        <el-checkbox-button label="其他" name="jutizhiye"></el-checkbox-button>
                    </el-checkbox-group>
                </el-form-item>
                <div class="gongzuojingli" ref="jinli">
                <el-form-item label="工作经历">
                    <div class="block">
                        <el-date-picker
                        v-model="ruleForm.xuelishijian"
                        type="monthrange"
                        unlink-panels
                        size="small"
                        range-separator="至"
                        start-placeholder="开始月份"
                        end-placeholder="结束月份">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item prop="gongzuojingli">
                    <el-input placeholder="公司名称" name="gongzuojingli" size="small" v-model="ruleForm.gongzuojingli" style="width:200px"></el-input>
                    <el-input placeholder="所属职位" size="small" v-model="ruleForm.gongsizhiwei" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item>
                    个人影像
                    <el-upload
                    action=""
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 1, maxRows: 4}"
                    placeholder="简单介绍你的工作"
                    v-model="ruleForm.jianjie">
                    </el-input>
                </el-form-item>
                </div>
                <el-button type="primary" @click="tianjia()" style="colro:#000;
                    background-color:rgb(255,128,128);
                    border:0px solid red;margin:10px auto;
                    width:540px;"
                    >我经验丰富！</el-button>
                <div ref="divref"></div>

                <div class="gongzuojingli">
                <el-form-item label="教育经历">
                    <div class="block">
                        <el-date-picker
                        v-model="ruleForm.jiaoyushijian"
                        type="monthrange"
                        unlink-panels
                        size="small"
                        range-separator="至"
                        start-placeholder="开始月份"
                        end-placeholder="结束月份">
                        </el-date-picker>
                    </div>
                    <el-input size="small" v-model="ruleForm.yuanxiao" placeholder="院校" style="width:200px"></el-input>
                    <el-input size="small" v-model="ruleForm.zhuanye" placeholder="专业" style="width:200px"></el-input>
                    <el-select v-model="ruleForm.xuewei" size="small" style="width:200px" placeholder="你的学历">
                        <el-option
                        v-for="item in ruleForm.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </div>
                <!-- <el-form-item> -->
                    <el-button type="danger" 
                    style="colro:#000;
                    background-color:rgb(255,128,128);
                    border:0px solid red;margin:10px auto;
                    width:540px;" @click="tijiao()">下 一 步</el-button>
                <!-- </el-form-item> -->
                
            </el-form>
        </el-main>
    </el-container>
    </div>
</template>

<script>
import top from '@/components/head'
    export default {
        components:{
            top
        },
    data() {
      return {
        ruleForm: {
          name: '',//姓名
          email:'',
          zhuangtai:'',//工作状态
          dizhi1:'',//所在省份
          dizhi2:'',//所在城市
          rixin:'',//期望日薪
          value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],//周内工作时间段
          value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],//周末工作时间段
          fangshi:'',//工作方式
          zhiyefangxiang:'',//职业方向
          jutizhiye:[],//具体职业
          xuelishijian:'',//工作经历时间
          gongzuojingli:'',//工作经历
          gongsizhiwei:'',//所属职位
          jianjie:'',//简介工作内容
          jiaoyushijian:'',//接受教育的时间
          yuanxiao:'',//毕业学校
          zhuanye:'',//专业方向
          options: [{
            value: '选项1',
            label: '大专'
        }, {
            value: '选项2',
            label: '本科'
        }, {
            value: '选项3',
            label: '研究生'
        }],
        xuewei: ''
        },
        dialogImageUrl: '',//头像
        dialogVisible: false,
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          zhuangtai: [
            { required: true, message: '状态不能为空', trigger: 'blur' }
          ],
          dizhi1: [
            { required: true, message: '省份不能为空', trigger: 'blur' }
          ],
          rixin: [
            { required: true, message: '日薪不能为空', trigger: 'blur' }
          ],
          zhiyefangxiang: [
            { required: true, message: '必填项', trigger: 'blur' }
          ],
          jutizhiye: [
            {type: 'array', required: true, message: '可多选', trigger: 'change'}
          ],
          gongzuojingli: [
            {required: true, message: '必填', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      huoqujiaodian2(){
                this.$refs.input2.placeholder=" ";
            },
            shiqujiaodian2(){
                console.log(this.ruleForm.email);
                // let bb=this.bb;
                let zhengzhe=/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
                if (this.$refs.input2.value=="") {
                    this.$refs.input2.placeholder='请输入邮箱';
                }else if (!zhengzhe.test(this.ruleForm.email)) {
                    console.log(3);
                    this.ruleForm.email='';
                    this.$refs.input2.placeholder='邮箱格式不正确';
                    
                }
            },
        //上传图片相关
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      tijiao(){
        this.$http.post('/api/user/user',{
          userEmail:this.ruleForm.email,
          userName:this.ruleForm.name,
          
        }).then(res=>{

        })
      }
      // tianjia(){
      //   // var x=this.$refs.jinli;
      //   // var y=this.$refs.divref;
      //   (this.$refs.divref).add(this.$refs.jinli);
      //     console.log(1);
      // }
    }
  }
</script>

<style scoped>
.li3_1{
    width: 320px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer
    /* border: 1px solid #ccc; */
}
.gongzuojingli{
    border: 1px solid #ccc;
    border-radius: 5px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #8c939d;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.zhuangtai{
    margin-top: 5px;
}
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
  }
  .el-main p{
      width: 600px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin-left: -15px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  /* .el-container .el-main table{
      width: 550px;
      margin-top: 10px;
  }
  .el-container .el-main table tr{
      height: 50px;
      margin-top: 10px;
  }
  .el-container .el-main table tr td{
      border: 1px red solid;
  }
  .el-container .el-main table tr .tb1{
      color: #333;
      
  } */
</style>