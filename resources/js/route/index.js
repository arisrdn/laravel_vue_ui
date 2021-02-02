
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('../pages/Home.vue').default
const About = require('../pages/About.vue').default;
// const Notfound = require('./pages/404.vue').default;
import Notfound from '../pages/404.vue'
import User from '../pages/User.vue'


const routes = [
    {
        path: '/home',
        component:Home
    },
    {
        path: '/about',
        component:About
    },
     {
        path: '/user/:nm?',
         component: User,
        props:true
    },
    {
        path: '/*',
        component: Notfound
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
