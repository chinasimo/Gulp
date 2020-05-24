const http = require('http');
const url = require('url')
const app = http.createServer();
app.on('request', (req, res) => {
    const method = req.method.toLowerCase();
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200, {
        'content-type': 'text/html;chartset=utf8'
    });
    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('welcome to homepage')
        } else if (pathname == '/lsit') {
            res.end('welcome to listpage')
        } else {
            res.end('no found')
        }
    } else if (method == 'get') {

    }
})
app.listen(3000);
console.log('服务器启动成功');