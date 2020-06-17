const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
const redaFile = promisify(fs.redaFile);
// 创建网站服务器
const app = express();

app.get('/index', async(req, res, next) => {
        try {

        } catch {

        }
        await redaFile('./aaa.js')
    })
    // 错误处理中间件
app.use((err, req, res, next), () => {
    res.status(500).send('err.massage')
})
app.listen(3000);
console.log('已启动');