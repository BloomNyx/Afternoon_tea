import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
// 사용 중인 라우터 페이지들 추가
// import About from "@/views/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  // { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory("/Raviebelle/"), // 👈 중요!
  routes,
});

export default router;