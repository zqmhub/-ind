<template>
  <div class="header">
    <div class="head_top">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple header_title">厦门市工业互联网公共服务平台</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light header_top_r">
            <div class="header_r_box">
              <el-input
                class="search"
                placeholder="搜索"
                suffix-icon="el-icon-search"
                v-model="input1"
              ></el-input>
              <div class="r_btn login">登录</div>
              <div class="r_btn register">注册</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="head_bottom">
      <ul class="header_nav">
        <li class="nav_active">
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/supplyMarket">供应市场</router-link>
        </li>
        <li>
          <router-link to="/xuqiuMarket">需求市场</router-link>
        </li>
        <li>
          <router-link to="/zhengceDaolan">政策导览</router-link>
        </li>
        <li>
          <router-link to="/newsCenter">新闻中心</router-link>
        </li>
        <li>
          <router-link to="/upyunZhinan">上云指南</router-link>
        </li>
        <li>
          <router-link to="/peixun">培训</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      activeName: "first",
      input1: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  min-width: 800px;
}
.header .el-input__inner {
  background: transparent !important;
  border: 0 !important;
}
.el-icon-search {
  cursor: pointer;
}
.header .el-input {
  background: -webkit-linear-gradient(
    to right,
    #24364e,
    #222632
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    to right,
    #24364e,
    #222632
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    to right,
    #24364e,
    #222632
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #24364e, #222632); /* 标准的语法 */
}
.header_nav {
  color: #fff;
  float: left;
}
.header_nav .router-link-exact-active {
  color: #4e9beb !important;
}
.header_nav li {
  color: #fff;
  float: left;
  height: 50px;
  line-height: 50px;
  margin-right: 50px;
  cursor: pointer;
  font-size: 14px;
}
.nav_active {
  color: #4e9beb !important;
}
.header_nav li:hover a {
  color: #4e9beb;

}
.header_title {
  text-align: left;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  color: #fff;
}
.head_top {
  height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid #3a414e;
}
.head_bottom {
  padding-left: 30px;
}
.search {
  width: 285px;
}
.header_top_r {
  float: right;
  height: 50px;
  line-height: 50px;
  text-align: right;
}
.header_r_box {
  display: flex;
}
.r_btn {
  width: 95px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
.login {
  color: #4e9beb;
}
.register {
  background: #4e9beb;
  color: #fff;
}
</style>
