<template>
  <div>
    <div>项目ID:{{projectId}}</div>
  </div>
</template>
<script>
export default {
  name: 'ProjectDetailContent',
  props:{
   projectId: [Number,String]
  }
}
</script>