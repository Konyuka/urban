import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import firebase from '@/firebase'


const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
      children: [],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboard.vue"),
      // meta: { requiresAuth: true },
      children: [
        {
          path: "/dashboard/requests",
          name: "requests",
          meta: { title: "requests" },
          component: () => import("@/views/admin/Requests.vue"),
        },
        {
          path: "/dashboard/profile",
          name: "profile",
          meta: { title: "profile" },
          component: () => import("@/views/admin/Profile.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      children: [],
    },
    {
      path: "/register/buyer",
      name: "registerbuyer",
      component: () => import("@/views/RegisterBuyer.vue"),
      children: [],
    },
    {
      path: "/register/seller",
      name: "registerseller",
      component: () => import("@/views/RegisterSeller.vue"),
      children: [],
    },
  ],
});

router.beforeEach((to, from, next) => {

  document.title = to.meta.title
    next()

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
});

export default router;