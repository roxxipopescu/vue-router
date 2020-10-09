import Vue from "vue";
import VueRouter from "vue-router";
import routeList from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routeList,
});

const handleProtectRoutes = (to, _, next) => {
  const isLoggedIn = true; //here you check for store.getters['auth/isLoggedIn']
  if (isLoggedIn) {
    next();
  } else {
    //next({ name: "Login" });
  }
};

router.beforeEach(handleProtectRoutes);

export default router;
