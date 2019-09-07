import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue")
    },
    {
      path: "/chat",
      name: "chat",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Chat.vue")
    },
    {
      path: "/schedule",
      name: "Jadwal",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Schedule.vue")
    },
    {
      path: "/history",
      name: "history",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/History.vue")
    },
    {
      path: "/item/:id",
      name: "item",
      component: () =>
        import(/* webpackChunkName: "item" */ "./views/ItemDetail.vue")
    },
    {
      path: "/search/:query",
      name: "search",
      component: () =>
        import(/* webpackChunkName: "search" */ "./views/Search.vue")
    },
    {
      path: "/order/:id",
      name: "order",
      component: () =>
        import(/* webpackChunkName: "order" */ "./views/OrderDetail.vue")
    }
  ]
});
