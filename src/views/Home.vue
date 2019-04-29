<template>
  <div class="index">
    <Header :class="{'headerBg':headerBg}"></Header>
    <div class="banner_wrap">
      <el-carousel class="banner" arrow="always" height="640px">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="banner_img_box">
            <img class="banner_img" src="../assets/images/banner1.png" alt>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="banner_bottom">
        <div class="banner_bottom_center">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple banner_bottom_l">
                <div class="show_disc">
                  <p>企业生产效率低？</p>
                  <p>信息化基础设置、管理、业务等</p>
                  <p>互联网与云计算应用一站式搞定</p>
                </div>
                <div class="a_btn goyun_btn">
                  我要上云
                  <img src="../assets/images/jiantou.png" alt>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light banner_bottom_r">
                <div class="register_disc">
                  <p>深入了解企业需求，为企业提供相关需求方案</p>
                  <p>成为公共服务平台云服务提供商</p>
                </div>
                <div class="a_btn register_btn">
                  申请入驻
                  <img src="../assets/images/jiantou.png" alt>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 星级排行 -->
      <div class="star_top">
        <div class="star_top_title">云服务供应商星级排行榜</div>
        <div class="top_list">
          <div class="star_list_item">
            <div class="top_num">1.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
          <div class="star_list_item">
            <div class="top_num">2.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
          <div class="star_list_item">
            <div class="top_num">3.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
          <div class="star_list_item">
            <div class="top_num">4.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
          <div class="star_list_item">
            <div class="top_num">5.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
          <div class="star_list_item">
            <div class="top_num">6.</div>
            <div class="icon_box">
              <img src="../assets/images/huawei.png" alt>
            </div>
            <div class="show_name">华为</div>

            <div class="scode_show">
              <el-rate v-model="value" disabled></el-rate>
            </div>
          </div>
        </div>
        <div class="top_disc">
          星级评定标准
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="notice_wrap">
      <el-row>
        <el-col :span="12">
          <div class="grid-content notice_content">
            <img class="laba" src="../assets/images/laba.png" alt>
            <span class="notice_title">最新上云企业：</span>
            <span class="notice_content_show v_dash_line">厦门市物联网产业研究院</span>
            <span class="notice_content_show second_show">厦门市物联网产业研究院</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content notice_content">
            <div class="notice_r_wrap">
              <span class="leiming margin_r_30">
                云服务商
                <span class="show_num">286</span>
                家
              </span>
              <span class="leiming">
                上云企业
                <span class="show_num">2586</span>
                家
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="main_num_bar">
      <div class="margin_box">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div class="main_bar_img">
                <img src="../assets/images/fwlb.png" alt>
              </div>
              <p class="main_bar_num_box">
                <span class="main_bar_num">266</span>类
              </p>
              <p class="main_bar_title">服务类别</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="main_bar_img">
                <img src="../assets/images/fwnr.png" alt>
              </div>
              <p class="main_bar_num_box">
                <span class="main_bar_num">2126</span>项
              </p>
              <p class="main_bar_title">服务内容</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="main_bar_img">
                <img src="../assets/images/gyrj.png" alt>
              </div>
              <p class="main_bar_num_box">
                <span class="main_bar_num">2626</span>个
              </p>
              <p class="main_bar_title">工业软件</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="main_bar_img">
                <img src="../assets/images/rypx.png" alt>
              </div>
              <p class="main_bar_num_box">
                <span class="main_bar_num">2366</span>人
              </p>
              <p class="main_bar_title">人员培训</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 平台动态 -->
    <div class="ptdt_wrap">
      <p class="ptdt_title">平台动态</p>
      <p class="ptdt_subtitle">为您提供行业动态、活动公告、产品发布，以及工业互联网产业前沿资讯</p>
      <div class="ptdt_list">
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="grid-content">
              <div class="list_top new_notice_top">
                <div class="list_top_title">
                  <p>最新</p>
                  <p>公告</p>
                </div>
              </div>
              <div class="list_wrap">
                <div class="list_item ellipsis1">
                  <span class="item_l">【01-01】</span>
                  <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                </div>
                <div class="list_item ellipsis1">
                  <span class="item_l">【01-01】</span>
                  <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                </div>
                <div class="list_item ellipsis1">
                  <span class="item_l">【01-01】</span>
                  <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                </div>
                <div class="list_item ellipsis1">
                  <span class="item_l">【01-01】</span>
                  <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="list_top zhengce_top">
                <div class="list_top_title">
                  <p>政策</p>
                  <p>导览</p>
                </div>
                <div class="list_wrap">
                  <div class="list_item ellipsis1">
                    <span class="item_l">【01-01】</span>
                    <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                  </div>
                  <div class="list_item ellipsis1">
                    <span class="item_l">【01-01】</span>
                    <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                  </div>
                  <div class="list_item ellipsis1">
                    <span class="item_l">【01-01】</span>
                    <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                  </div>
                  <div class="list_item ellipsis1">
                    <span class="item_l">【01-01】</span>
                    <span class="item_r">关于印发《工业互联网综合标准化体系建设指南》</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="shangyunzhinan">
                <p class="syzn_title">如何上云？</p>
                <p class="syzn_subtitle">简单几步,企业轻松上云</p>
                <div class="syzn_btn">上云指南</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <Upyun class="Upyun"></Upyun>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Upyun from "@/components/Upyun.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    Upyun
  },
  data() {
    return {
      value: 3.7,
      isCrollTop: 100,
      headerBg: false
    };
  },
  create() {
    this.getInfo();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getInfo() {
      this.$http
        .get("/api/register", {
          params: this.model
        })
        .then(res => {
          console.log(res.success);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 20) {
        this.headerBg = true;
      } else {
        this.headerBg = false;
      }
    }
  }
};
</script>
<style  lang="scss">
.headerBg {
  background: #000;
}
.goyun_btn {
  font-size: 35px;
  width: 100%;
  padding-top: 19px;
  padding-left: 95px;
  cursor: pointer;
  flex: 1;
  box-sizing: border-box;
}
.banner_wrap {
  position: relative;
}
.banner_bottom_l {
  display: flex;
  text-align: left;
  height: 126px;
  padding-top: 40px;
  color: #fff;

  box-sizing: border-box;
}
.banner_bottom_r {
  display: flex;
  text-align: left;
  color: #fff;

  box-sizing: border-box;
}
.a_btn img {
  width: 55px;
  height: 8px;
  vertical-align: middle;
}

