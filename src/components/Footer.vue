<template>
  <div class="footer">
    <div class="main_num_bar">
      <div class="margin_box">
        <el-row>
          <el-col :span="6">
            <div class="grid-content footer_top_item">
              <img class src="../assets/images/kf.png" alt>
              <span class="f_t_text">7天服务支持</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content footer_top_item">
              <img class src="../assets/images/you.png" alt>
              <span class="f_t_text">精选优质的服务商</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content footer_top_item">
              <img class src="../assets/images/zhi.png" alt>
              <span class="f_t_text">智能匹配精准便捷</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content footer_top_item">
              <img class src="../assets/images/zhuan.png" alt>
              <span class="f_t_text">专业品控保驾护航</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="footer_middle">
      <div class="middle_l">
        <el-row>
          <el-col :span="6">
            <div class="grid-content middle_item">
              <p class="middle_title">产品与平台</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content middle_item">
              <p class="middle_title">服务与支持</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content middle_item">
              <p class="middle_title">上云指南</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content middle_item">
              <p class="middle_title">关于我们</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
              <p class="middle_item_list">类别名称</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="middle_r">
        <el-row>
          <el-col :span="12">
            <div class="grid-content middle_item middle_r_item">
              <p class="middle_title">联系我们</p>
              <p class="middle_item_list">服务热线：0592-xxxxxxxx</p>
              <p class="middle_item_list">工作时间：周一至周五 09:00-18：00</p>
              <p class="middle_item_list">电子邮件：xxx@xxx.com</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content middle_item">
              <div>
                <img class="qecode" src="../assets/images/qrcode.png" alt>
              </div>
              <p class="guanzhuwomen">关注我们</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer_banquan">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <p class="banquan_l">© 2009-2019 xxxxxx.com 版权所有 ICP证：闽B2-123456789</p>
            <p class="banquan_l"><img src="../assets/images/banquan1.png" alt=""><img src="../assets/images/banquan2.png" alt=""> 闽公网安备 123456789123456号</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <div class="banquan_r">
              <p class="banquan_l">主办单位：厦门市经济和信息化局</p>
              <p class="banquan_l">技术支持：厦门市物联网产业研究院</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>


<style  lang="scss">
.footer {
  background: #2b373d;
}
.footer_top_item {
  height: 125px;
  line-height: 125px;
}
.footer_top_item img {
  vertical-align: middle;
  margin-right: 20px;
  width: 25px;
  height: 29px;
}
.f_t_text {
  font-size: 16px;
  color: #fff;
}
.footer_middle {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  border-top: 1px solid #364147;
  border-bottom: 1px solid #364147;
}
.middle_l {
  width: 745px;
  border-right: 1px solid #364147;
}
.middle_item {
  color: #fff;
  height: 205px;
  box-sizing: border-box;
  padding-top: 35px;
}
.middle_title {
  font-size: 16px;
  margin-bottom: 15px;
}
.middle_item_list {
  margin-bottom: 5px;
  cursor: pointer;

}
.middle_item_list:hover{
  color: #1072f7
}

.middle_r {
  padding-left: 35px;
  flex: 1;
}
.middle_r_item {
  text-align: left;
}
.guanzhuwomen {
  padding-top: 14px;
  font-size: 14px;
}
.footer_banquan {
  height: 80px;
  width: 1200px;
  margin: 0 auto;
  padding-top: 22px;
}
.banquan_l{
  text-align: left;
  padding-left: 50px;
  color: #828789;
  margin-bottom: 5px;
  font-size: 14px;
}
.banquan_l img{
  vertical-align: middle;
  margin-right: 4px;
}
.banquan_r{
  float: right;
}
.qecode{
  width: 120px;
}
</style>
