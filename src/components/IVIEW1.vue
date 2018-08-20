<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "iview test",
      buttonSize: "large",
      loading: false,
      buttonType: "",
      value1: 1,
      value2: 1,
      theme1: "light"
    };
  },
  methods: {
    toloading: function() {
      this.loading = true;
      this.buttonType = "primary";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
