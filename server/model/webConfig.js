const mongoose = require('../db.js');

//声明schema
const webConfigSchema = mongoose.Schema({
  mainDomainName: String,
  detailDomainName: String,
  adminDomainName: String,
  scanNum: Number
});
//根据schema生成model
const model = {
  WebConfig: mongoose.model('WebConfig', webConfigSchema,'webConfig')
};

module.exports = model;