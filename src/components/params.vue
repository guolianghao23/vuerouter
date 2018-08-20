<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newId:{{$route.params.newsId}}</p>
    <p>website name:{{$route.params.newsTitle}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello params"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    console.log(from);
    console.log("准备进入params路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开params路由模板");
    next();
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log("数据更新");
  }
};
</script>
