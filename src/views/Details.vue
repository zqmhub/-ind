<template>
  <div class="supply_market">
    <Header class="Header"></Header>

    <div class="main_box">
      <div class="top_bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/supplyMarket' }">供应市场</el-breadcrumb-item>
          <el-breadcrumb-item class="last_bread">{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="details_content">
        <div class="details_l">
          <div class="details_top">
            <div class="details_top_l">
              <img src="../assets/images/supply_img.png">
            </div>
            <div class="details_top_r">
              <div class="detial_title">
                MixIOT工业互联网平台MixIOT工业互联网平台MixIOT工业互联网平台
                <span class="type_tip">门户网站</span>
              </div>
              <div class="detail_disc">
                智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和智物联MixIOT工业
                互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和
              </div>
              <div class="details_top_main">
                <div class="logined"></div>
                <div class="no_login">
                  <span class="go_login">登录</span>
                  查看具体价格
                </div>
                <div class="details_btns_wrap">
                  <el-button class="details_buy" type="primary">立即购买</el-button>
                  <el-button class="details_zixun" type="primary">我要咨询</el-button>
                </div>
              </div>
            </div>
          </div>

          <div class="details_tab">
            <ul class="details_tab_ul">
              <li :class="{tab_active:isDetails}" @click="tabHandle(0)">商品详情</li>
              <li :class="{tab_active:isPinjia}" @click="tabHandle(1)">
                客户评价
                <span class="pj_num">112</span>
              </li>
            </ul>
          </div>

          <div class="details_disc_wrap">
            <div v-if="isDetails">
              <div class="disc_bar details_wendang_wrap">
                <div class="wendang_tip">商品文档</div>
                <div class="wendang_name">
                  名称：
                  <span class="fileName_show">使用说明</span>
                  <span class="download_btn">
                    <i class="el-icon-download"></i>下载
                  </span>
                </div>
              </div>
              <div class="disc_bar details_wendang_wrap">
                <div class="wendang_tip">商品参数</div>
                <div class="wendang_name">操作系统：</div>
                <div class="wendang_name">集成软件：</div>
                <div class="wendang_name">版本：</div>
                <div class="wendang_name">依赖云服务器：</div>
              </div>
              <div class="other_details"></div>
            </div>
            <div v-if="isPinjia">
              评价列表
              <div class="page_contrl">
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="details_r">
          <div class="details_r_text textalign_l">服务商</div>
          <div class="details_r_company_img">
            <img src="../assets/images/supply_img.png" alt>
          </div>
          <div class="details_r_compny_name textalign_l">深圳左邻永佳科技有限公司</div>
          <div class="details_r_compny_email textalign_l">电子邮箱：xxx@xxx.com</div>
          <div class="details_r_compny_phone textalign_l">联系电话：0755-12345678</div>
        </div>
      </div>
    </div>

    <Upyun></Upyun>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Upyun from "@/components/Upyun.vue";
export default {
  name: "supply-market",
  components: {
    Header,
    Footer,
    Upyun
  },
  data() {
    return {
      title: "",
      pj_num: 3,
      activeName: "first",
      isDetails: true,
      isPinjia: false
    };
  },
  watch: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tabHandle(index) {
      if (index == 0) {
        this.isDetails = true;
        this.isPinjia = false;
      } else if (index == 1) {
        this.isDetails = false;
        this.isPinjia = true;
      }
    }
  },
  created() {
    this.title = this.$route.params.title;
  },
  computed: {}
};
</script>
<style >
.supply_market {
  padding-top: 150px;
}
.Header {
  background: #000;
}
.main_box {
  width: 1200px;
  margin: 0 auto;
}
.last_bread {
  color: #4e9beb !important;
}

.top_bread {
  margin-bottom: 20px;
}

.details_content {
  display: flex;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.details_l {
  flex: 1;
  border-right: 1px solid #eee;
}
.details_r {
  width: 320px;
}
.details_top {
  display: flex;
  text-align: left;
  padding-bottom: 20px;
}
.details_top_l {
  width: 150px;
  padding: 20px 10px;
}
.details_top_l img {
  max-height: 100%;
  max-width: 100%;
  text-align: center;
}
.details_top_r {
  padding-top: 20px;
  padding-right: 20px;
  flex: 1;
}
.detial_title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
}
.detail_disc {
  color: #595959;
  line-height: 24px;
  margin-bottom: 30px;
}

.no_login {
  height: 70px;
  background: #fdf6e9;
  line-height: 70px;
  padding-left: 25px;
  cursor: pointer;
  font-size: 14px;
  color: #898989;
}
.go_login {
  color: #ffb425;
}
.type_tip {
  display: inline-block;
  width: 80px;
  height: 26px;
  background: #edf5fd;
  color: #408edf;
  font-size: 12px;
  vertical-align: middle;
  line-height: 26px;
  text-align: center;
}
.details_btns_wrap {
  margin-top: 20px;
  font-size: 14px;
}
.details_zixun {
  background: #ffb425;
  border-color: #ffb425;
}

/* 右边 */
.details_r_company_img {
  max-height: 100%;
  max-width: 100%;
}
.details_r {
  padding: 20px;
}
.details_r_compny_name {
  color: #408edf;
}
.details_r div {
  margin-bottom: 10px;
}
.details_tab_ul {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  clear: both;
  overflow: hidden;
}
.details_tab_ul li {
  float: left;
  padding: 20px 20px 10px 20px;
  font-size: 14px;
  cursor: pointer;
}
.details_tab_ul li.tab_active {
  border-bottom: 2px solid #408edf;
  color: #408edf;
}
.pj_num {
  color: #408edf;
}
.details_disc_wrap {
  padding: 20px;
}

.details_disc_wrap {
  text-align: left;
}
.wendang_tip {
  font-size: 14px;
  margin-bottom: 5px;
}
.wendang_name {
  color: #898989;
}
.download_btn {
  color: #408edf;
  cursor: pointer;
}
.fileName_show {
  margin-right: 10px;
}
.disc_bar {
  margin-bottom: 20px;
}
.disc_bar div {
  margin-bottom: 5px;
}
</style>

