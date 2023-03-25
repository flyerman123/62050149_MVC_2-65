import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

// define app route
const routes = [{
        path: "/",
        redirect: "/",
    },
   
]


const router = new VueRouter({
    // using 'stack'
    mode: 'history',
    routes
});

export default router;