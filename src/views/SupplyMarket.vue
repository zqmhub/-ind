<template>
  <div class="supply_market">
    <Header class="Header"></Header>

    <div class="supply_market_box">
      <div class="sm_top">
        <div class="title">供应市场</div>
        <div class="serve_menu" @mouseover="showMenuList" @mouseleave="closeMenuList">
          <span class="menu_text" >服务目录</span> 
          <div v-if="isShowMenuBox"  class="menu_list"></div>
        </div>

        <!-- <div class="search_serve" >
          <el-input placeholder="输入您所需要的服务" v-model="input2">
            <template slot="append">搜索</template>
          </el-input>
        </div>-->
        <div class="serve_join_btn btn yellow_linear_gradient">
          <img src="../assets/images/serve_join.png" alt> 服务商入驻
        </div>
      </div>

      <div class="shaixuan_bar">
        <div class="shaixuan_top">
          筛选条件：
          <span v-if="isShowTiaojian">
            <span class="shaixuan_item" v-for="(item,index) in shaixuanArr" :key="index">
              {{item.father+'：'+item.son}}
              <i
                @click="delShaiXuan(index)"
                class="close_btn el-icon-close"
              ></i>
            </span>
          </span>
          <span v-else>暂无筛选条件</span>
          <!-- <span class="shaixuan_item">
            服务分类：全部
            <i class="close_btn el-icon-close"></i>
          </span>
          <span class="shaixuan_item">
            服务分类：全部
            <i class="close_btn el-icon-close"></i>
          </span>-->
        </div>
        <div class="shuaixuan_content">
          <div class="content_item">
            服务分类：
            <span class="classify_all" @click="clickClassify('服务分类','全部')">全部</span>
            <span class="classify_item" @click="clickClassify('服务分类','管理')">管理</span>
            <span class="classify_item" @click="clickClassify('服务分类','业务')">业务</span>
            <span class="classify_item">基础建设</span>
          </div>
          <div class="content_item">
            服务子类：
            <span class="classify_all" @click="clickClassify('服务子类','全部')">全部</span>
            <span class="classify_item" @click="clickClassify('服务子类','门户网站')">门户网站</span>
          </div>
        </div>
      </div>

      <div class="shaixuan_bar">
        <div class="supply_list_top">
          <span class="zonghepaixu" :class="{self_active:isZongHe}" @click="sortTab(0)">综合排序</span>
          <span class="fabushijian" :class="{self_active:isTime}" @click="sortTab(1)">
            发布时间
            <i :class="isTimeUp?'el-icon-sort-up':'el-icon-sort-down'"></i>
          </span>
          <span class="guanzhudu" :class="{self_active:isGuanzhudu}" @click="sortTab(2)">
            关注度
            <i :class="isGuanzhuNumUp?'el-icon-sort-up':'el-icon-sort-down'"></i>
          </span>
          <div class="show_total">
            为您找到
            <span class="total_num">233</span> 个商品
          </div>
        </div>
        <div class="supply_list_content">
          <div class="supply_list_item">
            <div class="supply_item_img">
              <img src="../assets/images/supply_img.png">
            </div>
            <div class="supply_item_center">
              <div class="supply_item_title">MixIOT工业互联网平台</div>
              <div
                class="supply_item_disc ellipsis1"
              >智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和</div>
              <div class="other_about">
                <span class="other_item item_version">版本：v1.0</span>
                <span class="other_item">操作系统：Linux</span>
                <span class="other_item">发布时间：2019-03-13 10:09:08</span>
              </div>
              <div class="supply_company">服务商：深圳左邻永佳科技有限公司</div>
            </div>
            <div class="view_details">
              <router-link
                :to="{name:'details',params:{
                  id:'id12233',
                  title:'titleBIaoti',
                 
                }}"
              >
                <el-button class="details_btn" type="primary">查看详情</el-button>
              </router-link>
            </div>
          </div>

          <div class="supply_list_item">
            <div class="supply_item_img">
              <img src="../assets/images/supply_img.png">
            </div>
            <div class="supply_item_center">
              <div class="supply_item_title">MixIOT工业互联网平台</div>
              <div
                class="supply_item_disc ellipsis1"
              >智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和</div>
              <div class="other_about">
                <span class="other_item item_version">版本：v1.0</span>
                <span class="other_item">操作系统：Linux</span>
                <span class="other_item">发布时间：2019-03-13 10:09:08</span>
              </div>
              <div class="supply_company">服务商：深圳左邻永佳科技有限公司</div>
            </div>
            <div class="view_details">
              <el-button class="details_btn" type="primary">查看详情</el-button>
            </div>
          </div>

          <div class="supply_list_item">
            <div class="supply_item_img">
              <img src="../assets/images/supply_img.png">
            </div>
            <div class="supply_item_center">
              <div class="supply_item_title">MixIOT工业互联网平台</div>
              <div
                class="supply_item_disc ellipsis1"
              >智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和智物联MixIOT工业互联网平台，融合了数据采集，数据的存储、处理、分析与应用，具有快速接入和</div>
              <div class="other_about">
                <span class="other_item item_version">版本：v1.0</span>
                <span class="other_item">操作系统：Linux</span>
                <span class="other_item">发布时间：2019-03-13 10:09:08</span>
              </div>
              <div class="supply_company">服务商：深圳左邻永佳科技有限公司</div>
            </div>
            <div class="view_details">
              <el-button class="details_btn" type="primary">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page_contrl">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
      input2: "",
      isZongHe: true,
      isTime: false,
      isGuanzhudu: false,
      currentIndex: 0,
      isTimeUp: false, //由近及远
      isGuanzhuNumUp: false, //由少至多
      shaixuanArr: [{ father: "服务分类", son: "管理0" }],
      isShowTiaojian: false,
      isShowMenuBox:false
    };
  },
  watch: {},
  methods: {
    clickClassify(father, son) {
      var isDone = this.shaixuanArr.some(item => {
        return item.father == father;
      });
      this.isShowTiaojian = true;

      if (isDone) {
        return true;
      } else {
        this.shaixuanArr.push({
          father: father,
          son: son
        });
      }
    },
    delShaiXuan(index) {
      //删除筛选条件
      this.shaixuanArr.splice(index, 1);
      if (this.shaixuanArr.length == 0) {
        this.isShowTiaojian = false;
      } else {
        this.isShowTiaojian = true;
      }
    },
    sortTab(index) {
      //切换tab

      switch (index) {
        case 0:
          //综合
          this.isZongHe = true;
          this.isTime = this.isGuanzhudu = false;
          // if (this.currentIndex == index) {

          // }
          this.currentIndex = index;
          break;
        case 1:
          //时间
          this.isTime = true;
          this.isZongHe = this.isGuanzhudu = false;

          if (this.currentIndex == index) {
            console.log(this.currentIndex);
            this.isTimeUp = !this.isTimeUp;
          }
          this.currentIndex = index;
          break;
        case 2:
          //关注度
          this.isGuanzhudu = true;
          this.isZongHe = this.isTime = false;
          if (this.currentIndex == index) {
            console.log(this.currentIndex);
            this.isGuanzhuNumUp = !this.isGuanzhuNumUp;
          }
          this.currentIndex = index;
          break;
      }
    },
    showMenuList(){
      console.log('移入');
      this.isShowMenuBox = true
      
    },
    closeMenuList(){
      console.log('移开');
      
      this.isShowMenuBox = false
    }
  },
  created() {
    if (this.shaixuanArr.length) {
      this.isShowTiaojian = true;
    }
  },


};
</script>
<style >
.title,
.serve_menu {
  float: left;
  position: relative;

}
.serve_join_btn {
  float: right;
}
.title {
  font-size: 32px;
  color: #203147;
  margin-right: 25px;
}
.search_serve {
  width: 628px;
  margin-left: 190px;
  margin-right: 15px;
}
.search_serve .el-input__inner {
  height: 44px !important;
}
.serve_menu {
  margin-top: 20px;
}
.serve_join_btn {
  height: 44px;
  width: 150px;
  border-radius: 22px 22px;
  line-height: 44px;
  cursor: pointer;
  color: #fff;
}
.serve_join_btn img {
  vertical-align: middle;
  margin-right: 5px;
}
.supply_market {
  padding-top: 150px;
}
.Header {
  background: #000;
}

