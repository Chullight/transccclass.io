<script>
export default {
  name: 'Navbar',

  data() {
    return {
      navLinks: [
        {to:'/home',text:'主页'},
        {to: '/online', text: '线上课程'},
        {to: '/offline', text: '线下课程'},


        // Add more links as needed
      ]
    };
  },
  methods: {
    handleRouterLinkClick(to) {
      // 处理导航链接的点击事件，可以添加额外的逻辑
      console.log('Navigating to:', to);
    }
  }
}

</script>

<template>
  <div class="mainbody">
    <div class="nav-links">
      <router-link v-for="link in navLinks" :to="link.to" :key="link.to" class="nav-link" @click="handleRouterLinkClick(link.to)">
        {{ link.text }}
      </router-link>
    </div>
  </div>

</template>

<style scoped>
.nav-link {
  position: relative;
  padding-top:0px;
  font: 500 20px '优设标题黑';
  text-decoration:none;
  border: none;
  outline: none;
  color: #242424;
  display: flex;
  flex-direction:row;
  height: 30px;
  width:100px;
  margin-top:5px;
  margin-left:20px;
  margin-right:10px;
  text-align:center;
  align-items:center;
  justify-content:center;
}
.nav-link:active{
  color:#0EFA60;
  border-radius:10px;
}
.nav-link:hover{
  background-color:#6DF5A6;
  color:#255E12;
  border-radius:10px;
  font-weight:600;
}
.mainbody{
  display:flex;
  flex-direction:row;
}
.nav-links{
  display:flex;
  flex-direction:row;
  margin-top:5px;
  margin-left:10%;
}

</style>