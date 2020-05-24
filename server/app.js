// 创建网站服务器模块
const http = require('http');
// app对象是网站服务器对象
const app = http.createServer();
// 地址内置对象url
const url = require('url');
// 当客户端口有请求时
app.on('request', (req, res) => {

    // console.log(req.method);
    // if (req.method === 'post') {
    //     res.end('post');
    // } else if (req.method === 'get') {
    //     res.end('get');
    // }
    // res.end('<h1>hello user</h2>');

    // 打印url 这个ture将查询参数解析成对象



    res.writeHead(200, {
        'content-type': 'text/html ;chartset = utf8'
    });
    // console.log(req.url);
    // let { query, pathname } = url.parse(req.url, ture).query;
    // console.log(query.name)
    // console.log(query.age)
    console.log(req.url);
    let { query, pathname } = url.parse(req.url, true)
    console.log(query.name)
    console.log(query.age)



    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>welcome to homepage</h2>');
    } else if (pathname == '/list') {
        res.end('welcome to lsit');
    } else {
        res.end('NO response');
    }
});
app.listen(3000);
console.log('ok');