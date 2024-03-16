<script>
import {defineComponent} from "vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
export default defineComponent({
  name:"App",
  components:{
    DefaultLayout
  }
})
</script>
<template>
  <div id="app">
    <DefaultLayout/>
    <router-view></router-view>

  </div>

</template>

<style scoped>

</style>
