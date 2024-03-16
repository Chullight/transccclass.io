<script>
import Navbar from "@/components/Navbar.vue";
export default{
  name:'Header',
  components: {Navbar},
}

</script>


<template>

    <div class="Navbar">
      <Navbar/>
    </div>


</template>

<style scoped>
.Navbar{
  margin-left:0;
  margin-bottom:0;
  margin-top:0;
  position:relative;
  transform:translateX(-50px);
}
hr{
  height:1px;
  margin:0;
}

</style>