const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');//本地服务器
// schema 结构在bin下
const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');
const deleteRouter = require('./routes/delete');
const updateRouter = require('./routes/update');
const queryRouter = require('./routes/query');

const app = express();

// 注册输出模版
app.set('views', path.join(__dirname, 'views'));// 设置views模版文件夹输出到浏览器
app.set('view engine', 'jade');// 注册模板引擎第一参数使用模版引擎，第二参数后缀jade的模版文件

app.use(logger('dev'));// 中间件处理，没有置顶请求地址，所有请求将全部经过该中间件处理
app.use(express.json());// 解析 JSON 格式的请求体数据
app.use(express.urlencoded({ extended: false }));// 解析 URL-encoded 格式的请求体数据
app.use(express.static(path.join(__dirname, 'public'))); //快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等

app.use('/', indexRouter);
app.use('/add', addRouter);// 根目录请求处理指向indexRouter文件
app.use('/delete', deleteRouter);
app.use('/update', updateRouter);
app.use('/query', queryRouter);

// 所有路径都不匹配时
app.use(function(req, res, next) {
  next(createError(404));
  // 创建一个404报错并进入下一个中间件
});

// 错误处理中间件错误信息在views模版中使用
app.use(function(err, req, res, next) {
  res.locals.message = err.message;// 错误信息
  res.locals.error = req.app.get('env') === 'development' ? err : {};// 不同开发环境返回不同错误信息
  res.status(err.status || 500);//错误码
  res.render('error');
});

module.exports = app;

// views是输入jade模版组件文件，routers是接口处理文件，public是资源文件，www是服务启动，端口3000
