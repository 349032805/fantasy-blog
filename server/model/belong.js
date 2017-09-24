const mongoose = require('../db.js');

//声明schema
const belongSchema = mongoose.Schema({
  belong: String,
  describe: String
});
//根据schema生成model
const model = {
  Belong: mongoose.model('Belong', belongSchema,'belong')
};

module.exports = model;