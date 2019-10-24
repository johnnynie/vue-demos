<template>
  <div>
    <project-left class="left"/>
    <div class="right">
      <router-view/>
      <router-view name="detail"/>
    </div>
  </div>
</template>
<script>
import ProjectLeft from '@/components/ProjectLeft.vue'
export default {
  name: 'ProjectList',
  data(){
     return {

     }
  },
  components:{
    ProjectLeft
  }
}
</script>
<style lang="less" scoped>
.left{
  float:left;
  width:40%;
  text-align: right;
}
.right{
  float:right;
  width:50%;
  text-align:left;
}
</style>