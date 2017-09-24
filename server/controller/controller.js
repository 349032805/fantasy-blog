const Article = require('../model/article.js').Article;
const Belong = require('../model/belong.js').Belong;
const WebConfig = require('../model/webConfig.js').WebConfig;

//数据库的操作
// 获取所有博客文章,按是否置顶,修改时间倒序
const getAllBlogs = async (ctx) => {
  let doc = await new Promise((resolve, reject) => {
    Article.find({isHide: 0}, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    }).sort({'isUp': -1,'updateTime':-1});
  });
  ctx.status = 200;
  ctx.body = {
    message: '查询所有博客成功',
    result: doc
  };
}

// 根据分类查询描述
const getDescribeByCate = async (ctx) => {
  let cate = ctx.query.cate;
  console.log("cate:" + cate)
  let doc = await new Promise((resolve, reject) => {
    Belong.findOne({ belong: cate }, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
  ctx.status = 200;
  ctx.body = {
    message: '查询分类描述成功',
    result: doc
  };
}

// 根据分类查博客
const getBlogsByCate = async (ctx) => {
  let cate = ctx.query.cate;
  let doc = await new Promise((resolve, reject) => {
    Article.find({ belong: cate }, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
  ctx.status = 200;
  ctx.body = {
    message: '查询分类博客成功',
    result: doc
  };
}

//查询网站参数信息
const getWebConfig = async (ctx) => {
  let doc = await new Promise((resolve, reject) => {
    WebConfig.findOne({}, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
  ctx.status = 200;
  ctx.body = {
    message: '查询网站参数成功',
    result: doc
  };
}

//累计访问量
const addScanNumber = async (ctx) => {
  console.log("累计访问量")
  await new Promise((resolve, reject) => {
    WebConfig.findOneAndUpdate({},
      {
        $inc: {
          "scanNum": 1
        }
      }, { new: true }, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      })
  });
  ctx.status = 200;
  ctx.body = {
    message: '修改成功',
    success: true
  };
};


module.exports = {
  getAllBlogs,
  getDescribeByCate,
  getBlogsByCate,
  getWebConfig,
  addScanNumber
};