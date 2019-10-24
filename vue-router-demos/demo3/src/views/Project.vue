<template>
  <div>
    <h5>项目详情标题</h5>
    <div>项目ID:{{projectId}}</div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    projectId:[Number,String]
  }
}
</script>