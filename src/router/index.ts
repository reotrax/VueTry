import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Btn1 from "../views/Btn1.vue";
import Btn2 from "../views/Btn2.vue";
import HighCharts from "@/components/HighCharts.vue"; // @ is an alias to /src
import ValueEditor from "@/components/ValueEditor.vue"; // @ is an alias to /src
import FrontTest from "@/components/FrontTest.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "highcharts",
    children: [
      {
        path: "/btn1",
        name: "btn1",
        component: Btn1,
      },
      {
        path: "/btn2",
        name: "btn2",
        component: Btn2,
      },
      {
        path: "/highcharts",
        name: "highcharts",
        component: HighCharts,
      },
      {
        path: "/value_editor",
        name: "value_editor",
        component: ValueEditor,
      },
      {
        path: "/front_test",
        name: "front_test",
        component: FrontTest,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
