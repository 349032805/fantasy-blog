<template>
  <div>
    <div class="head-ban">
      <div class="ban-content">
        <ul class="clearfix">
          <li @click="gotoAboutMe" style="cursor: pointer">
            <span style="position:relative;top:1px;">
              <i class="fa fa-child"></i> 关于我</span>
          </li>
          <li @click="gotoLeaveMessage" style="cursor: pointer">
            <span style="position:relative;top:1px;">
              <i class="fa fa-edit"></i> 留言</span>
          </li>
          <li>
            <div class="tooltip">
              <img src="../images/browse.png" class="group-icon">
              <span>{{scanNum}}</span>
              <span class="tooltiptext">浏览次数</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="blogs">
      <div class="nav">
        <ul>
          <waveBtn @click="changeTab('all')" :class="{'active':currentTheme == 'all'}">全部</waveBtn>
          <waveBtn @click="changeTab('vuejs')" :class="{'active':currentTheme == 'vuejs'}">Vuejs</waveBtn>
          <waveBtn @click="changeTab('angularjs')" :class="{'active':currentTheme == 'angularjs'}">Angularjs</waveBtn>
          <waveBtn @click="changeTab('nodejs')" :class="{'active':currentTheme == 'nodejs'}">Nodejs</waveBtn>
          <waveBtn @click="changeTab('css3')" :class="{'active':currentTheme == 'css3'}">css3</waveBtn>
          <waveBtn @click="changeTab('java')" :class="{'active':currentTheme == 'java'}">Java</waveBtn>
          <waveBtn @click="changeTab('web')" :class="{'active':currentTheme == 'web'}">网站</waveBtn>
          <waveBtn @click="changeTab('life')" :class="{'active':currentTheme == 'life'}">生活</waveBtn>
        </ul>
      </div>
      <div class="content">
        <div class="column">
          <div class="two-columns">
            <div class="left-column part">
              <p class="intro" v-html="describe">

              </p>
            </div>
            <div class="right-column part">
              <div class="list-box">
                <div class="box" v-show="articleList.length>0">
                  <ul>

                    <li @click="gotoDetail(item._id)" v-for="(item,index) in articleList" :key="index">
                      <span class="article-title overflow">{{item.title}}</span>
                      <span class="time-scan">
                        <span class="article-time">{{item.updateTime | formatDate}}</span>
                        <span class="scan-num">
                          <img src="../images/browse2.png">
                          <span class="article-scan">{{item.scanNum}}</span>
                        </span>
                      </span>
                    </li>

                  </ul>
                </div>

                <div class="empty-tip" v-show="articleList.length==0">暂无文章</div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import waveBtn from '../components/waveBtn';
import api from '../api/api';
import { formatDate } from '@/utils/date';
export default {
  data() {
    return {
      currentTheme: '',
      describe: '',
      articleList: [],
      detailDomainName: '',
      scanNum: 0
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
  created() {
    console.log("---------create");
    this._getAllBlogs();
    this._getDescribeByCate('all');
    this._getWebConfig();

    //统计访问量
    this._addScanNum();
  },
  methods: {
    changeTab(theme) {
      this.currentTheme = theme;
      this._getDescribeByCate(theme);
      this._getBlogsByCate(theme);
    },
    gotoDetail(id) {
      // http://localhost:4200/songDetail/1?id=5986add8dbb50773b45eebe3
      let url = this.detailDomainName + '/#/blogDetail/1?id=' + id;
      window.open(url);
    },
    _getAllBlogs() {
      api.getAllBlogs().then((response) => {
        this.articleList = response.result;
      });
    },
    _getBlogsByCate(cate) {
      if (cate == 'all') {
        this._getAllBlogs();
      } else {
        api.getBlogsByCate(cate).then((response) => {
          this.articleList = response.result;
        });
      }
    },
    _getDescribeByCate(cate) {
      api.getDescribeByCate(cate).then((response) => {
        if (response.result) {
          if (response.result.describe) {
            this.describe = response.result.describe;
          } else {
            this.describe = "暂无简介"
          }
        } else {
          this.describe = "暂无简介"
        }

      });
    },
    _getWebConfig() {
      api.getWebConfig().then((response) => {
        this.detailDomainName = response.result.detailDomainName;
        this.scanNum = response.result.scanNum;
      });
    },
    gotoAboutMe() {
      let url = this.detailDomainName + '/#/aboutMe';
      window.location.href = url;
    },
    gotoLeaveMessage() {
      let url = this.detailDomainName + '/#/leaveMessage';
      window.location.href = url;
    },
    _addScanNum(){
       api.addScanNumber();
    }

  },
  components: {
    waveBtn
  }
};
</script>

<style lang="less" scoped>
.blogs {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  .nav {
    background-color: rgba(122, 193, 224, .42);
    overflow: hidden;
    border: 1px solid #68adc7;
    margin: 15px 0;

    ul {
      display: flex;
      li {
        flex: 1;
        cursor: pointer;
        text-align: center;
        height: 60px;
        line-height: 60px;


        &.active {
          color: #fff!important;
          background: #66caf1!important;
        }
        &:hover {
          color: #fff;
          background: #66caf1;
        }
      }
    }
  }

  .content {
    .column {
      position: absolute;
      top: 100px;
      bottom: 40px;
      width: 100%;
      .two-columns {
        height: 100%;
        .part {
          height: 100%;
          background-color: rgba(179, 234, 234, .24);
          border: 1px solid #66caf1;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .part::-webkit-scrollbar {
          display:none;
        }
        .left-column {
          width: 38%;
          float: left;
          .intro {
            padding: 15px;
            text-indent: 2em;
            text-align: justify;
            line-height: 28px;
            font-size: 15px;
          }
        }

        .right-column {
          width: 60%;
          float: right;

          .list-box {
            padding: 15px;
            .box {
              width: 100%;
              height: 100%;
              border: 1px solid #fff;
              border-radius: 5px;
              ul {
                li {
                  line-height: 43px;
                  height: 45px;
                  border-bottom: 1px solid #fff;
                  padding: 0 15px;
                  font-size: 15px;
                  transition: .3s;
                  -webkit-transition: .3s;
                  overflow: hidden;
                  cursor: pointer;
                  color: #555;
                  &:hover {
                    color: #fff;
                    background: #66caf1;
                    opacity: 0.7;
                    padding-left: 30px;
                  }

                  img {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                  }

                  .article-title {
                    width: 70%;
                    display: block;
                    float: left;
                  }

                  .time-scan {
                    width: 30%;
                    display: block;
                    float: right;
                    text-align: right;
                    font-size: 12px;

                    * {
                      display: inline-block;
                    }

                    .article-time {
                      vertical-align: middle;
                      margin-right: 10px;
                    }

                    .scan-num {
                      width: 64px;
                      text-align: left; // height: 100%;
                      // border: 1px solid red;
                    }
                    .article-scan {
                      vertical-align: middle;
                      color: #999;
                    }
                  }
                }
              }
            }
            .empty-tip {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
