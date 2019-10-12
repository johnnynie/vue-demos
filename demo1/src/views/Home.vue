<template>
  <div class="home">
     <Menu/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
export default {
  name: 'home',
  components: {
   Menu
  }
}
</script>
