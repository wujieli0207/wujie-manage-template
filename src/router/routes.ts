import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "basicTableDemo",
    component: () => import("/@/views/demo/table/baseTableDemo/index.vue"),
    meta: {
      title: "基本表格演示demo",
    },
  },
];

export default routes;
