import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"), // dynamic import 動態載入，可以減少初始頁面載入時需要下載的資源量(適合純靜態頁面)
    },
    {
      path: "/template",
      name: "template",
      component: () => import("../views/TemplateView.vue"),
    },
    {
      path: "/execution",
      name: "execution",
      component: () => import("../views/ExecutionView.vue"),
    },
    {
      path: "/event-handling",
      name: "event-handling",
      component: () => import("../views/EventView.vue"),
    },
    {
      path: "/reactive",
      name: "reactive",
      component: () => import("../views/ReactiveView.vue"),
    },
    {
      path: "/reactive2",
      name: "reactive2",
      component: () => import("../views/ReactiveView2.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/course",
      name: "course",
      component: () => import("../views/CourseView.vue"),
    },
    {
      path: "/:domain(.*)*",
      name: "NotFound",
      component: import("../views/404.vue"),
    },
  ],
});

export default router;
