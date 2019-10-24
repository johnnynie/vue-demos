<template>
  <div>
    <Menu/>
    <h5>项目列表</h5>
    <div v-for="item in projects" v-bind:key="item.id">
        <router-link :to="{ name: 'project', params: { projectId: item.id }}">{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'Project',
  data(){
      return {
          projects:[{
              name:'项目一',
              id:1
          },{
              name:'项目二',
              id:2
          }]
      }
  },
  components:{
    Menu
  }
}
</script>