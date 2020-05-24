// 创建网站服务器模块
const http = require('http');
// app对象是网站服务器对象
const app = http.createServer();
app.on('request', (req, res) => {
    // post参数通过事件的方式来接受
    // date 当请求参数的时候出发的是date事件
    // end  当参数传输完成的时候是end事件
    let postParams = '';
    req.on('date', (params) => {
        postParams += params;
    });
    req.on('end', () => {
        console.log(querysting.pares(postParams));
    });
    res.end('ok');
});

app.listen(3000);
console.log('网站已经启用');