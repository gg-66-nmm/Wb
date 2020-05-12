<template>
<div>
    <el-container>
        <div class="cxy">
            <h3>长安城下最耀眼的码农</h3>
            <ul>
                <!-- <li v-for="item in list" :key="item">
                    <el-avatar class="left" :size="size" :src="src"></el-avatar>
                    <h5>{{item.usernmae}}</h5>
                    <p >最擅长：{{item.jineng}}</p>
                    <p >城市：{{item.city}}</p>
                </li> -->
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >最擅长：java</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >最擅长：java</p>
                    <p >城市：北京</p>
                </li>
                <li>
                    <el-avatar class="left" :size="size" src="../assets/logo.png"></el-avatar>
                    <h5>油封科技</h5>
                    <p >城市：北京</p>
                    <p >城市：北京</p>
                </li>
            </ul>
        </div>
    </el-container>
</div>

    
</template>

<script>
    export default {
        data(){
            return{
                /* list:[
                    {}
                ] */
                size:'large',
            }
        }
    }
</script>

<style scoped>
.cxy{
    width: 1000px;
    margin: auto;
}
.cxy h3{
    text-align: center;
    margin: 20px 0;
}
.cxy p{
    font-size: 12px;
    color: #777777;
    margin: 10px;
}
.left{
    float: left;
}
.cxy .el-avatar{
    width: 80px;
    height: 80px;
    margin: 0 20px;
}
.cxy ul{
    overflow: hidden;
}
.cxy ul li{
    padding: 20px;
    list-style: none;
    width: 440px;
    height: 80px;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 5px 0px #ccc;
    border-radius: 5px;
    float:left;
}
</style>