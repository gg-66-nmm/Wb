<template>
<div>
  <top ></top>
  <div class="top-banner">
      <div class="banner-list">
          <ul>
              <li><img src="../assets/4gai.jpg" alt=""></li>
          </ul>
      </div>
  </div>
  <xmxq></xmxq>
  <cxy></cxy>
  <weiba></weiba>
</div>
   
</template>

<script>
import top from '@/components/head'
import cxy from '@/components/excellent'  
import xmxq from '@/components/xiangmu'
import weiba from '@/components/weiba'
export default {
  components:{
    top,
    cxy,
    xmxq,
    weiba,
  },
  
  data () {
    return {
      email:'',
    }
  },
  methods:{
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
.top-banner{
    position: relative;
    width: 100%;
    min-height: 37vw;
}
.banner-list{
    box-sizing: border-box;
}
.banner-list ul li{
    list-style: none;
}
.banner-list ul li img{
    width: 100%;
    vertical-align: middle;
}
</style>