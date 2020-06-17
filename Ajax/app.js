const express = require('express');
const path = require('path');
// 创建web服务器
const app = express();

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

// 对应html文件
app.get('/frist', (req, res) => {
    res.end('hellow,Ajax');
})

app.get('responseDate', (req, res) => {
    res.send({ "name": "zs" })
})
app.listen(3000);
console.log('服务器成功启动');