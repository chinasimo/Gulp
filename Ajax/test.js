// Ajix实现步骤

// 1.创建Ajax对象
var xhr = XMLHttpRequest();
// 2.告诉Ajax请求地址以及请求方式
xhr.opne('get', 'http://www.examp.com');
// 3.发送请求
xhr.send();
// 4.获取服务器端与客户端的响应数据
xhr.onload = function() {
    // console.log(xhr.responseText);
    var responseText = JSON.parse(xhr.responseText)

}