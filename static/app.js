const http = require('http');
const url = require('url');
const fs = require('fs');
const mime = require('mime');
const path = require('path');
const app = http.createServer();
app.on('request', (req, res) => {
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    // 将要用户的请求路径转化为实际的服务器硬盘
    let realPath = path.join(__dirname, 'public' + pathname);
    let type = mime.getType(realPath)

    // 读取文件
    fs.readFile(realPath, (error, result) => {
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;chartset=uft8'
            })
            res.end('文件读取失败');
            return;
        }
        res.writeHead(200, {
            'content-type': 'type'
        })
    });
})
app.listen(3000);
console.log('服务器启动成功');