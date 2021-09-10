import About from "@/components/About.vue";
import Vue from "vue";
import Router from "vue-router";
import Blog from "@/components/Blog.vue";
import Home from "@/components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
