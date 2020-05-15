<template>
    <div>
      <top></top>
        <el-container>
            <el-aside width="200px">
                <div style="margin-top:20px">
                    <el-avatar class="left" src="../assets/logo.png"></el-avatar>
                    <p style="margin-top:10px;font-size:18px;color:rgb(255,128,128)">{{message.real_name}}</p>
                    <p style="margin-top:10px;font-size:14px;color:#999;"><i class="el-icon-delete-location"></i>{{message.prog_area}}</p>
                    <p style="margin-top:18px;font-size:14px;color:#999;"><i class="el-icon-medal"></i>{{message.prog_job_status}}</p>
                    <p style="margin-top:17px;font-size:18px;color:gold"><i class="el-icon-food"></i>{{message.prog_wage_day}}元/天</p>
                    <p style="margin-top:17px;font-size:15px;margin-left:10px">工作状态:{{message.prog_working}}</p>
                    <p style="margin-top:18px;font-size:15px;margin-left:10px"><span style="color:rgb(255,128,128)">{{message.prog_workday}}:</span>{{message.prog_hours}}</p>
                    <p style="margin-top:18px;font-size:15px;margin-left:10px">技能:<span style="color:rgb(255,128,128)">{{message.prog_job_skill}}</span></p>
                    <el-button type="danger" @click="fasong()" style="margin-bottom:20px;margin-top:20px;color:#fff;background-color:rgb(255,128,128)">和他聊聊</el-button>
                </div>
            </el-aside>
            <el-main>
                <div style="height:25px;text-indent:2em;line-height:25px;font-size:16px;width:100%;border:1px solid #ccc;border-radius:3px;">个人介绍</div>
                <div style="margin-top:10px;height:180px;text-indent:2em;line-height:25px;font-size:14px;width:100%;border:1px solid #ccc;border-radius:3px;">{{gerenjishao}}</div>

                <div style="margin-top:10px;height:25px;text-indent:2em;line-height:25px;font-size:16px;width:100%;border:1px solid #ccc;border-radius:3px;">工作经历</div>
                <div style="margin-top:10px;height:180px;text-indent:2em;line-height:25px;font-size:14px;width:100%;border:1px solid #ccc;border-radius:3px;">
                    <div style="border:1px solid #ccc;width:150px;height:25px;border-radius:3px;font-size:14px;margin-top:10px;margin-left:10px;">{{gongzuoshijian}}至今</div>
                    {{message.prog_intro}}</div>
            </el-main>
        </el-container>
        <foot></foot>
    </div>
</template>

<script>
import top from '../components/head'
import foot from '../components/weiba'
    export default {
      components:{
        top,
        foot
      },
        data(){
            return{
                name:"冉军良",
                dizhi:"广州",
                id:"高级工程师",
                rx:[100],
                zhuangtai:"",
                zhounei:"12233445",
                zhoumo:"123453245",
                gerenjishao:"撒旦反对广泛和国际化撒旦返回结果返回的格式发阿飞的规范化感觉的是法国好几个非递归算法的是单号发给客户范德萨时返回的数据城市丢分一个大师兄大幅改变VS卡成为u复古味官方地位u关于热负荷嗲额个废物并且而非怪物把剩下的钱沃尔u我发给",
                gongzuoshijian:199856,
                gongzuoneirong:"撒旦反对广泛和国际化撒旦返回结果返回的格式发阿飞的规范化感觉的是法国好几个非递归算法的是单号发给客户范德萨时返回的数据城市丢分一个大师兄大幅改变VS卡成为u复古味官方地位u关于热负荷嗲额个废物并且而非怪物把剩下的钱沃尔u我发给",
                xueli:"本科",
                Aemail:'',
                message:[],
           }
        },
        /* methods:{
          fasong(){
            this.email=this.$route.query.info;
            console.log(this.email);
            this.$http.get('/zk/communicate',{parmas:{user_email:this.email}}).then(res=>{
              console.log(res);
            })
          }
        }, */
        created(){
          this.Aemail=this.$route.query.into;
           console.log(this.Aemail);
          this.$axios.post("zk/programmer/detailed/message",{user_email:this.Aemail})
          .then(res=>{
            console.log(res)
            this.message=res.data.data.programmer
          })
        }
    }
</script>

<style scoped>
.left{
    width: 70px;
    height: 70px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    box-shadow: 0 5px 5px 0px #ccc;
    text-align: center;
    padding:0px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    box-shadow: 0 5px 5px 0px #ccc;
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