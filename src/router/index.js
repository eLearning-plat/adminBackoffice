import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import { authGuard } from "@auth0/auth0-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: authGuard,
    },
    {
      path: "/users",
      component: () => import("../pages/Users.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/courses",
      component: () => import("../pages/courses/Courses.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/courses/course-details/:id",
      component: () =>
        import("../pages/courses/course-details/CourseDetails.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/blog",
      component: () => import("../pages/blog/Blog.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/blog/create-blog",
      component: () => import("../pages/blog/create-blog/CreateBlog.vue"),
      beforeEnter: authGuard,
    },
  ],
});

export default router;
