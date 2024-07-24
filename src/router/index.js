import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      component: () => import("../pages/Users.vue"),
    },
    {
      path: "/courses",
      component: () => import("../pages/courses/Courses.vue"),
      
    },
    {
      path: "/courses/course-details/:id",
      component: () =>
        import("../pages/courses/course-details/CourseDetails.vue"),
    },
  ],
});

export default router;
