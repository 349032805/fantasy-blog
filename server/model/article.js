const mongoose = require('../db.js');

//声明schema
const articleSchema = mongoose.Schema({
  title: String,
  belong: String,
  content: String,
  evaluate: String,
  createTime: Number,
  updateTime: Number,
  isUp: Number,
  isHide: Number,
  scanNum: Number
});
//根据schema生成model
const model = {
  Article: mongoose.model('Article', articleSchema,'article')
};

module.exports = model;