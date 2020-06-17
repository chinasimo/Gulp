const express = require('express');
const app = express();
// app.use中间件用法
// 匹配所有请求方式,可以直接传入请求处理函数,代表接收所有请求
app.use((req, res, next) => {
    console.log(req.url);
    next()
});
// 第一个参数也可以传入请求地址,无论什么请求方式,只要是这个请求地址就接收这个qingqiu
app.use('/admin', (req, res, next) => {
    console.log(req.url);
    next()
});
app.get('/', (req, res) => {
    res.send('hellow  world')
})
app.listen(3000);
console.log('已启动');