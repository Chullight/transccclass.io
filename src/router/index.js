import{ createRouter,createWebHistory} from "vue-router";
import pageOffline from "@/components/pageOffline.vue";
import pageOnline from "@/components/pageOnline.vue";
import Home from "@/components/Home.vue";
const routes=[
    {path:'/',component:Home},
    {path:'/online',component:pageOnline},
    {path:'/offline',component: pageOffline},
    {path:'/home',component: Home},

]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;