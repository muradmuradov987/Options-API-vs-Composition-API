import { createRouter, createWebHashHistory } from "vue-router";
import OptionAPI from "../views/OptionAPI.vue";
import CompositionAPI from "../views/CompositionAPI.vue";

const routes = [
  {
    path: "/",
    name: "option",
    component: OptionAPI,
  },
  {
    path: "/compatition",
    name: "compatition",
    component: CompositionAPI,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
