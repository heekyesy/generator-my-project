var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.query() 地址栏请求参数
  res.send('请求成功，接口示例有，add,delete,update,query')
  // res.render('index', { title: 'Express' });// 渲染views下index.jade模版
});

// req.body

module.exports = router;