.banner_bottom_l p {
  line-height: 24px;
}
.banner_bottom {
  position: absolute;
  bottom: 0;
  background: url("../assets/images/banner_bottom_bg.png") no-repeat;
  background-size: 100% 100%;
  z-index: 998;
  height: 126px;
  width: 100%;
  min-width: 1200px;
}
.banner_bottom_center {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.register_disc {
  padding-left: 10px;
  padding-top: 40px;
}

.banner_img {
  cursor: pointer;
  width: 100%;
}

.el-carousel__button {
  opacity: 1 !important;
  height: 10px !important;
  width: 10px !important;
  border-radius: 50%;
}

.is-active button {
  background-color: #4e9beb !important;
}
.el-carousel__indicators {
  bottom: 160px !important;
}
.register_btn {
  font-size: 35px;
  height: 126px;
  line-height: 116px;
  padding-left: 30px;
  cursor: pointer;
}
.register_disc p {
  line-height: 24px;
}

// 公告
.notice_wrap {
  width: 1200px;
  margin: 30px auto;
  height: 40px;
  background: #f1f7fd;
}
.laba {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
.notice_content {
  height: 4opx;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
}
.notice_title {

  color: #595959;
}
.notice_content_show {

  color: #000;
}
.v_dash_line {
  border-right: 1px dotted #787b7e;
  display: inline-block;
  padding-right: 20px;
  line-height: 14px;
}
.second_show {
  padding-left: 20px;
}
.notice_r_wrap {
  float: right;

  padding-right: 25px;
}
.show_num {
  color: #ff5656;
  font-size: 22px;
}
.margin_r_30 {
  margin-right: 30px;
}
// 中间四个
.margin_box {
  margin: 0 auto;
  width: 1200px;
}
.main_bar_img img {
  width: 57px;
}
.main_bar_num_box,
.main_bar_title {
  color: #595959;

}
.main_bar_num {
  font-size:50px;
  color: #000;
  margin-right: 20px;
}
// 平台动态
.ptdt_wrap {
  margin-bottom: 70px;
}
.ptdt_title {
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 90px;
}

.ptdt_subtitle {

  margin-bottom: 55px;
}
.ptdt_list {
  width: 1200px;
  margin: 0 auto;
}
.list_top {
  height: 100px;
  background: url("../assets/images/zxgg.png") no-repeat;
  background-size: 100% 100%;
}
.list_top_title {
  width: 120px;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.8);
  color: #fff;
  font-size: 20px;
  padding-top: 25px;
  box-sizing: border-box;
}
.zhengce_top {
  background-image: url("../assets/images/zcdl.jpg");
}
.shangyunzhinan {
  height: 255px;
  width: 366px;
  background: url("../assets/images/shangyunzhinan.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  text-align: left;
  padding-left: 30px;
  box-sizing: border-box;
}
.syzn_title {
  font-size: 27px;
  padding-top: 45px;
}
.syzn_subtitle {

  padding-top: 15px;
}
.syzn_btn {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 2px solid #fff;
  margin-top: 30px;
  cursor: pointer;
}
.list_wrap {
  text-align: left;
  color: #666;
  margin-top: 30px;
}
.list_item {
  margin-bottom: 18px;
  cursor: pointer;
}
.list_item:hover {
  color: #4e9beb;
}

// 星级排行
.star_top {
  position: absolute;
  right: 125px;
  top: 105px;
  // height: 406px;
  width: 286px;
  z-index: 998;
  background: #fff;
}
.star_top_title {
  height:70px;
  background: url("../assets/images/xingjipaihang.png") no-repeat;
  background-size: 100% 100%;
  font-size: 19px;
  color: #eaa946;
  line-height: 70px;
}
.top_num,
.icon_box,
.show_name,
.scode_show {
  float: left;
  margin-right: 10px;
}

.scode_show {
  margin-right: 0;
}
.star_list_item {
  clear: both;
  overflow: hidden;
  margin-bottom: 20px;
}
.top_list {
  padding-top: 20px;
  height: 220px;
  padding-left: 25px;
  box-sizing: border-box;
  overflow: auto;
}
.top_num {
  color: #595959;
  font-size: 20px;
  font-style: italic;
}
.icon_box {
  width: 28px;
}
.icon_box img {
  width: 100%;
  vertical-align: top;
}
.star_list_item:nth-of-type(1) .top_num {
  color: #f93f3f;
}
.star_list_item:nth-of-type(2) .top_num {
  color: #ffd200;
}
.star_list_item:nth-of-type(3) .top_num {
  color: #1072f7;
}
.top_disc {
  text-align: right;
  height: 60px;
  line-height: 60px;
  padding-right: 30px;
  color: #4e9beb;
  cursor: pointer;
}
.el-rate__icon {
  font-size: 18px !important;
  margin-right: 1px !important;
}
.el-rate__item {
  vertical-align: top !important;
}
.banner_img_box {
  height: 100%;
}
.banner_img_box img {
  width: 1920px;
}
</style>
