<template>
  <div>
     <Menu/>
     <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'Layout',
  components: {
      Menu
  }
}
</script>
