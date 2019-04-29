<template>
  <div class="Upyun">
    <!-- 我要上云 -->
    <div class="wysy_wrap">
      <p class="wysy_title">深入了解企业需求，一站式为企业提供需求解决方案</p>
      <div class="wysy_btn">我要上云</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upyun",
  props: {},
  data() {
    return {
     
    };
  },
  methods: {
   
  }
};
</script>


<style lang="scss">
// 我要上云
.wysy_wrap {
  height: 180px;
  width: 100%;
  min-width: 1200px;
  background: url("../assets/images/wysy.png") no-repeat;
  background-size: 100% 100%;

  padding-top: 0.4rem;
  box-sizing: border-box;
}
.wysy_title {
  font-size: 26px;
  color: #fff;
  margin-bottom: 25px;
}
.wysy_btn {
  // font-size: 0.14rem;
  color: #4e9beb;
  height: 40px;
  width: 120px;
  line-height: 40px;
  margin: 0 auto;
  background: #fff;
  cursor: pointer;
}
</style>