.supply_market_box {
  width: 1200px;
  margin: 0 auto;
}

.sm_top {
  height: 100px;
}

/* 筛选 */
.shaixuan_bar {
  /* height: 170px; */
  border: 1px solid #eeeeee;
  margin-bottom: 26px;
}

.shaixuan_top {
  background: #f7f8fa;
  border-bottom: 1px solid #eeeeee;
  padding-left: 20px;
  text-align: left;
  line-height: 60px;
}
.shaixuan_item {
  border: 1px dashed #000;
  padding: 5px 10px;
  margin-right: 10px;
}
.close_btn {
  margin-left: 5px;
  cursor: pointer;
}
.shuaixuan_content {
  padding-left: 20px;
  text-align: left;
}
.content_item {
  line-height: 40px;
  overflow: hidden;
  word-break: break-all;
}
.classify_all {
  color: #4e9beb;
  padding-left: 10px;
  margin-right: 50px;
  cursor: pointer;
}
.classify_item {
  margin-right: 50px;
  cursor: pointer;
}
.classify_item:hover {
  color: #4e9beb;
}
.supply_list_top {
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  background: #f7f8fa;
  border-bottom: 1px solid #eeeeee;
}
.zonghepaixu,
.fabushijian {
  margin-right: 55px;
}
.self_active {
  color: #4e9beb;
}
.supply_list_top span {
  cursor: pointer;
}
.supply_list_top span:hover {
  color: #4e9beb;
}

.supply_list_item {
  height: 160px;
  padding-left: 20px;
  display: flex;
  border-bottom: 1px solid #eeeeee;
}
.supply_list_item:last-child {
  border: 0;
}
.supply_item_img {
  width: 150px;
  height: 160px;
  line-height: 160px;
  text-align: center;
}
.supply_item_img img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.supply_item_title {
  text-align: left;
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 10px;
}
.other_about {
  text-align: left;
  font-size: 12px;
  margin-bottom: 10px;
}
.supply_item_center {
  width: 550px;
  text-align: left;
}
.supply_item_disc {
  margin-bottom: 10px;
}
.view_details {
  height: 160px;
  flex: 1;
  line-height: 160px;
}
.details_btn {
  height: 44px;
}
.show_total {
  float: right;
  padding-right: 20px;
}
.total_num {
  color: #4e9beb;
}
.page_contrl {
  margin-bottom: 20px;
}
/* 目录列表 */
.menu_list {
  position: absolute;
  height: 100px;
  width: 100px;
  background: #fff;
  border: 1px solid #eee;

}
.menu_text{
  cursor: pointer;
}
</style>

