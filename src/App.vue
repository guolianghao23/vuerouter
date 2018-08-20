<template>
  <div id="app">
    <div>
      <button @click="goBack">后退</button>
      <button @click="moveOn">前进</button>
      <button @click="gohome">返回首页</button>
    </div>
    <router-link to="/">首页</router-link>
    <router-link to="/aiden">aiden</router-link>
    <router-link to="/params/198/aiden website">params</router-link>
    <router-link to="/goHome">gohome</router-link>
    <router-link to="/goParams/918/aiden website2">go params</router-link>
    <router-link to="/hi1">Hi1</router-link>
    <router-link to="/aidenhi1">aidenhi1</router-link>
    <!-- 默认mode out-in -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="left" style="float:left;width:50%;height:300px;background-color:#000" />
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="right" style="float:left;width:50%;height:300px;background-color:#eee" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    moveOn() {
      this.$router.go(1);
    },
    gohome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leava-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
