import Vue from "vue";
import Router from "vue-router";
import IView1 from "@/components/IVIEW1";
import Hi1 from "@/components/Hi1";
import Hi2 from "@/components/Hi2";
import Params from "@/components/params";
import Error from "@/components/Error";

Vue.use(Router);

export default new Router({
  // 去除# mode:'hash'
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Iview1",
      components: {
        default: IView1
      }
    },
    {
      path: "/aiden",
      name: "aiden",
      components: {
        default: IView1,
        left: Hi2,
        right: Hi1
      }
    },
    {
      // \d 表示匹配的是数字 +表示重复一次或者多次
      path: "/params/:newsId(\\d+)/:newsTitle",
      name: "params",
      components: {
        default: Params
      }
    },
    // 重定向
    {
      path: "/gohome/",
      redirect: "/"
    },
    //url不改变
    {
      path: "/goParams/:newsId(\\d+)/:newsTitle",
      redirect: "/params/:newsId(\\d+)/:newsTitle"
    },
    //url改变
    {
      path: "/hi1",
      component: Hi1,
      alias: "/aidenhi1"
    },
    // 404错误页提示
    {
      path: "*",
      component: Error
    }
  ]
});
